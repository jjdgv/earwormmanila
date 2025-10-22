import React, { useState, useEffect } from 'react'
import AlbumCover from '../shared/AlbumCover'
import { featuredAlbums } from '../../data/albums'

const AlbumCoverTest = () => {
  const [testResults, setTestResults] = useState([])
  const [isTesting, setIsTesting] = useState(false)

  const testAlbumCovers = async () => {
    setIsTesting(true)
    const results = []

    for (const album of featuredAlbums.slice(0, 10)) { // Test first 10 albums
      try {
        const cleanArtist = album.artist.replace(/[^\w\s]/g, '').trim()
        const cleanAlbum = album.album.replace(/[^\w\s]/g, '').trim()
        const searchTerm = `${cleanArtist} ${cleanAlbum}`.replace(/\s+/g, '+')
        
        const response = await fetch(
          `https://itunes.apple.com/search?term=${searchTerm}&entity=album&limit=1`
        )
        
        const data = await response.json()
        const hasCover = data.results && data.results.length > 0 && data.results[0].artworkUrl100
        
        results.push({
          ...album,
          hasCover,
          status: hasCover ? '✅ Found' : '❌ Not Found'
        })
      } catch (error) {
        results.push({
          ...album,
          hasCover: false,
          status: '❌ Error'
        })
      }
    }

    setTestResults(results)
    setIsTesting(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-center text-gray-900 uppercase tracking-wide mb-8">
        Album Cover Test Results
      </h2>
      
      <div className="text-center mb-8">
        <button
          onClick={testAlbumCovers}
          disabled={isTesting}
          className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium uppercase tracking-wide hover:bg-black transition-colors duration-200 disabled:opacity-50"
        >
          {isTesting ? 'Testing...' : 'Test Album Covers'}
        </button>
      </div>

      {testResults.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {testResults.map((result) => (
            <div key={result.id} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-900 uppercase tracking-wide">
                  {result.album}
                </h3>
                <span className={`text-sm font-medium ${
                  result.hasCover ? 'text-green-600' : 'text-red-600'
                }`}>
                  {result.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 uppercase tracking-wide mb-2">
                {result.artist}
              </p>
              <p className="text-sm font-semibold text-gray-900">
                {result.price}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredAlbums.slice(0, 8).map((album) => (
          <div key={album.id} className="text-center">
            <AlbumCover 
              artist={album.artist} 
              album={album.album} 
              className="h-32 w-32 mx-auto mb-2"
            />
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              {album.artist}
            </p>
            <p className="text-xs text-gray-500">
              {album.album}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlbumCoverTest
