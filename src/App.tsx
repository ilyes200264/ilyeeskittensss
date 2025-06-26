import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CatGallery from './components/CatGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { assets } from './config';


function App() {
  const heroContent = {
    title: "ADORABLE KITTENS 🐱",
    subtitle: "Your Purrfect Companion is Here!",
    description: "Welcome to SnowBrisco! 😻 We raise Scottish Fold, Scottish Straight, and British Shorthair babies with tons of love!",
    features: [
      "💖 Love Guaranteed",
      "🏆 Champion Bloodlines", 
      "💉 Fully Protected",
      "🎾 Super Playful"
    ],
    ctaText: "FIND MY FURRY BESTIE!",
    ctaDescription: "Ready to fall in love? 🏠💕",
    // Background video path from public folder
    backgroundImage: "/video.mp4", // Using video.mp4 instead of simbavideo.mp4
  };

  const handleHeroCta = () => {
    console.log('CTA clicked - implement your logic here');
    // Add your CTA logic here (e.g., scroll to contact form, open modal, etc.)
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero 
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        description={heroContent.description}
        features={heroContent.features}
        ctaText={heroContent.ctaText}
        ctaDescription={heroContent.ctaDescription}
        backgroundImage={heroContent.backgroundImage}
        onCtaClick={handleHeroCta}
        showSocialSidebar={true}
        showScrollIndicator={true}
      />
      <AboutUs />
      <CatGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
