
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <div 
            className="text-xl font-bold gradient-text cursor-pointer transition-all duration-300 hover:scale-105 tracking-wide"
            onClick={() => handleSectionClick('home')}
          >
            Shubham Bhatt
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full animate-pulse"></div>
                )}
                {/* Hover underline effect */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id ? 'w-6' : 'w-0 group-hover:w-4'
                }`}></div>
              </button>
            ))}
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-muted/50"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} 
                />
                <X 
                  size={24} 
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} 
                />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-4 space-y-2 bg-card/95 backdrop-blur-sm rounded-2xl mt-2 border border-border/50 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`block w-full text-left px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/15 shadow-lg border border-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <span className="flex items-center justify-between">
                  {item.label}
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
