import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { colors } from '@/config/colors';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { t } = useTranslation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const features = [
    {
      number: t('about.stats.yearsOfJoy.number'),
      label: t('about.stats.yearsOfJoy.label'),
      description: t('about.stats.yearsOfJoy.description')
    },
    {
      number: t('about.stats.happyFamilies.number'),
      label: t('about.stats.happyFamilies.label'),
      description: t('about.stats.happyFamilies.description')
    },
    {
      number: t('about.stats.amazingBreeds.number'),
      label: t('about.stats.amazingBreeds.label'),
      description: t('about.stats.amazingBreeds.description')
    },
    {
      number: t('about.stats.loveGuarantee.number'),
      label: t('about.stats.loveGuarantee.label'),
      description: t('about.stats.loveGuarantee.description')
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: colors.backgroundLight }}
      id="about"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: colors.text
              }}
            >
              {t('about.title')}
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: colors.muted
              }}
            >
              {t('about.subtitle')}
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-20">
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div>
                <h3 
                  className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: colors.text
                  }}
                >
                  {t('about.howItStarted')}
                </h3>
                <div 
                  className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: colors.muted
                  }}
                >
                  <p>
                    {t('about.paragraph1')}
                  </p>
                  <p>
                    {t('about.paragraph2')}
                  </p>
                  <p>
                    {t('about.paragraph3')}
                  </p>
                </div>
              </div>

              <div>
                <h4 
                  className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: colors.text
                  }}
                >
                  {t('about.whatMakesUsSpecial')}
                </h4>
                <ul 
                  className="space-y-2 sm:space-y-3 text-sm sm:text-base"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: colors.muted
                  }}
                >
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">💖</span>
                    <span className="leading-relaxed">{t('about.specialFeatures.breedWithHearts')}</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🏥</span>
                    <span className="leading-relaxed">{t('about.specialFeatures.topNotchHealthCare')}</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🎾</span>
                    <span className="leading-relaxed">{t('about.specialFeatures.playTime')}</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🤝</span>
                    <span className="leading-relaxed">{t('about.specialFeatures.foreverSupport')}</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Content - Simba Image */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <Card 
                className="p-4 sm:p-6 md:p-8 shadow-xl"
                style={{ backgroundColor: colors.white }}
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/simba.jpg" 
                    alt="Simba - Our Adorable Scottish Fold Star"
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 
                    className="text-lg sm:text-xl font-semibold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.text
                    }}
                  >
                    {t('about.simbaTitle')}
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: colors.muted
                    }}
                  >
                    {t('about.simbaDescription')}
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <Card 
                  className="p-4 sm:p-6 hover:shadow-lg transition-shadow duration-200 h-full"
                  style={{ backgroundColor: colors.white }}
                >
                  <div 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.accent
                    }}
                  >
                    {feature.number}
                  </div>
                  <h4 
                    className="text-sm sm:text-base md:text-lg font-semibold mb-2 leading-tight"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.text
                    }}
                  >
                    {feature.label}
                  </h4>
                  <p 
                    className="text-xs sm:text-sm leading-relaxed"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: colors.muted
                    }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 