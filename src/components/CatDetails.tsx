import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Heart, Share2, Calendar, MapPin, Award, Shield, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { colors } from '@/config/colors';
import { fonts } from '@/config/fonts';

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

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  alt: string;
}

interface CatDetailsProps {
  cat: Cat;
  isOpen: boolean;
  onClose: () => void;
}

const CatDetails = ({ cat, isOpen, onClose }: CatDetailsProps) => {
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Get specific data for each cat
  const getCatSpecificData = (catId: number, catName: string) => {
    const baseData = {
      media: [
        { type: 'image' as const, src: cat.image, alt: `${catName} main photo` },
        { type: 'image' as const, src: cat.image, alt: `${catName} close-up` },
        { type: 'image' as const, src: cat.image, alt: `${catName} playing` },
      ],
      birthDate: "2024",
      weight: "2.1 lbs",
      location: "SnowBrisco Cattery, Ontario, Canada",
      microchip: "Yes",
      registration: "CFA Registered",
      parents: "Champion Sire & Dam",
      healthTests: ["PKD Clear", "HCM Clear", "PRA Clear"],
      vaccinations: ["FVRCP", "Rabies (age appropriate)"],
      personality: ["Playful", "Affectionate", "Gentle", "Social", "Curious"],
      careInfo: [
        "Regular vet checkups recommended",
        "High-quality kitten food required",
        "Indoor living preferred",
        "Daily play and interaction needed"
      ]
    };

    // Customize data based on specific cat
    switch (catId) {
      case 1: // Simba
        return {
          ...baseData,
          media: [
            { type: 'image' as const, src: '/simba.jpg', alt: 'Simba main photo' },
            { type: 'image' as const, src: '/simba2.jpg', alt: 'Simba portrait' },
            { type: 'video' as const, src: '/simbavideo.mp4', thumbnail: '/simba3.jpg', alt: 'Simba playing video' },
            { type: 'image' as const, src: '/simba3.jpg', alt: 'Simba close-up' },
            { type: 'image' as const, src: '/simba4.jpg', alt: 'Simba relaxing' },
          ],
          birthDate: "March 15, 2024",
          weight: "2.3 lbs",
          personality: ["Confident", "Playful", "Leader", "Affectionate", "Brave"],
          specialNote: "Simba is named after the lion king for his confident and regal personality. He loves to be the center of attention and is excellent with children.",
          parents: "Golden Champion Sire x Cream Champion Dam"
        };
      case 2: // Elvis
        return {
          ...baseData,
          birthDate: "February 28, 2024",
          weight: "2.0 lbs",
          personality: ["Charming", "Musical", "Social", "Gentle", "Curious"],
          specialNote: "Elvis has a unique blue point coloration and seems to 'sing' when he's happy, just like his namesake! He's very social and loves meeting new people.",
          parents: "Blue Point Champion Sire x Seal Point Dam"
        };
      case 3: // Kiara
        return {
          ...baseData,
          birthDate: "March 8, 2024",
          weight: "1.9 lbs",
          personality: ["Elegant", "Independent", "Intelligent", "Graceful", "Observant"],
          specialNote: "Kiara is a beautiful silver tabby with perfect fold ears. She's intelligent and observant, often watching everything with keen interest before joining in.",
          parents: "Silver Tabby Champion Sire x Scottish Fold Dam"
        };
      case 4: // Eva
        return {
          ...baseData,
          birthDate: "February 20, 2024",
          weight: "2.2 lbs",
          personality: ["Calm", "Nurturing", "Gentle", "Patient", "Loving"],
          specialNote: "Eva is a classic blue British Shorthair with the breed's signature round features and plush coat. She's very calm and patient, perfect for families.",
          parents: "Blue British Shorthair Champion Sire x British Shorthair Dam"
        };
      case 5: // Hanna
        return {
          ...baseData,
          birthDate: "March 12, 2024",
          weight: "2.1 lbs",
          personality: ["Sweet", "Cuddly", "Gentle", "Peaceful", "Loving"],
          specialNote: "Hanna has a beautiful cream coat and the sweetest disposition. She loves to cuddle and is incredibly gentle, making her perfect for any home.",
          parents: "Cream Scottish Fold Sire x Golden Scottish Fold Dam"
        };
      default:
        return baseData;
    }
  };

  const catData = getCatSpecificData(cat.id, cat.name);

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
        return 'Available Now';
      case 'reserved':
        return 'Reserved';
      case 'sold':
        return 'Sold';
      default:
        return status;
    }
  };

  const nextMedia = () => {
    setSelectedMediaIndex((prev) => (prev + 1) % catData.media.length);
  };

  const prevMedia = () => {
    setSelectedMediaIndex((prev) => (prev - 1 + catData.media.length) % catData.media.length);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto p-0">
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="relative"
          style={{ backgroundColor: colors.background }}
        >
          {/* Header */}
          <div className="sticky top-0 z-50 flex items-center justify-between p-4 border-b" style={{ backgroundColor: colors.white, borderColor: colors.border }}>
            <div className="flex items-center space-x-4">
              <h1 
                className="text-2xl font-bold"
                style={{ 
                  fontFamily: fonts.display,
                  color: colors.text
                }}
              >
                Meet {cat.name}
              </h1>
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
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsFavorited(!isFavorited)}
                className="p-2"
              >
                <Heart 
                  className={`w-5 h-5 ${isFavorited ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
                />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2"
              >
                <Share2 className="w-5 h-5" style={{ color: colors.muted }} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-2"
              >
                <X className="w-5 h-5" style={{ color: colors.muted }} />
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Media Carousel */}
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {/* Main Media Display */}
              <div className="relative overflow-hidden rounded-lg" style={{ backgroundColor: colors.white }}>
                <div className={`relative ${catData.media[selectedMediaIndex].type === 'video' ? 'h-auto min-h-96' : 'h-96'}`}>
                  {catData.media[selectedMediaIndex].type === 'image' ? (
                    <img 
                      src={catData.media[selectedMediaIndex].src} 
                      alt={catData.media[selectedMediaIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="relative w-full">
                      <video
                        key={selectedMediaIndex} // Force re-render when switching to video
                        src={catData.media[selectedMediaIndex].src}
                        className="w-full h-auto object-cover rounded-lg"
                        controls
                        autoPlay
                        muted // Required for autoplay in most browsers
                        poster={catData.media[selectedMediaIndex].thumbnail}
                        style={{ minHeight: '400px' }}
                      />
                    </div>
                  )}
                  
                  {/* Navigation Arrows */}
                  {catData.media.length > 1 && (
                    <>
                      <button
                        onClick={prevMedia}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextMedia}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Media Counter */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
                    {selectedMediaIndex + 1} / {catData.media.length}
                  </div>
                </div>
              </div>

              {/* Media Thumbnails */}
              <div className="flex space-x-2 overflow-x-auto">
                {catData.media.map((mediaItem, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMediaIndex(index)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedMediaIndex === index 
                        ? 'border-opacity-100' 
                        : 'border-opacity-20 hover:border-opacity-60'
                    }`}
                    style={{ borderColor: colors.primary }}
                  >
                    <img 
                      src={mediaItem.thumbnail || mediaItem.src} 
                      alt={mediaItem.alt}
                      className="w-full h-full object-cover"
                    />
                    {mediaItem.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <Play className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Details */}
            <motion.div 
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Basic Info */}
              <Card className="p-6" style={{ backgroundColor: colors.white }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 
                      className="text-3xl font-bold mb-2"
                      style={{ 
                        fontFamily: fonts.display,
                        color: colors.text
                      }}
                    >
                      {cat.name}
                    </h2>
                    <p 
                      className="text-lg"
                      style={{ 
                        fontFamily: fonts.body,
                        color: colors.muted
                      }}
                    >
                      {cat.breed}
                    </p>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-3xl font-bold"
                      style={{ 
                        fontFamily: fonts.display,
                        color: colors.primary
                      }}
                    >
                      {cat.price}
                    </div>
                  </div>
                </div>

                <p 
                  className="text-base leading-relaxed mb-4"
                  style={{ 
                    fontFamily: fonts.body,
                    color: colors.text
                  }}
                >
                  {cat.description}
                </p>

                {/* Special Note */}
                {catData.specialNote && (
                  <div 
                    className="p-4 rounded-lg mb-4"
                    style={{ backgroundColor: colors.secondary + '20' }}
                  >
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ 
                        fontFamily: fonts.body,
                        color: colors.text
                      }}
                    >
                      <strong>Special Note:</strong> {catData.specialNote}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span style={{ color: colors.muted, fontFamily: fonts.sans }}>Age:</span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{cat.age}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.muted, fontFamily: fonts.sans }}>Gender:</span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{cat.gender}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.muted, fontFamily: fonts.sans }}>Color:</span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{cat.color}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.muted, fontFamily: fonts.sans }}>Weight:</span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{catData.weight}</span>
                  </div>
                </div>
              </Card>

              {/* Detailed Information */}
              <Card className="p-6" style={{ backgroundColor: colors.white }}>
                <h3 
                  className="text-xl font-bold mb-4 flex items-center"
                  style={{ 
                    fontFamily: fonts.display,
                    color: colors.text
                  }}
                >
                  <Award className="w-5 h-5 mr-2" style={{ color: colors.primary }} />
                  Detailed Information
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center" style={{ color: colors.muted, fontFamily: fonts.sans }}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Birth Date:
                    </span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{catData.birthDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center" style={{ color: colors.muted, fontFamily: fonts.sans }}>
                      <MapPin className="w-4 h-4 mr-2" />
                      Location:
                    </span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{catData.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center" style={{ color: colors.muted, fontFamily: fonts.sans }}>
                      <Shield className="w-4 h-4 mr-2" />
                      Registration:
                    </span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{catData.registration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center" style={{ color: colors.muted, fontFamily: fonts.sans }}>
                      <Award className="w-4 h-4 mr-2" />
                      Parents:
                    </span>
                    <span style={{ color: colors.text, fontFamily: fonts.sans }}>{catData.parents}</span>
                  </div>
                </div>
              </Card>

              {/* Health & Care */}
              <Card className="p-6" style={{ backgroundColor: colors.white }}>
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: fonts.display,
                    color: colors.text
                  }}
                >
                  Health & Care
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: colors.text, fontFamily: fonts.sans }}
                    >
                      Health Tests:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {catData.healthTests.map((test, index) => (
                        <Badge 
                          key={index}
                          className="text-xs px-2 py-1"
                          style={{ 
                            backgroundColor: colors.success + '20',
                            color: colors.success,
                            fontFamily: fonts.sans
                          }}
                        >
                          ✓ {test}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 
                      className="font-semibold mb-2"
                      style={{ color: colors.text, fontFamily: fonts.sans }}
                    >
                      Vaccinations:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {catData.vaccinations.map((vaccine, index) => (
                        <Badge 
                          key={index}
                          className="text-xs px-2 py-1"
                          style={{ 
                            backgroundColor: colors.secondary,
                            color: colors.text,
                            fontFamily: fonts.sans
                          }}
                        >
                          {vaccine}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Personality */}
              <Card className="p-6" style={{ backgroundColor: colors.white }}>
                <h3 
                  className="text-xl font-bold mb-4"
                  style={{ 
                    fontFamily: fonts.display,
                    color: colors.text
                  }}
                >
                  Personality Traits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {catData.personality.map((trait, index) => (
                    <Badge 
                      key={index}
                      className="text-sm px-3 py-1"
                      style={{ 
                        backgroundColor: colors.accent + '20',
                        color: colors.accent,
                        fontFamily: fonts.sans
                      }}
                    >
                      {trait}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button 
                  className={`flex-1 font-medium py-3 transition-all duration-300 ${
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
                >
                  {cat.status === 'available' ? `Inquire About ${cat.name}` : 
                   cat.status === 'reserved' ? 'Reserved' : 'Sold'}
                </Button>
                <Button 
                  variant="outline"
                  className="px-6 py-3"
                  style={{ 
                    borderColor: colors.border,
                    color: colors.text,
                    fontFamily: fonts.sans
                  }}
                >
                  Schedule Visit
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default CatDetails; 