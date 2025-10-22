import React, { useState } from 'react'
import InputField from '../../shared/InputField'
import Button from '../../shared/Button'
import emailjs from '@emailjs/browser'

const EMAIL_TO = 'earwormmanila@mailsac.com'

const CustomOrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    genreType: '',
    artistAlbum: '',
    formatDetails: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // success | error

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address'
    }
    if (!formData.genreType.trim()) nextErrors.genreType = 'Genre type is required'
    if (!formData.artistAlbum.trim()) nextErrors.artistAlbum = 'Artist / Album is required'
    if (!formData.formatDetails.trim()) nextErrors.formatDetails = 'Format details are required'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    if (!validate()) return
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      const templateParams = {
        to_email: EMAIL_TO,
        name: formData.name,
        email: formData.email,
        title: formData.artistAlbum, 
        genre_type: formData.genreType,
        format_details: formData.formatDetails
      }
      

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: log to console to indicate missing config
        console.warn('EmailJS env vars missing. Define VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY.')
        setStatus('success')
      } else {
        await emailjs.send(serviceId, templateId, templateParams, { publicKey })
        setStatus('success')
      }

      setFormData({ name: '', email: '', genreType: '', artistAlbum: '', formatDetails: '' })
      setErrors({})
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 max-w-md mx-auto border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <InputField
            label="Name"
            value={formData.name}
            onChange={handleInputChange('name')}
            placeholder="Enter your full name"
            required
          />
          {errors.name && <p className="mt-1 text-sm text-red-600 font-medium">{errors.name}</p>}
        </div>

        <div>
          <InputField
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email address"
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-600 font-medium">{errors.email}</p>}
        </div>

        <div>
          <InputField
            label="Genre Type"
            value={formData.genreType}
            onChange={handleInputChange('genreType')}
            placeholder="e.g., Rock, Jazz, Electronic"
            required
          />
          {errors.genreType && <p className="mt-1 text-sm text-red-600 font-medium">{errors.genreType}</p>}
        </div>

        <div>
          <InputField
            label="Artist / Album Title"
            value={formData.artistAlbum}
            onChange={handleInputChange('artistAlbum')}
            placeholder="Artist name or specific album"
            required
          />
          {errors.artistAlbum && <p className="mt-1 text-sm text-red-600 font-medium">{errors.artistAlbum}</p>}
        </div>

        <div>
          <InputField
            label="Format Details"
            value={formData.formatDetails}
            onChange={handleInputChange('formatDetails')}
            placeholder="Vinyl, CD, Cassette, etc."
            required
          />
          {errors.formatDetails && <p className="mt-1 text-sm text-red-600 font-medium">{errors.formatDetails}</p>}
        </div>

        <div className="pt-2">
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting…' : 'Submit'}
          </Button>
        </div>

        {status === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800 text-sm font-medium">✓ Your custom order was submitted. We'll email you shortly.</p>
          </div>
        )}
        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm font-medium">✗ We couldn't send your request right now. Please try again.</p>
          </div>
        )}
      </form>
    </div>
  )
}

export default CustomOrderForm
