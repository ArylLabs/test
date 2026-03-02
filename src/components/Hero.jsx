import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Heart, Sprout, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-soft-beige via-white to-green-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-earth-green/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-ocean-blue/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-earth-green/10 px-6 py-2 rounded-full mb-8"
          >
            <Globe className="text-earth-green" size={20} />
            <span className="text-earth-green font-semibold">Mulug means World in Bodo</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Building for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-green to-ocean-blue">Earth</span>.
            <br />
            Rooted in <span className="text-transparent bg-clip-text bg-gradient-to-r from-earth-green to-ocean-blue">Purpose</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            From Earth to Innovation — For Every Life on Earth.
            <br />
            <span className="text-lg">A purpose-driven enterprise creating sustainable, tech-enabled ventures.</span>
          </motion.p>

          {/* Icon Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-gray-700">
              <Sprout className="text-earth-green" size={24} />
              <span className="font-medium">Sustainable</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Heart className="text-red-500" size={24} />
              <span className="font-medium">Human-Centered</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Globe className="text-ocean-blue" size={24} />
              <span className="font-medium">Global Impact</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-earth-green to-green-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              Explore Our Vision
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#ventures"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-earth-green border-2 border-earth-green rounded-full font-semibold hover:bg-earth-green hover:text-white transition-all duration-300"
            >
              Discover Our Ventures
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-earth-green rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-earth-green rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
