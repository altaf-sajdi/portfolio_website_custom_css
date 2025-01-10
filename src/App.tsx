import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-gray-900">
                  Portfolio
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                <Link
                  to="/"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-900 hover:text-gray-600"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/"
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-500">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-500">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-gray-500">
                <Mail size={24} />
              </a>
            </div>
            <div className="mt-4 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;