import React from 'react'
import aboutSec2Bg from '../../../assets/AboutSec2.png'
import sec2Img1 from '../../../assets/Sec2Img1.png'
import sec2Img2 from '../../../assets/Sec2Img2.png'
import sec2Img3 from '../../../assets/Sec2Img3.png'

const Feature = ({ title, description, img, alt }) => (
  <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
    <img src={img} alt={alt} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors duration-300" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
      <h3 className="text-white text-xl font-bold mb-2 group-hover:text-gray-50 transition-colors duration-300 uppercase tracking-wide">{title}</h3>
      <p className="text-gray-100 text-sm max-w-xs group-hover:text-white transition-colors duration-300">{description}</p>
    </div>
  </div>
)

const Mission = () => (
  <section 
    className="relative bg-white text-black py-16 sm:py-20"
  >
    <div className="container mx-auto px-6 space-y-8">
      <h2 className="text-center text-2xl font-semibold uppercase text-gray-900 tracking-wide">our mission</h2>
      <p className="text-center text-gray-600 uppercase tracking-wide">preserving records, the analog way</p>
      <div className="grid md:grid-cols-3 gap-6">
        <Feature
          title="quality collection"
          description="Curated selection of records, tapes, and CDs that meet our standards for condition and sound."
          img={sec2Img1}
          alt="Vinyl close-up"
        />
        <Feature
          title="fast on delivery"
          description="Reliable fulfillment and careful packaging so your music arrives safely and quickly."
          img={sec2Img2}
          alt="Spinning vinyl"
        />
        <Feature
          title="community focused"
          description="We support local scenes, collectors, and artists. Join our growing community of enthusiasts."
          img={sec2Img3}
          alt="Record digging"
        />
      </div>
    </div>
  </section>
)

export default Mission
