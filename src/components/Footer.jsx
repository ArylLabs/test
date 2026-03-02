import React from 'react'
import { Heart, Globe, Linkedin, Instagram, Youtube, Mail } from 'lucide-react'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Ventures', href: '#ventures' },
      { name: 'Founder', href: '#founder' },
      { name: 'Contact', href: '#contact' }
    ],
    ventures: [
      { name: 'Chenay MultiFarm', href: '#ventures' },
      { name: 'Buhum Energy', href: '#ventures' },
      { name: 'Mulug AI', href: '#ventures' },
      { name: 'CareersTools', href: '#ventures' },
      { name: 'Chenay Foundation', href: '#ventures' }
    ],
    resources: [
      { name: 'Sustainability', href: '#sustainability' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Privacy Policy', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Linkedin, name: 'LinkedIn', link: '#' },
    { icon: Instagram, name: 'Instagram', link: '#' },
    { icon: Youtube, name: 'YouTube', link: '#' },
    { icon: Mail, name: 'Email', link: 'mailto:info@mulug.in' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Logo size={64} color="white" />
              <div>
                <div className="text-2xl font-bold tracking-wide">MULUG</div>
                <div className="text-xs text-gray-400">Enterprises Pvt Ltd</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building for the Earth. Rooted in Purpose. A mission-driven enterprise creating sustainable, 
              tech-enabled ventures for humanity and Earth.
            </p>
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Globe size={16} />
              <span className="text-sm">Mulug means "World" in Bodo</span>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 bg-gray-800 hover:bg-earth-green rounded-full flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-earth-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ventures Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Ventures</h3>
            <ul className="space-y-3">
              {footerLinks.ventures.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-earth-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-earth-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Mulug Enterprises Pvt Ltd. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>for a better world</span>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-xs">
              A GTC Initiative | Building ventures that serve humanity and protect our planet
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 bg-gradient-to-r from-earth-green via-ocean-blue to-earth-green" />
    </footer>
  )
}

export default Footer
