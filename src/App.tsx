import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import CatGallery from './components/CatGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { assets } from './config';


function App() {
  const heroContent = {
    title: "CATS & KITTENS FOR SALE",
    subtitle: "Find Your New Best Friend",
    description: "Welcome to SnowBrisco Premium Cattery - your trusted source for exceptional Scottish Fold, Scottish Straight, and British Shorthair cats. We specialize in breeding healthy, well-socialized cats with outstanding temperaments and stunning appearances.",
    features: [
      "Health Guaranteed",
      "Purebred Certified",
      "Fully Vaccinated",
      "Well Socialized",
      "30+ Years Experience",
      "Professional Breeding"
    ],
    ctaText: "GET STARTED",
    ctaDescription: "Ready to welcome a new furry family member? Browse our available cats or schedule a visit to meet them in person.",
    // Background image path from assets named hero
    backgroundImage: assets.cats.hero, // Using your local hero.jpg image.
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
