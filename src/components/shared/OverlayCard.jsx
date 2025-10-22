import React from 'react'
import { Link } from 'react-router-dom'

const OverlayCard = ({ title, description, img, alt }) => (
  <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group transform hover:scale-105">
    <img src={img} alt={alt} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" aria-hidden="true"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <h4 className="text-white text-2xl font-bold mb-2 group-hover:text-gray-50 transition-colors duration-300 uppercase tracking-wide">{title}</h4>
      <p className="text-gray-100 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors duration-300">{description}</p>
      <Link to="/records" className="text-white text-sm font-semibold hover:underline hover:text-gray-100 transition-colors duration-200 inline-flex items-center gap-1 uppercase tracking-wide">
        explore <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
    </div>
  </div>
)

export default OverlayCard
