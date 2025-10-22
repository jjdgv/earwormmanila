import React from 'react'
import AlbumCard from '../../shared/AlbumCard'
import AlbumCover from '../../shared/AlbumCover'

const AlbumGrid = ({ albums }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {albums.map((album, index) => (
        <AlbumCard
          key={album.id || index}
          title={album.album || album.title}
          artist={album.artist}
          price={album.price}
          img={<AlbumCover artist={album.artist} album={album.album || album.title} className="h-48" />}
          alt={`${album.album || album.title} by ${album.artist}`}
        />
      ))}
    </div>
  )
}

export default AlbumGrid
