import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#060010' }}>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Meditrack
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 font-semibold mb-6">
              Smart Health Companion for Families
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
              Manage your family's health with ease. Track medications, store prescriptions, 
              and get AI-powered health insights—all in one secure, user-friendly app designed 
              to keep your loved ones healthy and connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/features"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg 
                         hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 duration-200"
              >
                Download App
              </Link>
              <Link
                to="/features"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg 
                         hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl 
                         transform hover:-translate-y-1 duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right Hero Image/Mockup */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl p-8 
                            shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <div className="space-y-4">
                    <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-green-200 rounded w-1/2"></div>
                    <div className="h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded-lg"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-blue-100 rounded"></div>
                      <div className="h-16 bg-green-100 rounded"></div>
                      <div className="h-16 bg-blue-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-30 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500 rounded-full opacity-30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Features Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Reminders</h3>
            <p className="text-gray-300">Never miss a medication with intelligent reminders</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Prescription Management</h3>
            <p className="text-gray-300">Store and organize all your prescriptions digitally</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI Health Assistant</h3>
            <p className="text-gray-300">Get instant health insights and recommendations</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

