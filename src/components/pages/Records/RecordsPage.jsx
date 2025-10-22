import React, { useState, useEffect, useMemo } from 'react'
import RecordsHeader from './RecordsHeader'
import AlbumGrid from './AlbumGrid'
import Pagination from '../../shared/Pagination'
import Footer from '../../sections/Footer'
import { getAllAlbums } from '../../../data/albums'

const RecordsPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('all')
  const itemsPerPage = 12

  const allAlbums = useMemo(() => getAllAlbums(), [])
  
  const filteredAlbums = useMemo(() => {
    let filtered = [...allAlbums]

    if (filter === 'price-low') {
      filtered.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')))
    } else if (filter === 'price-high') {
      filtered.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')))
    }

    return filtered
  }, [allAlbums, filter])

  const paginatedAlbums = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredAlbums.slice(startIndex, endIndex)
  }, [filteredAlbums, currentPage, itemsPerPage])

  const totalPages = Math.ceil(filteredAlbums.length / itemsPerPage)

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="container-px mx-auto py-8">
        <RecordsHeader onFilterChange={handleFilterChange} />
        <AlbumGrid albums={paginatedAlbums} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  )
}

export default RecordsPage
