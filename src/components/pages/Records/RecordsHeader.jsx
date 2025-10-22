import React from 'react'
import Filter from '../../shared/Filter'

const RecordsHeader = ({ onFilterChange }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 uppercase tracking-wide">latest drops</h1>
      </div>
      <Filter onFilterChange={onFilterChange} />
    </div>
  )
}

export default RecordsHeader
