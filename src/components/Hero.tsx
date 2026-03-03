
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingParticles } from './FloatingParticles';
import ProfileCard from './ProfileCard';
import { useTextScramble } from '@/hooks/useTextScramble';

interface HeroProps {
  onViewWork: () => void;
  onGetInTouch: () => void;
}

export function Hero({ onViewWork, onGetInTouch }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { text: roleText } = useTextScramble('Full-Stack Developer', {
    delay: 800,
    speed: 35,
    trigger: isLoaded,
  });

  const { text: tagText } = useTextScramble('exploring AI + Web', {
    delay: 1400,
    speed: 30,
    trigger: isLoaded,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      {/* Floating Canvas Background */}
      <FloatingParticles />

      {/* Floating Dots */}
      <div className="floating-dots-container">
        {[...Array(20)].map((_, i) => (
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

      {/* Glow Orbs */}
      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-2" />
      <div className="glow-orb glow-orb-3" />
      <div className="glow-orb glow-orb-4" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center min-h-[80vh]">
          {/* Left side - Text content */}
          <motion.div
            className="text-center lg:text-left space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? 'visible' : 'hidden'}
          >
            {/* Greeting badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-white/[0.03] border border-white/[0.06] rounded-full px-4 py-1.5 mb-4">
                <div className="status-dot" style={{ width: 6, height: 6 }} />
                <span className="mono-label text-[0.65rem]">Available for work</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h1 style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-foreground/50 text-xl sm:text-2xl font-light tracking-wide block mb-3">
                  Hello, I'm
                </span>
                <span className="hero-gradient-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] block">
                  Shubham
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h2
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {roleText || '\u00A0'}
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground/60 font-light tracking-wide" style={{ fontFamily: 'var(--font-mono)' }}>
                {tagText || '\u00A0'}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground/70 max-w-xl leading-relaxed font-light"
            >
              Passionate about solving complex problems, creating innovative solutions,
              and continuously learning cutting-edge technologies to build meaningful digital experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button
                onClick={onViewWork}
                className="btn-primary-glow px-8 py-6 text-base font-medium tracking-wide rounded-full"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              </Button>

              <Button
                variant="outline"
                className="btn-outline-glow px-8 py-6 text-base font-medium tracking-wide rounded-full"
                asChild
              >
                <a href="#contact">
                  <span>Get in Touch</span>
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-8 justify-center lg:justify-start pt-8">
              {[
                { href: 'https://github.com/shubhambhatt037', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/shubham-bhatt-48b002250', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://twitter.com/bhattbuilds', icon: Twitter, label: 'Twitter' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/40 hover:text-primary transition-all duration-300"
                  aria-label={`${label} Profile`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} strokeWidth={1.5} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Profile Card */}
          <motion.div
            className="flex justify-center lg:justify-end mt-16 lg:mt-8"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={isLoaded ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <ProfileCard
              name="Shubham Bhatt"
              title="Full-Stack Developer"
              handle="shubham"
              status="Available"
              contactText="Get in Touch"
              avatarUrl="/assets/shubham-profile.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={onGetInTouch}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div className="flex flex-col items-center space-y-3">
          <span className="mono-label text-[0.6rem] text-muted-foreground/40">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/30 to-transparent relative">
            <motion.div
              className="w-1 h-1 bg-primary/60 rounded-full absolute left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
