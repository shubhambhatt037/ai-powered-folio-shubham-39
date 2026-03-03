
import { GraduationCap, Code, Brain, Coffee, Award, Target } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Problem Solver",
      description: "Passionate about turning complex challenges into elegant solutions"
    },
    {
      icon: Brain,
      title: "AI Enthusiast",
      description: "Exploring the intersection of artificial intelligence and web development"
    },
    {
      icon: Coffee,
      title: "Continuous Learner",
      description: "Always eager to learn new technologies and improve my craft"
    }
  ];

  const stats = [
    { value: "3+", label: "Years Experience", icon: Award },
    { value: "15+", label: "Projects Completed", icon: Target },
    { value: "100%", label: "Client Satisfaction", icon: Coffee }
  ];

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      {/* Subtle section divider at top */}
      <div className="section-divider mb-32" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Who I Am</span>
          <h2 className="section-title mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed">
            From photography to code, driven by the passion to create and innovate
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left side - Bio */}
          <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-foreground/85 leading-relaxed">
                  I started my software journey from photography. Through that, I learned to
                  love the process of creating things from scratch.
                </p>

                <p className="text-lg text-muted-foreground/70 leading-relaxed">
                  Since then, I've been passionate about software development as it fulfills
                  my love for learning and building things that matter.
                </p>
              </div>

              {/* Education */}
              <div className="modern-card trait-card group">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/15 transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                      Education
                    </h3>
                    <h4 className="font-medium text-foreground mb-1">B.Tech in Computer Science and Engineering</h4>
                    <p className="text-muted-foreground/60 text-sm">Building a strong foundation in computer science fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side - Highlights */}
          <StaggerContainer className="space-y-5" delay={0.2}>
            {highlights.map((highlight, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="modern-card trait-card group"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/15 transition-colors duration-300">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                        {highlight.title}
                      </h3>
                      <p className="text-muted-foreground/60 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Stats Section */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {stats.map((stat, index) => (
            <StaggerItem key={index}>
              <motion.div
                className="modern-card trait-card text-center group"
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/15 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="stat-number text-4xl mb-2">
                  {stat.value}
                </div>
                <div className="mono-label">{stat.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
