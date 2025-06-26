import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { colors } from '@/config/colors';
import { fonts } from '@/config/fonts';
import CatDetails from './CatDetails';

interface Cat {
  id: number;
  name: string;
  breed: string;
  age: string;
  gender: string;
  color: string;
  price: string;
  status: 'available' | 'reserved' | 'sold';
  image: string;
  description: string;
  features: string[];
}

const CatGallery = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleCatClick = (cat: Cat) => {
    setSelectedCat(cat);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedCat(null);
  };

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

  // Cat data with actual images
  const cats: Cat[] = [
    {
      id: 1,
      name: "Simba",
      breed: "Scottish Fold",
      age: "8 weeks",
      gender: "Male",
      color: "Golden",
      price: "$1,200",
      status: "available",
      image: "/simba.jpg",
      description: "Beautiful golden Scottish Fold with perfect ears and sweet temperament.",
      features: ["Health tested", "Vaccinated", "Pedigreed", "Home raised"]
    },
    {
      id: 2,
      name: "Elvis",
      breed: "Scottish Straight",
      age: "10 weeks",
      gender: "Male",
      color: "Blue Point",
      price: "$1,100",
      status: "available",
      image: "/Elvis.jpg",
      description: "Handsome Scottish Straight with striking blue point coloring and gentle personality.",
      features: ["Health tested", "Vaccinated", "Pedigreed", "Socialized"]
    },
    {
      id: 3,
      name: "Kiara",
      breed: "Scottish Fold",
      age: "12 weeks",
      gender: "Female",
      color: "Silver Tabby",
      price: "$1,300",
      status: "available",
      image: "/Kiara.jpg",
      description: "Stunning silver tabby Scottish Fold with perfect fold ears and loving nature.",
      features: ["Champion bloodline", "Health tested", "Vaccinated", "Registered"]
    },
    {
      id: 4,
      name: "Eva",
      breed: "British Shorthair",
      age: "9 weeks",
      gender: "Female",
      color: "Blue",
      price: "$1,250",
      status: "reserved",
      image: "/Eva.jpg",
      description: "Adorable blue British Shorthair with classic round features and gentle nature.",
      features: ["Health tested", "Vaccinated", "Early socialized", "Litter trained"]
    },
    {
      id: 5,
      name: "Hanna",
      breed: "Scottish Fold",
      age: "11 weeks",
      gender: "Female",
      color: "Cream",
      price: "$1,350",
      status: "available",
      image: "/Hanna.jpg",
      description: "Beautiful cream Scottish Fold with perfect fold ears and sweet personality.",
      features: ["Show quality", "Health tested", "Vaccinated", "Pedigreed"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return colors.success;
      case 'reserved':
        return colors.warning;
      case 'sold':
        return colors.muted;
      default:
        return colors.muted;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'reserved':
        return 'Reserved';
      case 'sold':
        return 'Sold';
      default:
        return status;
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20"
      style={{ backgroundColor: colors.background }}
      id="cats"
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
              Find Your Perfect Companion! 😻
            </motion.h2>
            <motion.p 
              className="text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: fonts.body,
                color: colors.muted
              }}
            >
              Ready to adopt or purchase your new family member? 🏠💕 Meet our beautiful cats looking for their forever homes. Each kitty is health tested, vaccinated, and raised with endless love!
            </motion.p>
          </motion.div>

          {/* Cat Gallery Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {cats.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeInUp}
                className="group"
              >
                <Card 
                  className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  style={{ backgroundColor: colors.white }}
                  onClick={() => handleCatClick(cat)}
                >
                  {/* Cat Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={cat.image} 
                      alt={`${cat.name} - ${cat.breed}`}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge 
                        className="text-white font-medium px-3 py-1"
                        style={{ 
                          backgroundColor: getStatusColor(cat.status),
                          fontFamily: fonts.sans
                        }}
                      >
                        {getStatusText(cat.status)}
                      </Badge>
                    </div>
                  </div>

                  {/* Cat Details */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 
                        className="text-2xl font-bold"
                        style={{ 
                          fontFamily: fonts.display,
                          color: colors.text
                        }}
                      >
                        {cat.name}
                      </h3>
                      <span 
                        className="text-xl font-bold"
                        style={{ 
                          fontFamily: fonts.display,
                          color: colors.primary
                        }}
                      >
                        {cat.price}
                      </span>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span 
                          className="font-medium"
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.muted
                          }}
                        >
                          Breed:
                        </span>
                        <span 
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.text
                          }}
                        >
                          {cat.breed}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span 
                          className="font-medium"
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.muted
                          }}
                        >
                          Age:
                        </span>
                        <span 
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.text
                          }}
                        >
                          {cat.age}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span 
                          className="font-medium"
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.muted
                          }}
                        >
                          Gender:
                        </span>
                        <span 
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.text
                          }}
                        >
                          {cat.gender}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span 
                          className="font-medium"
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.muted
                          }}
                        >
                          Color:
                        </span>
                        <span 
                          style={{ 
                            fontFamily: fonts.sans,
                            color: colors.text
                          }}
                        >
                          {cat.color}
                        </span>
                      </div>
                    </div>

                    <p 
                      className="text-sm mb-4 leading-relaxed"
                      style={{ 
                        fontFamily: fonts.body,
                        color: colors.muted
                      }}
                    >
                      {cat.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cat.features.map((feature, index) => (
                        <Badge 
                          key={index}
                          className="text-xs px-2 py-1"
                          style={{ 
                            backgroundColor: colors.secondary,
                            color: colors.text,
                            fontFamily: fonts.sans
                          }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Button 
                      className={`w-full font-medium transition-all duration-300 ${
                        cat.status === 'available' 
                          ? 'hover:shadow-lg' 
                          : 'opacity-60 cursor-not-allowed'
                      }`}
                      style={{ 
                        backgroundColor: cat.status === 'available' ? colors.primary : colors.muted,
                        color: colors.white,
                        fontFamily: fonts.sans
                      }}
                      disabled={cat.status !== 'available'}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCatClick(cat);
                      }}
                    >
                      {cat.status === 'available' ? 'View Details' : 
                       cat.status === 'reserved' ? 'Reserved' : 'Sold'}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <p 
              className="text-lg mb-6"
              style={{ 
                fontFamily: fonts.body,
                color: colors.muted
              }}
            >
              Interested in one of our cats? Contact us to learn more or schedule a visit.
            </p>
            <Button 
              size="lg"
              className="px-8 py-3 font-medium hover:shadow-lg transition-all duration-300"
              style={{ 
                backgroundColor: colors.accent,
                color: colors.white,
                fontFamily: fonts.sans
              }}
            >
              Contact Us Today
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Cat Details Modal */}
      {selectedCat && (
        <CatDetails 
          cat={selectedCat}
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
        />
      )}
    </section>
  );
};

export default CatGallery; 