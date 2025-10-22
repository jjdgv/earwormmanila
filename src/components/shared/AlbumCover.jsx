import React, { useState, useEffect } from 'react'

const AlbumCover = ({ artist, album, className = "" }) => {
  const [coverUrl, setCoverUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const fetchAlbumCover = async () => {
      if (!artist || !album) {
        setIsLoading(false)
        return
      }

      setIsLoading(true)
      setHasError(false)

      try {
        const cleanArtist = artist.replace(/[^\w\s]/g, '').trim()
        const cleanAlbum = album.replace(/[^\w\s]/g, '').trim()
        
        const searchStrategies = [
          `${cleanArtist} ${cleanAlbum}`,
          `${cleanArtist}`,
          `${cleanAlbum}`,
          `${cleanArtist} ${cleanAlbum.split(' ')[0]}`
        ]
        
        let bestResult = null
        
        for (const searchTerm of searchStrategies) {
          const formattedTerm = searchTerm.replace(/\s+/g, '+')
          const response = await fetch(
            `https://itunes.apple.com/search?term=${formattedTerm}&entity=album&limit=10`
          )
          
          if (!response.ok) continue
          
          const data = await response.json()
          
          if (data.results && data.results.length > 0) {
            const bestMatch = data.results.find(result => {
              const resultArtist = result.artistName?.toLowerCase() || ''
              const resultAlbum = result.collectionName?.toLowerCase() || ''
              const searchArtist = cleanArtist.toLowerCase()
              const searchAlbum = cleanAlbum.toLowerCase()
              
              return (
                resultArtist.includes(searchArtist) || 
                searchArtist.includes(resultArtist) ||
                resultAlbum.includes(searchAlbum) || 
                searchAlbum.includes(resultAlbum) ||
                searchArtist.split(' ').some(word => resultArtist.includes(word)) ||
                searchAlbum.split(' ').some(word => resultAlbum.includes(word))
              )
            })
            
            if (bestMatch && bestMatch.artworkUrl100) {
              bestResult = bestMatch
              break
            }
          }
        }
        
        if (bestResult) {
          const highResUrl = bestResult.artworkUrl100.replace('100x100bb', '600x600bb')
          setCoverUrl(highResUrl)
        } else {
          setHasError(true)
        }
      } catch (error) {
        console.error('Error fetching album cover:', error)
        setHasError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchAlbumCover()
  }, [artist, album])

  if (isLoading) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gray-200 animate-pulse ${className}`}>
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  if (hasError || !coverUrl) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gray-100 border-2 border-gray-300 ${className}`}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center p-4">
            <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">No Cover</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={`relative overflow-hidden rounded-lg group ${className}`}>
      <img
        src={coverUrl}
        alt={`${album} by ${artist}`}
        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
    </div>
  )
}

export default AlbumCover
