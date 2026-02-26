import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, TreePine, Droplets, Sun, Wind, Recycle } from 'lucide-react'

const Sustainability = () => {
  const initiatives = [
    {
      icon: TreePine,
      title: 'Reforestation',
      description: 'Planting trees and restoring ecosystems',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Sustainable water management practices',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Sun,
      title: 'Clean Energy',
      description: 'Renewable energy solutions',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Wind,
      title: 'Carbon Neutral',
      description: 'Reducing our carbon footprint',
      color: 'from-sky-500 to-blue-600'
    },
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Zero waste initiatives',
      color: 'from-teal-500 to-green-600'
    },
    {
      icon: Leaf,
      title: 'Biodiversity',
      description: 'Protecting wildlife and habitats',
      color: 'from-lime-500 to-green-600'
    }
  ]

  return (
    <section id="sustainability" className="py-24 bg-gradient-to-br from-green-50 to-soft-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-earth-green/10 px-6 py-2 rounded-full mb-6">
            <Leaf className="text-earth-green" size={20} />
            <span className="text-earth-green font-semibold">Chenay Foundation</span>
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Commitment to <span className="text-earth-green">Sustainability</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-earth-green to-ocean-blue mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through the Chenay Foundation, we're dedicated to environmental conservation, 
            social impact, and creating a sustainable future for all life on Earth.
          </p>
        </motion.div>

        {/* Hero Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-gradient-to-r from-earth-green to-green-600 rounded-3xl p-8 sm:p-12 text-white text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">For Every Life on Earth 💚</h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our commitment extends beyond business — we're building a legacy of environmental 
            stewardship and community empowerment.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-green-100">Trees Planted</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="text-green-100">Communities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-green-100">Renewable Energy Goal</div>
            </div>
          </div>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${initiative.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <initiative.icon className="text-white" size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{initiative.title}</h4>
              <p className="text-gray-600">{initiative.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be part of the change. Together, we can create a sustainable future for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-earth-green to-green-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Involved
            </a>
            <a
              href="#ventures"
              className="inline-block px-8 py-4 bg-white text-earth-green border-2 border-earth-green rounded-full font-semibold hover:bg-earth-green hover:text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sustainability
