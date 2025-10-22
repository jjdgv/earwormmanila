import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import curateImage from '../../assets/Section4_Content.png'
import section4Bg from '../../assets/Section4.png'

const Curate = () => (
  <section id="curate" className="relative bg-black text-white py-16 sm:py-20">
    <div className="absolute inset-0 -z-10">
      <img
        src={section4Bg}
        alt="Vinyl texture background"
        className="w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
    <div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <div className="order-last lg:order-first">
        <img
          src={curateImage}
          alt="Stacked vinyl records"
          className="rounded-xl w-full h-80 object-cover shadow-lg"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">Curate Your Own Collection</h3>
        <p className="text-gray-200 leading-relaxed">
          Looking for a specific record, CD, or tape? Earworm Manila makes it easy to place custom orders for the albums you've always wanted. Whether it's a rare vinyl, a timeless classic, or a hidden gem, we'll help you find it and bring it to your collection.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center text-gray-200">
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-900 text-xs font-bold">✓</span>
            </span>
            Wide network of trusted suppliers
          </li>
          <li className="flex items-center text-gray-200">
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-900 text-xs font-bold">✓</span>
            </span>
            Fast and reliable delivery available
          </li>
          <li className="flex items-center text-gray-200">
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-gray-900 text-xs font-bold">✓</span>
            </span>
            Hassle-free online ordering
          </li>
        </ul>
        <Link to="/custom-orders">
          <Button aria-label="Custom order">custom order</Button>
        </Link>
      </div>
    </div>
  </section>
)

export default Curate
