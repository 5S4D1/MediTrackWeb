import { Link, useLocation } from 'react-router-dom'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-transparent backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-2xl font-bold text-white">Meditrack</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/')
                  ? 'bg-blue-600 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              Home
            </Link>
            <Link
              to="/features"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/features')
                  ? 'bg-blue-600 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              Features
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${isActive('/about')
                  ? 'bg-blue-600 text-white'
                  : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation