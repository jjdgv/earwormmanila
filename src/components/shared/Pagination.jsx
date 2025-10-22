import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 transform hover:scale-105 ${
            page === currentPage
              ? 'bg-white text-gray-900 shadow-lg font-bold'
              : 'text-gray-200 hover:text-white hover:bg-gray-700 hover:shadow-md'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

export default Pagination
