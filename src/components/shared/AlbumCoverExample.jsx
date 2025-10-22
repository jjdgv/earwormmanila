import React from 'react'
import AlbumCover from '../shared/AlbumCover'

const AlbumCoverExample = () => {
  return (
    <div className="max-w-md mx-auto p-8 space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-900 uppercase tracking-wide">
        Album Cover Examples
      </h2>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center">
          <AlbumCover 
            artist="Frank Ocean" 
            album="Blonde" 
            className="h-32 w-32 mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">Frank Ocean - Blonde</p>
        </div>
        
        <div className="text-center">
          <AlbumCover 
            artist="Tyler, The Creator" 
            album="IGOR" 
            className="h-32 w-32 mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">Tyler, The Creator - IGOR</p>
        </div>
        
        <div className="text-center">
          <AlbumCover 
            artist="Cigarettes After Sex" 
            album="Cry" 
            className="h-32 w-32 mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">Cigarettes After Sex - Cry</p>
        </div>
        
        <div className="text-center">
          <AlbumCover 
            artist="Daniel Caesar" 
            album="Freudian" 
            className="h-32 w-32 mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600 uppercase tracking-wide">Daniel Caesar - Freudian</p>
        </div>
      </div>
      
      <div className="text-center text-sm text-gray-500">
        <p>Album covers are fetched dynamically from the iTunes Search API</p>
        <p>Loading shimmer and error states are handled automatically</p>
      </div>
    </div>
  )
}

export default AlbumCoverExample
