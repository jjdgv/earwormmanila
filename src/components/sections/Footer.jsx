import React from 'react'

const Footer = () => (
  <footer className="bg-black text-white">
    <div className="container-px mx-auto py-12 space-y-8">
      <div className="text-center space-y-4">
        <h4 className="text-2xl font-bold text-white uppercase tracking-wide">earworm manila.</h4>
        <p className="text-gray-200 italic">"where music is lived."</p>
        <div className="flex items-center justify-center gap-6" aria-label="social links">
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium uppercase tracking-wide">Instagram</a>
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium uppercase tracking-wide">Facebook</a>
          <a href="#" aria-label="X" className="text-white hover:text-gray-200 transition-colors duration-200 font-medium uppercase tracking-wide">X</a>
        </div>
        <p className="text-gray-300 text-sm">© Copyright Earworm Manila 2025 - All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
