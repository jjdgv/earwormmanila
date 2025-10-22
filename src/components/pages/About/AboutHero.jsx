import React from 'react'
import aboutSec1Bg from '../../../assets/AboutSec1.png'
import sec1Img from '../../../assets/Sec1Img.png'

const AboutHero = () => (
  <section 
    className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20"

  >
    <div className="absolute inset-0 bg-black/60 -z-10"></div>
    
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">our story</h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Born out of a love for music and cataloging, Earworm Manila
            started with one spinning vinyl at home. From humble beginnings,
            we grew into a community-driven space that celebrates physical
            formats — vinyl records, cassette tapes, and CDs. We connect
            collectors with the music they love and keep the analog spirit
            alive.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src={sec1Img}
            alt="Record store interior"
            className="w-full h-72 object-cover"
          />
        </div>
      </div>
    </div>
  </section>
)

export default AboutHero
