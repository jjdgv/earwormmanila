import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../shared/Button'
import heroBackground from '../../assets/Section 1.png'
import heroImage from '../../assets/Section 1_small_img.png'

const Hero = () => (
  <section
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${heroBackground})` }}
  >
    <div className="absolute inset-0 bg-black/40"></div>

    <div className="relative container mx-auto grid md:grid-cols-2 gap-12 items-center py-16 sm:py-20 px-6 text-white">
      <div className="space-y-6 order-2 md:order-1">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
          earworm manila.
        </h1>
        <p className="text-xl italic text-gray-100">"where music is lived."</p>
        <p className="text-gray-100 leading-relaxed max-w-lg">
          Earworm Manila is your go-to dealer for vinyl records, CDs, and cassette tapes.
          Browse our growing collection or place an order to curate the music you truly want.
          From timeless classics to rare finds, we help bring your favorite sounds straight to your turntable.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/records">
            <Button aria-label="Shop now">Shop Now</Button>
          </Link>
          <Link to="/custom-orders">
            <Button variant="secondary" aria-label="Custom orders">custom orders</Button>
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE SMALL IMAGE */}
      <div className="order-1 md:order-2">
        <img
          src={heroImage}
          alt="Turntable product preview"
          className="rounded-xl w-full h-80 md:h-96 object-cover shadow-2xl border border-white/20"
        />
      </div>
    </div>
  </section>
)

export default Hero
