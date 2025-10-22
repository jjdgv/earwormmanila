import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg shadow-black/5">
      <nav className="container-px mx-auto flex items-center justify-between h-16">
        <Link to="/" className="text-lg font-semibold tracking-tight text-gray-900 hover:text-black transition-colors duration-200 uppercase">earworm manila.</Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-900">
          <li>
            <Link 
              to="/records" 
              className={`hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 font-medium uppercase tracking-wide ${isActive('/records') ? 'underline bg-gray-50 text-gray-900' : 'text-gray-900'}`}
            >
              records
            </Link>
          </li>
          <li>
            <Link 
              to="/custom-orders" 
              className={`hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 font-medium uppercase tracking-wide ${isActive('/custom-orders') ? 'underline bg-gray-50 text-gray-900' : 'text-gray-900'}`}
            >
              custom orders
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`hover:text-gray-700 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-100 font-medium uppercase tracking-wide ${isActive('/about') ? 'underline bg-gray-50 text-gray-900' : 'text-gray-900'}`}
            >
              about
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-gray-900 hover:text-gray-700 focus:outline-none rounded-md hover:bg-gray-100 transition-colors duration-200"
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg shadow-black/5">
          <ul className="container-px py-4 space-y-4">
            <li>
              <Link
                to="/records"
                className={`block text-gray-900 hover:text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium uppercase tracking-wide ${isActive('/records') ? 'underline bg-gray-50' : ''}`}
                onClick={closeMenu}
              >
                records
              </Link>
            </li>
            <li>
              <Link
                to="/custom-orders"
                className={`block text-gray-900 hover:text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium uppercase tracking-wide ${isActive('/custom-orders') ? 'underline bg-gray-50' : ''}`}
                onClick={closeMenu}
              >
                custom orders
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block text-gray-900 hover:text-gray-700 py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium uppercase tracking-wide ${isActive('/about') ? 'underline bg-gray-50' : ''}`}
                onClick={closeMenu}
              >
                about
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar
