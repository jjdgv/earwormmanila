import React from 'react'

const InputField = ({ label, type = 'text', placeholder, value, onChange, required = false }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-900 uppercase tracking-wide">
        {label}
        {required && <span className="text-red-600 ml-1 font-bold">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-gray-900 focus:ring-2 focus:ring-gray-900/20 focus:outline-none bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
        />
      </div>
    </div>
  )
}

export default InputField
