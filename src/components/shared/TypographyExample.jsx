import React from 'react'

const TypographyExample = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8">
      {/* Typography Examples */}
      <section className="space-y-6">
        <h1>Earworm Manila Typography System</h1>
        <p className="text-gray-600">
          This demonstrates our clean, modern typography system using Montserrat for headings 
          and Inter for body text, creating a cohesive music-themed brand identity.
        </p>
      </section>

      <section className="space-y-4">
        <h2>Heading Hierarchy</h2>
        <div className="space-y-3">
          <h1>H1: Main Page Title (Montserrat Bold, 48px)</h1>
          <h2>H2: Section Headings (Montserrat Bold, 36px)</h2>
          <h3>H3: Subsection Headings (Montserrat Semibold, 30px)</h3>
          <h4>H4: Component Titles (Montserrat Semibold, 24px)</h4>
          <h5>H5: Card Headings (Montserrat Medium, 20px)</h5>
          <h6>H6: Small Headings (Montserrat Medium, 18px)</h6>
        </div>
      </section>

      <section className="space-y-4">
        <h2>Body Text Examples</h2>
        <div className="space-y-3">
          <p>
            This is regular body text using Inter font. It's designed for optimal readability 
            with proper line height and letter spacing. Perfect for descriptions, paragraphs, 
            and general content throughout the Earworm Manila website.
          </p>
          <p className="text-gray-600">
            This is secondary body text with reduced opacity for supporting information, 
            captions, and less prominent content.
          </p>
          <small>
            This is small text for captions, footnotes, and additional details using Inter font.
          </small>
        </div>
      </section>

      <section className="space-y-4">
        <h2>UI Elements</h2>
        <div className="space-y-3">
          <nav className="flex space-x-6">
            <a href="#" className="font-heading font-medium hover:text-gray-600">records</a>
            <a href="#" className="font-heading font-medium hover:text-gray-600">custom orders</a>
            <a href="#" className="font-heading font-medium hover:text-gray-600">about</a>
          </nav>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-heading font-medium">
            Shop Now
          </button>
          <label className="block font-body font-medium">Email Address</label>
          <input 
            type="email" 
            className="border border-gray-300 rounded px-3 py-2 font-body"
            placeholder="Enter your email"
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2>Music-Themed Content</h2>
        <div className="bg-black text-white p-6 rounded-lg">
          <h3 className="text-white mb-3">Featured Album</h3>
          <h4 className="text-white mb-2">NEVERMIND</h4>
          <p className="text-gray-300">
            Experience the raw energy of Nirvana's groundbreaking album that defined a generation. 
            This vinyl pressing captures every nuance of the original recording.
          </p>
          <small className="text-gray-400">PHP 800 • Limited Edition</small>
        </div>
      </section>
    </div>
  )
}

export default TypographyExample
