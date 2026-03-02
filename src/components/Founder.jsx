import React from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const Founder = () => {
  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Founder's <span className="text-earth-green">Message</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-earth-green to-ocean-blue mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-soft-beige to-green-50 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <div className="absolute top-8 left-8 opacity-10">
              <Quote size={120} className="text-earth-green" />
            </div>

            <div className="relative z-10">
              {/* Founder Info */}
              <div className="flex flex-col items-center mb-12">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-earth-green to-ocean-blue flex items-center justify-center mb-6 shadow-2xl">
                  <span className="text-white text-5xl font-bold">RS</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Radhe Shyam</h3>
                <p className="text-lg text-gray-600 font-medium">Founder & Visionary</p>
                <p className="text-sm text-gray-500 mt-1">Mulug Enterprises Pvt Ltd</p>
              </div>

              {/* Quote */}
              <div className="space-y-6 text-center">
                <p className="text-2xl sm:text-3xl font-medium text-gray-800 leading-relaxed italic">
                  "Mulug is not just a business — it's a purpose."
                </p>

                <div className="w-16 h-1 bg-earth-green mx-auto" />

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  Born from the vision of serving the world, Mulug blends innovation with compassion,
                  and progress with purpose.
                </p>

                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                  My dream is to help every being — human, animal, or part of nature — live a better
                  life through meaningful creation.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-12 text-center">
                <div className="inline-block">
                  <p className="text-2xl font-bold text-earth-green mb-1" style={{ fontFamily: 'cursive' }}>
                    Radhe Shyam
                  </p>
                  <div className="h-0.5 bg-gradient-to-r from-earth-green to-ocean-blue" />
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid sm:grid-cols-3 gap-6"
          >
            {[
              { title: 'Compassion', desc: 'Caring for every being on Earth', emoji: '💚' },
              { title: 'Innovation', desc: 'Pioneering solutions for tomorrow', emoji: '💡' },
              { title: 'Sustainability', desc: 'Protecting our planet for future generations', emoji: '🌱' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-3">{value.emoji}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Founder
