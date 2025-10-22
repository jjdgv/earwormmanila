import React from 'react'
import AlbumCard from '../shared/AlbumCard'
import AlbumCover from '../shared/AlbumCover'
import { getRandomAlbums } from '../../data/albums'
import section3Bg from '../../assets/Section3.png'

const Featured = () => {
  const randomAlbums = getRandomAlbums(4)

  return (
    <section
      id="featured"
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20"
      style={{ backgroundImage: `url(${section3Bg})` }}
    >
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <div className="relative container mx-auto space-y-12 px-6 z-10">
        <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-center text-white">
          featured.
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {randomAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.album}
              artist={album.artist}
              price={album.price}
              img={<AlbumCover artist={album.artist} album={album.album} className="h-48" />}
              alt={`${album.album} by ${album.artist}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured
