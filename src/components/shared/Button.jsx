import React from 'react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const styles =
    variant === 'primary'
      ? 'bg-gray-900 text-white hover:bg-black shadow-lg hover:shadow-xl hover:shadow-gray-900/30 focus:ring-gray-900'
      : 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-50 hover:border-gray-700 shadow-md hover:shadow-lg hover:shadow-gray-900/20 focus:ring-gray-900'
  return (
    <button
      className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium uppercase tracking-wide ${styles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
