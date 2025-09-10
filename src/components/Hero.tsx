
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { FloatingParticles } from './FloatingParticles';
import ProfileCard from './ProfileCard';

interface HeroProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export function Hero({ onViewWork, onGetInTouch }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      {/* Enhanced Floating Canvas Background */}
      <FloatingParticles />

      {/* Enhanced Floating Dots Background Animation */}
      <div className="floating-dots-container">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Enhanced Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      <div className="glow-orb glow-orb-4"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center min-h-[80vh]">
          {/* Left side - Enhanced Text content */}
          <div 
            className={`text-center lg:text-left space-y-12 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9]">
                <span className="text-foreground block mb-2 hero-text-reveal">Hello.</span>
                <div className="flex items-baseline gap-4 justify-center lg:justify-start hero-text-reveal" style={{ animationDelay: '0.2s' }}>
                  <span className="text-muted-foreground/80 text-3xl sm:text-4xl lg:text-5xl font-light">I'm</span>
                  <span className="hero-gradient-text font-bold bg-gradient-to-r from-foreground via-primary/80 to-accent bg-clip-text text-transparent">
                    Shubham
                  </span>
                </div>
              </h1>
              
              <div className="space-y-4 pt-2 hero-text-reveal" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 tracking-wide leading-tight">
                  Full-Stack Developer
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground/70 font-light tracking-wide">
                  exploring AI + Web
                </p>
                <p className="text-sm sm:text-base text-accent/80 font-medium tracking-wider uppercase">
                  Building the Future
                </p>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-muted-foreground/80 max-w-2xl leading-relaxed font-light tracking-wide hero-text-reveal" style={{ animationDelay: '0.6s', letterSpacing: '0.25px' }}>
              Passionate about solving complex problems, creating innovative solutions, and continuously learning cutting-edge technologies to build meaningful digital experiences.
            </p>

            {/* Enhanced CTAs with custom glow effects */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-6 hero-text-reveal" style={{ animationDelay: '0.8s' }}>
              <Button 
                onClick={onViewWork}
                className="btn-primary-glow px-10 py-7 text-lg font-medium tracking-wide rounded-full shadow-xl"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline"
                className="btn-outline-glow px-10 py-7 text-lg font-medium tracking-wide rounded-full backdrop-blur-sm"
                asChild
              >
                <a href="#contact">
                  <span className="group-hover:text-foreground transition-colors duration-300">Get in Touch</span>
                </a>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-10 justify-center lg:justify-start pt-12 hero-text-reveal" style={{ animationDelay: '1s' }}>
              <a
                href="https://github.com/shubhambhatt037"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <Github size={24} strokeWidth={1.5} className="group-hover:drop-shadow-lg transition-all duration-300" />
              </a>
              <a
                href="https://linkedin.com/in/shubham-bhatt-48b002250"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground/60 hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} strokeWidth={1.5} className="group-hover:drop-shadow-lg transition-all duration-300" />
              </a>
              <a
                href="https://twitter.com/bhattbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground/60 hover:text-accent transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                aria-label="Twitter Profile"
              >
                <Twitter size={24} strokeWidth={1.5} className="group-hover:drop-shadow-lg transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right side - Enhanced Profile Card */}
          <div 
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out mt-16 lg:mt-8 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <ProfileCard
              name="Shubham Bhatt"
              title="Full-Stack Developer"
              handle="shubhambhatt037"
              status="Available"
              contactText="Get in Touch"
              avatarUrl="/lovable-uploads/profile-pic.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={onGetInTouch}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-muted-foreground/60 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/30 to-transparent relative">
            <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
