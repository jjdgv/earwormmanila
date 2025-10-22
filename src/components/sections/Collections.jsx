import React from 'react'
import OverlayCard from '../shared/OverlayCard'
import vinylsImage from '../../assets/Section2_Vinyls.png'
import tapesImage from '../../assets/Section2_Tapes.png'
import discsImage from '../../assets/Section2_Discs.png'
import section2Bg from '../../assets/Section2.png'

const Collections = () => (
  <section id="collections" className="relative bg-black text-white py-16 sm:py-20">
    <div className="absolute inset-0 -z-10">
      <img
        src={section2Bg}
        alt="Vinyl texture background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container-px mx-auto space-y-12 relative z-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">our collections.</h2>
        <p className="text-gray-200 text-lg">Explore our diverse collections of old and new rarities.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <OverlayCard 
          title="vinyls" 
          description="Spin the classics, rediscover hidden gems, and find the perfect for every audiophile's dream."
          alt="Vinyl records" 
          img={vinylsImage} 
        />
        <OverlayCard 
          title="cassette tapes" 
          description="Dive into the retro-world of analog with our collection of cassette tapes, bringing nostalgia and unique sound to your playlist."
          alt="Cassette tapes" 
          img={tapesImage} 
        />
        <OverlayCard 
          title="compact discs" 
          description="Experience crystal-clear audio with our wide selection of CDs, from chart-toppers to indie releases."
          alt="Compact discs" 
          img={discsImage} 
        />
      </div>
    </div>
  </section>
)

export default Collections
