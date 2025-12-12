import Footer from '../components/Footer'

function About() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Meditrack
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Empowering families to take control of their health, one reminder at a time
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 text-blue-400">
                📖
              </span>
              Our Story
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              Meditrack was born from a simple observation: managing family health, especially 
              for elderly members, is challenging and often overwhelming. In Bangladesh, where 
              healthcare access can be limited and family members often live far apart, keeping 
              track of medications, prescriptions, and health records becomes a critical need.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envisioned a solution that would bridge the gap between families and healthcare, 
              making it easier for everyone—from busy parents to elderly grandparents—to stay 
              healthy and connected. Meditrack is more than an app; it's a commitment to 
              improving health outcomes for families across Bangladesh and beyond.
            </p>
          </section>

          {/* Problem Statement */}
          <section className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mr-4 text-red-400">
                ⚠️
              </span>
              The Problem
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                Many families struggle with medication management, especially when caring for 
                elderly relatives. Common challenges include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 ml-4">
                <li>Forgetting to take medications on time</li>
                <li>Losing or misplacing prescriptions</li>
                <li>Difficulty coordinating care among family members</li>
                <li>Lack of access to reliable health information</li>
                <li>Emergency situations where critical health data is unavailable</li>
                <li>Language barriers and limited health literacy</li>
              </ul>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                These issues are particularly acute in Bangladesh, where healthcare infrastructure 
                is still developing and many families rely on informal care networks.
              </p>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-linear-to-r from-[#071133] via-[#09203f] to-[#0f766e] p-8 md:p-12 rounded-2xl shadow-2xl text-white">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                🎯
              </span>
              Our Mission
            </h2>
            <p className="text-xl leading-relaxed mb-4">
              To make healthcare management accessible, simple, and effective for every family, 
              with a special focus on supporting elderly care and improving health outcomes in 
              underserved communities.
            </p>
            <p className="text-xl leading-relaxed">
              We believe that technology should empower families to take control of their health, 
              regardless of their location, education level, or technical expertise. Meditrack 
              is designed to be intuitive, multilingual, and culturally sensitive to the needs 
              of families in Bangladesh and similar contexts.
            </p>
          </section>

          {/* Impact & SDG 3 */}
          <section className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4 text-green-400">
                🌍
              </span>
              Impact & SDG 3 Alignment
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Supporting Families in Bangladesh
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Meditrack is specifically designed to address the unique healthcare challenges 
                  faced by families in Bangladesh. We support elderly care by making it easier 
                  for adult children to monitor and assist their parents' medication schedules, 
                  even when living in different cities or countries. The app helps bridge the 
                  gap between traditional family care structures and modern healthcare needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Elderly Care Support
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our platform recognizes that elderly individuals often need extra support with 
                  medication management. Meditrack provides simple, clear reminders and allows 
                  family members to coordinate care remotely. This is especially valuable in 
                  Bangladesh, where many elderly people live with limited support and may have 
                  difficulty managing complex medication regimens.
                </p>
              </div>
              <div className="bg-green-500/10 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  UN Sustainable Development Goal 3: Good Health and Well-being
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed mb-3">
                  Meditrack directly contributes to SDG 3 by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 ml-4">
                  <li><strong>Reducing medication errors:</strong> Smart reminders and clear information help prevent missed doses and incorrect medication usage</li>
                  <li><strong>Improving health literacy:</strong> AI-powered health information makes medical knowledge more accessible</li>
                  <li><strong>Enhancing healthcare access:</strong> Digital prescription management reduces barriers to medication adherence</li>
                  <li><strong>Supporting preventive care:</strong> Health tracking and reminders promote proactive health management</li>
                  <li><strong>Strengthening health systems:</strong> Better coordination between families and healthcare providers</li>
                </ul>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  By making health management more accessible and effective, Meditrack helps 
                  families achieve better health outcomes, contributing to the global goal of 
                  ensuring healthy lives and promoting well-being for all at all ages.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <section className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4 text-blue-400">
                🔮
              </span>
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We envision a future where every family, regardless of their location or resources, 
              has access to tools that help them manage their health effectively. Meditrack aims 
              to become the trusted health companion for millions of families, starting in 
              Bangladesh and expanding to serve communities worldwide. Through technology, 
              compassion, and innovation, we're building a healthier world, one family at a time.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About