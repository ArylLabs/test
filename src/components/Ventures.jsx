import React from 'react'
import { motion } from 'framer-motion'
import { Sprout, Zap, Brain, Heart, GraduationCap } from 'lucide-react'

const Ventures = () => {
  const ventures = [
    {
      icon: Sprout,
      name: 'Chenay MultiFarm',
      focus: 'Agriculture & Food Innovation',
      tagline: 'Farming for the Future.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      emoji: '🌾'
    },
    {
      icon: Zap,
      name: 'Buhum Energy',
      focus: 'Renewable Energy',
      tagline: 'Powering a Sustainable World.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-yellow-50',
      emoji: '⚡'
    },
    {
      icon: Brain,
      name: 'Mulug AI / AiDigi Store',
      focus: 'Technology & Digital Solutions',
      tagline: 'Intelligence for a Better Tomorrow.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      emoji: '💻'
    },
    {
      icon: Heart,
      name: 'Chenay Foundation',
      focus: 'Philanthropy & Sustainability',
      tagline: 'For Every Life on Earth.',
      color: 'from-pink-500 to-red-600',
      bgColor: 'bg-pink-50',
      emoji: '💚'
    },
    {
      icon: GraduationCap,
      name: 'CareersTools',
      focus: 'Career & Education Technology',
      tagline: 'Accelerating Career Excellence with AI.',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50',
      emoji: '🎓'
    }
  ]

  return (
    <section id="ventures" className="py-24 bg-gradient-to-br from-soft-beige to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-earth-green">Ventures</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-earth-green to-ocean-blue mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a diverse ecosystem of purpose-driven businesses across multiple sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {ventures.map((venture, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${venture.bgColor} rounded-3xl p-8 sm:p-10 hover:shadow-2xl transition-all duration-300 cursor-pointer`}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${venture.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <venture.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">{venture.name}</h3>
                    <span className="text-2xl">{venture.emoji}</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {venture.focus}
                  </p>
                </div>
              </div>
              
              <div className={`bg-gradient-to-r ${venture.color} text-transparent bg-clip-text`}>
                <p className="text-xl font-bold italic">
                  "{venture.tagline}"
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-gray-700 font-semibold hover:text-earth-green transition-colors flex items-center space-x-2 group"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-earth-green to-ocean-blue p-12 rounded-3xl text-white">
            <h3 className="text-3xl font-bold mb-4">Building the Future, Together</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Each venture is designed to create lasting impact while staying true to our core values of sustainability, innovation, and compassion.
            </p>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-white text-earth-green rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Partner With Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Ventures
