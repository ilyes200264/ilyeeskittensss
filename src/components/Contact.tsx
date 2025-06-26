import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  
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
      title: t('contact.contactInfo.phone.title'),
      details: [t('contact.contactInfo.phone.number'), t('contact.contactInfo.phone.subtitle')],
      action: "tel:+14383424290"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.contactInfo.email.title'),
      details: [t('contact.contactInfo.email.address'), t('contact.contactInfo.email.subtitle')],
      action: "mailto:info@snowbrisco.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.contactInfo.location.title'),
      details: [t('contact.contactInfo.location.address'), t('contact.contactInfo.location.subtitle')],
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('contact.contactInfo.hours.title'),
      details: [t('contact.contactInfo.hours.weekdays'), t('contact.contactInfo.hours.weekend')],
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
              {t('contact.title')}
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: fonts.body,
                color: colors.muted
              }}
            >
              {t('contact.subtitle')}
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
                    {t('contact.sendMessage')}
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
                        {t('contact.yourName')} {t('common.required')}
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
                        placeholder={t('contact.enterYourName')}
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
                        {t('contact.emailAddress')} {t('common.required')}
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
                        placeholder={t('contact.enterYourEmail')}
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
                        {t('contact.phoneNumber')}
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
                        placeholder={t('contact.enterYourPhone')}
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
                        {t('contact.interestedCat')}
                      </label>
                      <select
                        name="catInterest"
                        value={formData.catInterest}
                        onChange={handleInputChange}
                        title={t('contact.interestedCat')}
                        className="w-full px-4 py-3 rounded-lg border transition-colors focus:outline-none focus:ring-2"
                        style={{ 
                          borderColor: colors.border,
                          fontFamily: fonts.sans,
                          backgroundColor: colors.background
                        }}
                      >
                        <option value="">{t('contact.selectACat')}</option>
                        <option value="simba">Simba - Scottish Fold</option>
                        <option value="elvis">Elvis - Scottish Straight</option>
                        <option value="kiara">Kiara - Scottish Fold</option>
                        <option value="eva">Eva - British Shorthair</option>
                        <option value="hanna">Hanna - Scottish Fold</option>
                        <option value="general">{t('contact.generalInquiry')}</option>
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
                      {t('contact.yourMessage')} {t('common.required')}
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
                      placeholder={t('contact.messagePlaceholder')}
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
                      t('contact.sending')
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {t('contact.sendMessageButton')}
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
                  {t('contact.followOurJourney')}
                </h4>
                <p 
                  className="text-sm mb-4"
                  style={{ 
                    fontFamily: fonts.body,
                    color: colors.muted
                  }}
                >
                  {t('contact.stayUpdated')}
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
                  {t('contact.preferToCall')}
                </h4>
                <p 
                  className="text-sm mb-4"
                  style={{ 
                    fontFamily: fonts.body,
                    color: colors.muted
                  }}
                >
                  {t('contact.hereToAnswer')}
                </p>
                <Button
                  className="font-medium transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.accent,
                    color: colors.white,
                    fontFamily: fonts.sans
                  }}
                  onClick={() => window.open('tel:+14383424290', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  {t('contact.callNow')}
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