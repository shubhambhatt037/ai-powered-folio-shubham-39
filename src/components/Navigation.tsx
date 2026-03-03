
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'products', label: 'Products' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className={`mx-auto transition-all duration-500 ${
        isScrolled
          ? 'max-w-3xl mt-4 px-2'
          : 'max-w-7xl mt-0 px-6 sm:px-8 lg:px-12'
      }`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled
            ? 'h-14 bg-black/60 backdrop-blur-xl border border-white/[0.06] rounded-full px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
            : 'h-16 bg-background/80 backdrop-blur-md border-b border-white/[0.04] px-0'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => handleSectionClick('home')}
          >
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-foreground">S</span>
              <span className="gradient-text">B</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className="relative px-4 py-2 text-sm transition-all duration-300"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                  style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}
                >
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/[0.08] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}

            {/* Status indicator */}
            <div className="ml-3 pl-3 border-l border-white/[0.06] flex items-center gap-2">
              <div className="status-dot" />
              <span className="mono-label text-[0.65rem]">Available</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-all duration-300 p-2 rounded-full hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
                />
                <X
                  size={20}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 p-2 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/[0.06] shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
            >
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleSectionClick(item.id)}
                  className={`block w-full text-left px-5 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }`}
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <span className="flex items-center justify-between">
                    {item.label}
                    {activeSection === item.id && (
                      <div className="status-dot" style={{ width: 6, height: 6 }} />
                    )}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
