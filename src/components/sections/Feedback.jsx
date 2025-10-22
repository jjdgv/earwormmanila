import React from 'react'
import Testimonial from '../shared/Testimonial'
import section5Bg from '../../assets/Section5.png'

const Feedback = () => (
  <section
    id="feedback"
    className="relative bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20"
    style={{ backgroundImage: `url(${section5Bg})` }}
  >
    <div className="absolute inset-0 bg-black/60 -z-10"></div>

    <div className="relative container mx-auto space-y-12 px-6 z-10">
      <div className="text-center space-y-4">
        <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
          feedback.
        </h3>
        <p className="text-gray-200 text-lg">
          From true collectors and enthusiasts.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <Testimonial
          quote="Found the vinyl I've been searching for — their selection is insane! Earworm Manila never disappoints!"
          author="Jonathan Davis"
          role="avid collector"
        />
        <Testimonial
          quote="I love the custom order service. It's so easy and they've found every obscure album I wanted."
          author="Tessa Name"
          role="music enthusiast"
        />
        <Testimonial
          quote="The best place to get rare finds. Their customer service is top-notch. Highly recommend!"
          author="Kurt Cobain"
          role="indie music lover"
        />
      </div>
    </div>
  </section>
)

export default Feedback
