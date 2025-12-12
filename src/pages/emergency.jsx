import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'

function Emergency() {
  const { uid, accessId } = useParams()
  const [emergencyData, setEmergencyData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmergencyData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // Replace with your actual backend API URL
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
        const response = await fetch(`${API_BASE_URL}/emergency/${uid}/${accessId}`)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch emergency data: ${response.statusText}`)
        }
        
        const result = await response.json()
        // Extract data from the response structure: { success: true, data: {...} }
        if (result.success && result.data) {
          setEmergencyData(result.data)
        } else {
          throw new Error('Invalid response format')
        }
      } catch (err) {
        setError(err.message || 'Failed to load emergency data')
        console.error('Error fetching emergency data:', err)
      } finally {
        setLoading(false)
      }
    }

    if (uid && accessId) {
      fetchEmergencyData()
    } else {
      setError('Missing user ID or access ID')
      setLoading(false)
    }
  }, [uid, accessId])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060010] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading emergency information...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#060010] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-red-500/10 backdrop-blur-sm p-8 rounded-2xl border border-red-500/20 text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Error</h2>
          <p className="text-red-300">{error}</p>
        </div>
      </div>
    )
  }

  if (!emergencyData) {
    return (
      <div className="min-h-screen bg-[#060010] flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center">
          <p className="text-white text-lg">No emergency data found</p>
        </div>
      </div>
    )
  }

  // Calculate age from dateOfBirth
  const calculateAge = (dateOfBirth) => {
    if (!dateOfBirth) return null
    const birthDate = new Date(dateOfBirth)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  const age = calculateAge(emergencyData.dateOfBirth)

  return (
    <div className="min-h-screen bg-[#060010] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500/20 rounded-full mb-4">
            <span className="text-4xl">🚨</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Emergency Information
          </h1>
          <p className="text-gray-300 text-lg">
            Critical health information for emergency situations
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center mr-3 text-blue-400">
                👤
              </span>
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Full Name</p>
                <p className="text-white text-xl font-semibold">
                  {emergencyData.fullName || 'Not provided'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Age</p>
                <p className="text-white text-xl font-semibold">
                  {age ? `${age} years` : 'Not provided'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Date of Birth</p>
                <p className="text-white text-xl font-semibold">
                  {emergencyData.dateOfBirth || 'Not provided'}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400 text-sm mb-1">Blood Type</p>
                <p className="text-white text-xl font-semibold">
                  {emergencyData.bloodType ? (
                    <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-lg inline-block">
                      {emergencyData.bloodType}
                    </span>
                  ) : (
                    'Not provided'
                  )}
                </p>
              </div>
              {emergencyData.phone && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${emergencyData.phone}`}
                    className="text-blue-400 text-xl font-semibold hover:text-blue-300 transition-colors"
                  >
                    {emergencyData.phone}
                  </a>
                </div>
              )}
              {emergencyData.email && (
                <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <a
                    href={`mailto:${emergencyData.email}`}
                    className="text-blue-400 text-xl font-semibold hover:text-blue-300 transition-colors"
                  >
                    {emergencyData.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Emergency Contacts Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mr-3 text-green-400">
                📞
              </span>
              Emergency Contacts
            </h2>
            {emergencyData.emergencyContacts && emergencyData.emergencyContacts.length > 0 ? (
              <div className="space-y-4">
                {emergencyData.emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-linear-to-br from-[#071133] via-[#09203f] to-[#0f766e] rounded-xl p-6 border border-green-500/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {contact.name && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Contact Name</p>
                          <p className="text-white text-lg font-semibold">
                            {contact.name}
                          </p>
                        </div>
                      )}
                      {contact.relationship && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Relationship</p>
                          <p className="text-white text-lg font-semibold">
                            {contact.relationship}
                          </p>
                        </div>
                      )}
                      {contact.phone && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Phone Number</p>
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-green-400 text-lg font-semibold hover:text-green-300 transition-colors"
                          >
                            {contact.phone}
                          </a>
                        </div>
                      )}
                      {contact.email && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Email</p>
                          <a
                            href={`mailto:${contact.email}`}
                            className="text-blue-400 text-lg font-semibold hover:text-blue-300 transition-colors"
                          >
                            {contact.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <p className="text-gray-400">No emergency contact information available</p>
              </div>
            )}
          </div>

          {/* Medical Information */}
          {(emergencyData.allergies || emergencyData.medicalConditions || emergencyData.lastDoctorVisit || emergencyData.lastDoctor) && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center mr-3 text-yellow-400">
                  ⚕️
                </span>
                Medical Information
              </h2>
              <div className="space-y-4">
                {emergencyData.allergies && emergencyData.allergies.length > 0 && (
                  <div className="bg-yellow-500/10 rounded-xl p-6 border border-yellow-500/20">
                    <p className="text-yellow-300 font-semibold mb-3 flex items-center">
                      <span className="mr-2">⚠️</span>
                      Allergies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {emergencyData.allergies.map((allergy, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-yellow-500/20 text-yellow-200 rounded-lg text-sm font-medium"
                        >
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {emergencyData.medicalConditions && emergencyData.medicalConditions.length > 0 && (
                  <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20">
                    <p className="text-orange-300 font-semibold mb-3 flex items-center">
                      <span className="mr-2">🏥</span>
                      Medical Conditions
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {emergencyData.medicalConditions.map((condition, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-orange-500/20 text-orange-200 rounded-lg text-sm font-medium"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {(emergencyData.lastDoctorVisit || emergencyData.lastDoctor) && (
                  <div className="bg-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                    <p className="text-blue-300 font-semibold mb-3 flex items-center">
                      <span className="mr-2">👨‍⚕️</span>
                      Last Doctor Visit
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {emergencyData.lastDoctorVisit && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Date</p>
                          <p className="text-white font-semibold">
                            {emergencyData.lastDoctorVisit}
                          </p>
                        </div>
                      )}
                      {emergencyData.lastDoctor && (
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Doctor</p>
                          <p className="text-white font-semibold">
                            {emergencyData.lastDoctor}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            This information is displayed for emergency purposes only
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Emergency