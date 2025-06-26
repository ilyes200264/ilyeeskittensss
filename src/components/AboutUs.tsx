import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { colors } from '@/config/colors';

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
      number: "3+",
      label: "Years Experience",
      description: "Years of dedicated breeding excellence since 2021"
    },
    {
      number: "500+",
      label: "Happy Families",
      description: "Cats placed in loving homes worldwide"
    },
    {
      number: "3",
      label: "Premium Breeds",
      description: "Scottish Fold, Scottish Straight & British Shorthair"
    },
    {
      number: "100%",
      label: "Health Guarantee",
      description: "Comprehensive health testing and certification"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: colors.backgroundLight }}
      id="about"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                color: colors.text
              }}
            >
              Our Heritage
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: colors.muted
              }}
            >
              Since 2021, SnowBrisco Premium Cattery has been dedicated to breeding exceptional cats with outstanding temperaments and stunning appearances.
            </motion.p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Content */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div>
                <h3 
                  className="text-3xl font-bold mb-6"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: colors.text
                  }}
                >
                  Our Story
                </h3>
                <div 
                  className="space-y-4 text-lg leading-relaxed"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: colors.muted
                  }}
                >
                  <p>
                    Founded with a passion for feline excellence, SnowBrisco began as a small family operation with a simple mission: to breed healthy, well-socialized cats that would become cherished family members.
                  </p>
                  <p>
                    Our expertise spans three magnificent breeds - Scottish Fold, Scottish Straight, and British Shorthair - each selected for their unique characteristics, gentle temperaments, and stunning beauty.
                  </p>
                  <p>
                    Every cat in our program undergoes comprehensive health testing, receives the finest veterinary care, and is raised with love in our home environment to ensure they're perfectly prepared for their new families.
                  </p>
                </div>
              </div>

              <div>
                <h4 
                  className="text-2xl font-semibold mb-4"
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    color: colors.text
                  }}
                >
                  Our Commitment
                </h4>
                <ul 
                  className="space-y-3"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: colors.muted
                  }}
                >
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-3 mt-1">✓</span>
                    Ethical breeding practices with focus on health and temperament
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-3 mt-1">✓</span>
                    Comprehensive health testing and genetic screening
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-3 mt-1">✓</span>
                    Early socialization and behavioral development
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-3 mt-1">✓</span>
                    Lifetime support for all our cat families
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Content - Simba Image */}
            <motion.div variants={fadeInUp}>
              <Card 
                className="p-8 shadow-xl"
                style={{ backgroundColor: colors.white }}
              >
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/simba.jpg" 
                    alt="Simba - Premium Scottish Fold Cat"
                    className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 
                    className="text-xl font-semibold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.text
                    }}
                  >
                    Meet Simba
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: colors.muted
                    }}
                  >
                    One of our beautiful Scottish Fold cats
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <Card 
                  className="p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: colors.white }}
                >
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.primary
                    }}
                  >
                    {feature.number}
                  </div>
                  <div 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      color: colors.text
                    }}
                  >
                    {feature.label}
                  </div>
                  <p 
                    className="text-sm"
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