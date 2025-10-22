import React from 'react'
import CustomOrderForm from './CustomOrderForm'
import Footer from '../../sections/Footer'
import collectionBg from '../../../assets/collectionbar.png'

const CustomOrderPage = () => {
  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Background Section */}
      <section
        className="relative flex-1 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${collectionBg})` }}
      >
        <div className="absolute inset-0 bg-black/60 -z-10"></div>

        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white">
                customize your order
              </h1>
              <p className="text-gray-200 text-lg mt-3 uppercase tracking-wide">
                Let us know what you're looking for — we'll make it happen.
              </p>
            </div>

            <CustomOrderForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CustomOrderPage
