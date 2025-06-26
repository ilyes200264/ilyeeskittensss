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
      label: "Years of Pure Joy",
      description: "Creating magical moments since 2021! 🎉"
    },
    {
      number: "500+",
      label: "Happy Families",
      description: "Furry babies loving life in amazing homes! 🏠💕"
    },
    {
      number: "3",
      label: "Amazing Breeds",
      description: "Scottish Fold, Scottish Straight & British Shorthair cuties! 😻"
    },
    {
      number: "100%",
      label: "Love Guarantee",
      description: "Every kitty comes with our promise of endless love! 💖"
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
              Our Amazing Journey! 🚀
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-2"
              style={{ 
                fontFamily: 'Inter, sans-serif',
                color: colors.muted
              }}
            >
              Hey there, fellow cat lover! 😻 Since 2021, we've been living our dream - raising the most adorable, cuddly, and loving kitties you'll ever meet! Every day is filled with purrs, play time, and pure happiness! 
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
                  How It All Started! 💫
                </h3>
                <div 
                  className="space-y-3 sm:space-y-4 text-base sm:text-lg leading-relaxed"
                  style={{ 
                    fontFamily: 'Inter, sans-serif',
                    color: colors.muted
                  }}
                >
                  <p>
                    Picture this: We fell head-over-heels in love with cats and thought, "Why not share this incredible joy with the world?" 🌍💕 That's how SnowBrisco was born - from pure love and a dream to connect amazing kitties with their perfect families!
                  </p>
                  <p>
                    We're totally obsessed with three incredible breeds - Scottish Fold (those adorable folded ears! 😍), Scottish Straight (elegant and playful!), and British Shorthair (chunky and lovable!) - each one bringing their own special magic to our hearts and homes.
                  </p>
                  <p>
                    Every single one of our fur babies grows up surrounded by love, cuddles, belly rubs, and all the attention they deserve! They're not just cats to us - they're family members getting ready to make YOUR family complete! 👨‍👩‍👧‍👦✨
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
                  What Makes Us Special! 🌟
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
                    <span className="leading-relaxed">We breed with our hearts - every kitty gets tons of love and socialization!</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🏥</span>
                    <span className="leading-relaxed">Top-notch health care and genetic testing - because healthy = happy!</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🎾</span>
                    <span className="leading-relaxed">Play time, cuddle time, and socialization from day one!</span>
                  </li>
                  <li className="flex items-start">
                    <span style={{ color: colors.accent }} className="mr-2 sm:mr-3 mt-1 text-sm sm:text-base">🤝</span>
                    <span className="leading-relaxed">We're here for you and your furry friend - forever and always!</span>
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
                    Meet Simba! 🦁✨
                  </h4>
                  <p 
                    className="text-sm"
                    style={{ 
                      fontFamily: 'Inter, sans-serif',
                      color: colors.muted
                    }}
                  >
                    One of our precious Scottish Fold superstars! 🌟
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