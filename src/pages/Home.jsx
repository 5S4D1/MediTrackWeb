import { Link } from 'react-router-dom'
import Threads from '../components/Threads'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section (background + foreground) */}
      <Hero
        heightClass="min-h-[600px] md:h-screen"
        overlay
        overlayClass="bg-gradient-to-b from-black/70 via-black/40 to-transparent"
        background={
          <div className="w-full h-full">
            <Threads amplitude={1.4} distance={0.35} enableMouseInteraction={true} />
          </div>
        }
      >
        <div className="flex w-full items-center justify-center">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text content */}
            <div className="px-4">
              <div className="bg-white/4 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/4 shadow-2xl">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Meditrack</h1>
                <p className="mt-3 text-lg md:text-2xl text-blue-300 font-medium">Smart Health Companion for Families</p>
                <p className="mt-4 text-sm md:text-base text-gray-300 max-w-xl">
                  Manage your family's health with ease. Track medications, store prescriptions,
                  and get AI-powered health insights—all in one secure, user-friendly app designed
                  to keep your loved ones healthy and connected.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-base hover:bg-blue-600 transition"
                  >
                    Download App
                  </Link>
                  <Link
                    to="/features"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-lg font-medium text-base hover:bg-white/5 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Feature highlights */}
            <div className="px-4">
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-white/2 border border-white/4 backdrop-blur-sm">
                  <h4 className="text-white font-semibold">Smart Reminders</h4>
                  <p className="text-gray-300 text-sm mt-2">Never miss a medication — intelligent scheduling and reminders.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/2 border border-white/4 backdrop-blur-sm">
                  <h4 className="text-white font-semibold">Prescription Vault</h4>
                  <p className="text-gray-300 text-sm mt-2">Securely store and share prescriptions with family members.</p>
                </div>
                <div className="p-6 rounded-xl bg-white/2 border border-white/4 backdrop-blur-sm">
                  <h4 className="text-white font-semibold">AI Insights</h4>
                  <p className="text-gray-300 text-sm mt-2">Get personalized health recommendations and trends at a glance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Hero>

      {/* Quick Features Preview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/4 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/7">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Smart Reminders</h3>
            <p className="text-gray-300">Never miss a medication with intelligent reminders</p>
          </div>
          <div className="bg-white/4 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/7">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Prescription Management</h3>
            <p className="text-gray-300">Store and organize all your prescriptions digitally</p>
          </div>
          <div className="bg-white/4 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/7">
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
      <Footer />
    </div>
  )
}

export default Home

