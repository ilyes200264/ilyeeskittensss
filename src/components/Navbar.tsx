import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { fonts } from '@/config/fonts';
import LanguageToggle from './LanguageToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useTranslation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: t('navbar.ourStory'), href: '#about' },
    { name: t('navbar.availableCats'), href: '#cats' },
    { name: t('navbar.contact'), href: '#contact' }
  ];

  const handleFindPetClick = () => {
    const catsSection = document.querySelector('#cats');
    if (catsSection) {
      catsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/50' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="SnowBrisco Premium Cattery Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span 
                className={`text-lg font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
                style={{ fontFamily: fonts.display }}
              >
                {t('navbar.brand')}
              </span>
              <span 
                className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-slate-600' : 'text-white/80'
                }`}
                style={{ fontFamily: fonts.sans }}
              >
                {t('navbar.tagline')}
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600' 
                    : 'text-white hover:text-blue-200'
                }`}
                style={{ fontFamily: fonts.sans }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button and Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle isScrolled={isScrolled} />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                className={`transition-all duration-300 font-medium px-6 py-2 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-slate-900'
                }`}
                style={{ fontFamily: fonts.sans }}
                onClick={handleFindPetClick}
              >
                {t('navbar.findAPet')}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageToggle isScrolled={isScrolled} />
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`transition-colors duration-300 ${
                    isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col h-full">
                  {/* Mobile Logo */}
                  <div className="flex items-center space-x-3 pb-8 border-b border-slate-200">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                      <img 
                        src="/logo.png" 
                        alt="SnowBrisco Premium Cattery Logo"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span 
                        className="text-lg font-bold text-slate-900"
                        style={{ fontFamily: fonts.display }}
                      >
                        {t('navbar.brand')}
                      </span>
                      <span 
                        className="text-xs text-slate-600 font-medium"
                        style={{ fontFamily: fonts.sans }}
                      >
                        {t('navbar.tagline')}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-6 py-8 flex-1">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        className="text-slate-700 hover:text-blue-600 font-medium text-lg transition-colors duration-200"
                        style={{ fontFamily: fonts.sans }}
                        onClick={() => setIsMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile CTA */}
                  <div className="pt-6 border-t border-slate-200">
                    <Button 
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-medium py-3"
                      style={{ fontFamily: fonts.sans }}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        handleFindPetClick();
                      }}
                    >
                      {t('navbar.findAPet')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 