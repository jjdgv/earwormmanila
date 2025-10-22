import React from 'react'

const AlbumCard = ({ title, artist, price, img, alt }) => (
  <article className="bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-300 overflow-hidden transition-all duration-300 transform hover:scale-105 group">
    <div className="overflow-hidden">
      {typeof img === 'string' ? (
        <img src={img} alt={alt} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
      ) : (
        <div className="h-48">
          {img}
        </div>
      )}
    </div>
    <div className="p-4">
      <h5 className="font-bold text-lg leading-tight text-gray-900 group-hover:text-black transition-colors duration-200 uppercase tracking-wide">{title}</h5>
      <p className="text-sm text-gray-700 mt-1 group-hover:text-gray-600 transition-colors duration-200 uppercase tracking-wide">{artist}</p>
      <p className="text-sm font-semibold text-gray-900 mt-2 group-hover:text-black transition-colors duration-200">{price}</p>
    </div>
  </article>
)

export default AlbumCard