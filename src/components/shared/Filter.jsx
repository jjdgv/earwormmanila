import React from 'react'

const Filter = ({ onFilterChange }) => {
  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'vinyl', label: 'Vinyl' },
    { value: 'cd', label: 'CD' },
    { value: 'cassette', label: 'Cassette' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' }
  ]

  return (
    <div className="flex items-center space-x-2">
      <span className="text-white text-sm font-medium uppercase tracking-wide">Filter:</span>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="bg-gray-900 text-white text-sm rounded-lg px-4 py-2 border-2 border-gray-700 focus:outline-none focus:border-white focus:ring-2 focus:ring-white/20 transition-all duration-200 font-medium uppercase tracking-wide"
      >
        {filterOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Filter
