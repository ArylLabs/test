import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Youtube } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@mulug.in',
      link: 'mailto:info@mulug.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Coming Soon',
      link: '#'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#'
    }
  ]

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', link: '#', color: 'hover:text-blue-600' },
    { icon: Instagram, name: 'Instagram', link: '#', color: 'hover:text-pink-600' },
    { icon: Youtube, name: 'YouTube', link: '#', color: 'hover:text-red-600' }
  ]

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Get in <span className="text-earth-green">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-earth-green to-ocean-blue mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-earth-green to-green-600 rounded-3xl p-8 sm:p-10 text-white h-full">
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-green-100 mb-8 text-lg">
                Reach out to us and let's build something amazing together.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 hover:bg-white/10 p-4 rounded-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{info.title}</div>
                      <div className="text-green-100">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                      aria-label={social.name}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-earth-green focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-earth-green focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-earth-green focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-earth-green focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-earth-green to-green-600 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-soft-beige to-green-50 rounded-3xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Make an Impact?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our journey to build a sustainable and compassionate future for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#ventures"
              className="inline-block px-8 py-4 bg-earth-green text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Explore Our Ventures
            </a>
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-white text-earth-green border-2 border-earth-green rounded-full font-semibold hover:bg-earth-green hover:text-white transition-all"
            >
              Learn Our Story
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
