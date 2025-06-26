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
    { name: 'Our Story', href: '#about' },
    { name: 'Meet Our Babies', href: '#cats' },
    { name: 'Chat With Us', href: '#contact' },
    { name: 'Come Visit!', href: '#contact' }
  ];

  const catBreeds = [
    { name: 'Scottish Fold Cuties', href: '#cats' },
    { name: 'Scottish Straight Sweeties', href: '#cats' },
    { name: 'British Shorthair Beauties', href: '#cats' },
    { name: 'All Our Babies', href: '#cats' }
  ];

  const services = [
    { name: 'Health Promise', icon: <Shield className="w-4 h-4" /> },
    { name: 'Champion Parents', icon: <Award className="w-4 h-4" /> },
    { name: 'Forever Friends', icon: <Heart className="w-4 h-4" /> },
    { name: 'Always Here for You', icon: <Clock className="w-4 h-4" /> }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      name: "Facebook",
      url: "#",
      color: "#1877F2"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      name: "Instagram",
      url: "https://www.instagram.com/snowbrisco/",
      color: "#E4405F"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      name: "TikTok",
      url: "https://www.tiktok.com/@snowbrisco",
      color: "#000000"
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
      <div className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Company Info */}
              <motion.div variants={fadeInUp} className="sm:col-span-2 lg:col-span-1">
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
                      Where Love Begins 💕
                    </p>
                  </div>
                </div>
                
                <p 
                  className="text-white/80 text-sm leading-relaxed mb-6"
                  style={{ fontFamily: fonts.body }}
                >
                  Since 2021, we've been the proud cat parents behind SnowBrisco, where every kitty is raised with endless cuddles and love! 🐱 Our Scottish Fold, Scottish Straight, and British Shorthair babies can't wait to meet their forever families and bring joy to your world!
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
                  Let's Connect!
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
                  Our Adorable Breeds
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
                  Let's Chat! 💬
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                    <div>
                      <a 
                        href="tel:+14383424290"
                        className="text-white/80 hover:text-white transition-colors text-sm block"
                        style={{ fontFamily: fonts.sans }}
                      >
                        (438) 342-4290
                      </a>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Call or text us anytime! 📱
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                    <div>
                      <a 
                        href="mailto:info@snowbrisco.com"
                        className="text-white/80 hover:text-white transition-colors text-sm block break-all"
                        style={{ fontFamily: fonts.sans }}
                      >
                        info@snowbrisco.com
                      </a>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        We reply super fast! ⚡
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: colors.accent }} />
                    <div>
                      <p 
                        className="text-white/80 text-sm"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Ontario, Canada 🇨🇦
                      </p>
                      <p 
                        className="text-xs text-white/60"
                        style={{ fontFamily: fonts.sans }}
                      >
                        Come meet our babies!
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
                    Follow Our Adventures! 📸
                  </h5>
                  <div className="flex space-x-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
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
        className="border-t py-4 sm:py-6"
        style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
                <p 
                  className="text-white/60 text-sm"
                  style={{ fontFamily: fonts.sans }}
                >
                  © {currentYear} SnowBrisco - Creating magical moments, one paw at a time 🐾✨
                </p>
                <div className="flex items-center space-x-4 text-xs text-white/50 flex-wrap justify-center">
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Privacy Stuff
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Terms & Love
                  </a>
                  <span className="hidden sm:inline">•</span>
                  <a 
                    href="#" 
                    className="hover:text-white/70 transition-colors"
                    style={{ fontFamily: fonts.sans }}
                  >
                    Kitty Care Tips
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
                  and lots of cat hair! 😸
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