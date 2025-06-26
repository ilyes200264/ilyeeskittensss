import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { colors } from '@/config/colors';
import { fonts } from '@/config/fonts';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Twitter,
  Heart
} from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    catInterest: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      catInterest: '',
      message: ''
    });
    
    setIsSubmitting(false);
    alert('Thank you for your inquiry! We\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "Call or Text Welcome"],
      action: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@snowbrisco.com", "Quick Response Guaranteed"],
      action: "mailto:info@snowbrisco.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: ["Ontario, Canada", "Visits by Appointment"],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon-Sat: 9AM - 6PM", "Sun: 10AM - 4PM"],
      action: null
    }
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

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: colors.backgroundLight }}
      id="contact"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: fonts.display,
                color: colors.text
              }}
            >
              Get In Touch
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: fonts.body,
                color: colors.muted
              }}
            >
              Ready to welcome a new furry family member? We'd love to hear from you! 
              Contact us to learn more about our available cats or schedule a visit.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8" style={{ backgroundColor: colors.white }}>
                <div className="flex items-center mb-6">
                  <MessageCircle 
                    className="w-6 h-6 mr-3" 
                    style={{ color: colors.primary }} 
                  />
                  <h3 
                    className="text-2xl font-bold"
                    style={{ 
                      fontFamily: fonts.display,
                      color: colors.text
                    }}
                  >
                    Send Us a Message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ 
                          color: colors.text,
                          fontFamily: fonts.sans
                        }}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          fontFamily: fonts.sans,
                          backgroundColor: colors.background
                        }}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ 
                          color: colors.text,
                          fontFamily: fonts.sans
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          fontFamily: fonts.sans,
                          backgroundColor: colors.background
                        }}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ 
                          color: colors.text,
                          fontFamily: fonts.sans
                        }}
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          fontFamily: fonts.sans,
                          backgroundColor: colors.background
                        }}
                        placeholder="Enter your phone"
                      />
                    </div>
                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{ 
                          color: colors.text,
                          fontFamily: fonts.sans
                        }}
                      >
                        Interested Cat
                      </label>
                      <select
                        name="catInterest"
                        value={formData.catInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          fontFamily: fonts.sans,
                          backgroundColor: colors.background
                        }}
                      >
                        <option value="">Select a cat</option>
                        <option value="simba">Simba - Scottish Fold</option>
                        <option value="elvis">Elvis - Scottish Straight</option>
                        <option value="kiara">Kiara - Scottish Fold</option>
                        <option value="eva">Eva - British Shorthair</option>
                        <option value="hanna">Hanna - Scottish Fold</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label 
                      className="block text-sm font-medium mb-2"
                      style={{ 
                        color: colors.text,
                        fontFamily: fonts.sans
                      }}
                    >
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2 resize-none"
                      style={{ 
                        borderColor: colors.border,
                        fontFamily: fonts.sans,
                        backgroundColor: colors.background
                      }}
                      placeholder="Tell us about yourself, your living situation, and any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: colors.primary,
                      color: colors.white,
                      fontFamily: fonts.sans
                    }}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                  >
                    <Card 
                      className={`p-6 transition-all duration-300 hover:shadow-lg ${
                        info.action ? 'cursor-pointer hover:-translate-y-1' : ''
                      }`}
                      style={{ backgroundColor: colors.white }}
                      onClick={() => info.action && window.open(info.action, '_self')}
                    >
                      <div className="flex items-start space-x-4">
                        <div 
                          className="p-3 rounded-full"
                          style={{ backgroundColor: colors.primary + '20' }}
                        >
                          <div style={{ color: colors.primary }}>
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 
                            className="text-lg font-semibold mb-2"
                            style={{ 
                              fontFamily: fonts.display,
                              color: colors.text
                            }}
                          >
                            {info.title}
                          </h4>
                          {info.details.map((detail, idx) => (
                            <p 
                              key={idx}
                              className="text-sm"
                              style={{ 
                                fontFamily: fonts.body,
                                color: idx === 0 ? colors.text : colors.muted
                              }}
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <Card className="p-6" style={{ backgroundColor: colors.white }}>
                <h4 
                  className="text-xl font-bold mb-4 flex items-center"
                  style={{ 
                    fontFamily: fonts.display,
                    color: colors.text
                  }}
                >
                  <Heart className="w-5 h-5 mr-2" style={{ color: colors.accent }} />
                  Follow Our Journey
                </h4>
                <p 
                  className="text-sm mb-4"
                  style={{ 
                    fontFamily: fonts.body,
                    color: colors.muted
                  }}
                >
                  Stay updated with our latest cats, news, and adorable moments!
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                      style={{ backgroundColor: social.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Quick Contact CTA */}
              <Card 
                className="p-6 text-center"
                style={{ backgroundColor: colors.accent + '10' }}
              >
                <h4 
                  className="text-lg font-bold mb-2"
                  style={{ 
                    fontFamily: fonts.display,
                    color: colors.text
                  }}
                >
                  Prefer to Call?
                </h4>
                <p 
                  className="text-sm mb-4"
                  style={{ 
                    fontFamily: fonts.body,
                    color: colors.muted
                  }}
                >
                  We're here to answer all your questions!
                </p>
                <Button
                  className="font-medium transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.accent,
                    color: colors.white,
                    fontFamily: fonts.sans
                  }}
                  onClick={() => window.open('tel:+15551234567', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 