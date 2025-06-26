import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { colors } from '@/config/colors';
import { fonts } from '@/config/fonts';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const Footer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const quickLinks = [
    { name: 'Our Heritage', href: '#about' },
    { name: 'Available Cats', href: '#cats' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'Visit Us', href: '#contact' }
  ];

  const catBreeds = [
    { name: 'Scottish Fold', href: '#cats' },
    { name: 'Scottish Straight', href: '#cats' },
    { name: 'British Shorthair', href: '#cats' },
    { name: 'All Cats', href: '#cats' }
  ];

  const services = [
    { name: 'Health Guarantee', icon: <Shield className="w-4 h-4" /> },
    { name: 'CFA Registered', icon: <Award className="w-4 h-4" /> },
    { name: 'Lifetime Support', icon: <Heart className="w-4 h-4" /> },
    { name: '24/7 Emergency Help', icon: <Clock className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#",
      color: "#1877F2"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram", 
      url: "#",
      color: "#E4405F"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      name: "Twitter",
      url: "#",
      color: "#1DA1F2"
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: colors.backgroundDark }}
    >
      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              
              {/* Company Info */}
              <motion.div variants={fadeInUp} className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <img 
                      src="/logo.png" 
                      alt="SnowBrisco Premium Cattery Logo"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 
                      className="text-xl font-bold text-white"
                      style={{ fontFamily: fonts.display }}
                    >
                      snowbrisco
                    </h3>
                    <p 
                      className="text-sm text-white/70"
                      style={{ fontFamily: fonts.sans }}
                    >
                      Premium Cattery
                    </p>
                  </div>
                </div>
                
                <p 
                  className="text-white/80 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: fonts.body }}
                >
                  Since 2021, SnowBrisco Premium Cattery has been dedicated to breeding exceptional 
                  Scottish Fold, Scottish Straight, and British Shorthair cats with outstanding 
                  temperaments and stunning appearances.
                </p>

                {/* Services Icons */}
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div style={{ color: colors.accent }}>
                        {service.icon}
                      </div>
                      <span 
                        className="text-xs text-white/70"
                        style={{ fontFamily: fonts.sans }}
                      >
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={fadeInUp}>
                <h4 
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: fonts.display }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Cat Breeds */}
              <motion.div variants={fadeInUp}>
                <h4 
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: fonts.display }}
                >
                  Our Breeds
                </h4>
                <ul className="space-y-3">
                  {catBreeds.map((breed, index) => (
                    <li key={index}>
                      <a 
                        href={breed.href}
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        {breed.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={fadeInUp}>
                <h4 
                  className="text-lg font-bold text-white mb-6"
                  style={{ fontFamily: fonts.display }}
                >
                  Contact Info
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-0.5" style={{ color: colors.accent }} />
                    <div>
                      <a 
                        href="tel:+15551234567"
                        className="text-white/80 hover:text-white transition-colors text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        +1 (555) 123-4567
                      </a>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Call or Text Welcome
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-0.5" style={{ color: colors.accent }} />
                    <div>
                      <a 
                        href="mailto:info@snowbrisco.com"
                        className="text-white/80 hover:text-white transition-colors text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        info@snowbrisco.com
                      </a>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Quick Response Guaranteed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5" style={{ color: colors.accent }} />
                    <div>
                      <p 
                        className="text-white/80 text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Ontario, Canada
                      </p>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Visits by Appointment
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-6">
                  <h5 
                    className="text-sm font-semibold text-white mb-3"
                    style={{ fontFamily: fonts.display }}
                  >
                    Follow Us
                  </h5>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                        style={{ backgroundColor: social.color }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
        className="border-t py-6"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: fonts.sans }}
                >
                  © {currentYear} SnowBrisco Premium Cattery. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 text-xs text-white/50">
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Privacy Policy
                  </a>
                  <span>•</span>
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Terms of Service
                  </a>
                  <span>•</span>
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Cat Care Guide
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: fonts.sans }}
                >
                  Made with
                </span>
                <Heart 
                  className="w-4 h-4 text-red-400 fill-current" 
                />
                <span 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: fonts.sans }}
                >
                  for cat lovers
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 