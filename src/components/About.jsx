import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Leaf } from 'lucide-react'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-earth-green">MULUG</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-earth-green to-ocean-blue mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mulug Enterprises Pvt Ltd is a purpose-driven Indian company focused on building sustainable,
              tech-enabled, and human-centered ventures.
            </p>
          </motion.div>

          {/* Story */}
          <motion.div variants={itemVariants} className="mb-16 bg-soft-beige p-8 sm:p-12 rounded-3xl">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-earth-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Heart className="text-earth-green" size={24} />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Founded by <span className="font-semibold text-earth-green">Siddhu Boro</span>, Mulug is guided by the values of
                  compassion, innovation, and sustainability — aiming to empower lives and protect our planet.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The name <span className="font-semibold text-earth-green">Mulug</span> means <span className="italic font-semibold">World</span> in
                  the Bodo language — a reflection of our vision to serve every being on this Earth through ethical business and meaningful innovation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-earth-green to-green-600 p-8 sm:p-10 rounded-3xl text-white"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold">Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To build ventures that balance innovation, compassion, and sustainability —
                empowering communities, advancing technology, and nurturing the planet.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-ocean-blue to-blue-600 p-8 sm:p-10 rounded-3xl text-white"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To create a global ecosystem of businesses that serve humanity and Earth together —
                where growth and goodness coexist. 🌍
              </p>
            </motion.div>
          </div>

          {/* What We Do */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-soft-beige to-green-50 p-8 sm:p-12 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What We Do</h3>
            <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
              Mulug is more than a company — it's a mission-driven enterprise creating positive change through business.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🌾', title: 'Agri & Food', desc: 'Sustainable farming and rural empowerment' },
                { icon: '⚡', title: 'Clean Energy', desc: 'Green and renewable projects' },
                { icon: '💻', title: 'Digital Innovation', desc: 'AI, commerce, and education tech' },
                { icon: '💚', title: 'Social Impact', desc: 'Environment and community initiatives' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
