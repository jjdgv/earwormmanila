import React from 'react'
import AboutHero from './AboutHero'
import Mission from './Mission'
import Footer from '../../sections/Footer'

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <AboutHero />
      <Mission />
      <Footer />
    </div>
  )
}

export default AboutPage
