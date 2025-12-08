import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#060010]">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
