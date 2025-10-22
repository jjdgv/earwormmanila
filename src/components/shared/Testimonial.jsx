import React from 'react'

const Testimonial = ({ quote, author, role }) => (
  <figure className="bg-white rounded-lg p-6 shadow-md border border-gray-300">
    <div className="flex items-center mb-4">
      <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center mr-3">
        <span className="text-gray-800 font-bold text-sm uppercase">{author.charAt(0)}</span>
      </div>
      <div>
        <div className="font-bold text-gray-900 uppercase tracking-wide">{author}</div>
        <div className="text-sm text-gray-600 uppercase tracking-wide">{role}</div>
      </div>
    </div>
    <blockquote className="text-gray-800 text-sm leading-relaxed">"{quote}"</blockquote>
  </figure>
)

export default Testimonial
