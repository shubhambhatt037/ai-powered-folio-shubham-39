
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "ConnectSphere",
      subtitle: "Real-time Communication Platform",
      description: "Full-stack communication app with real-time chat, channels, and voice/video calls powered by WebRTC and WebSockets.",
      image: "/assets/connectsphere.png",
      tags: ["React.js", "Node.js", "Express.js", "WebSockets", "WebRTC", "MongoDB"],
      github: "https://github.com/shubhambhatt037/discord-clone",
      live: "https://connectsphere-landing-page.vercel.app/",
      featured: true,
      size: "large"
    },
    {
      id: 2,
      title: "StreakFlow",
      subtitle: "Coding Streak Tracker",
      description: "Interactive dashboard that tracks coding streaks, visualizes heatmaps, and delivers insights to keep developers consistent and motivated.",
      image: "/assets/streakflow.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "D3.js", "Chart.js"],
      github: "https://github.com/shubhambhatt037/streak-zen-dashboard",
      live: "https://streakflow-landing-page.onrender.com/",
      featured: true,
      size: "large"
    }
  ];

  return (
    <section id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-4" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Featured Work</span>
          <h2 className="section-title mb-4 gradient-text">
            Portfolio
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in modern web development,
            AI integration, and full-stack solutions.
          </p>
        </ScrollReveal>

        {/* Projects Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.2}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              >
                <Card className="project-card project-card-large h-full group">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm text-[0.65rem]">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                      {project.title}
                      <span className="text-muted-foreground/50 font-normal text-sm ml-2">
                        {project.subtitle}
                      </span>
                    </CardTitle>
                    <CardDescription className="text-muted-foreground/60 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-5">
                    <div className="tech-badges flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-white/[0.03] border border-white/[0.06] text-muted-foreground/70 hover:bg-white/[0.06] transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] rounded-xl"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      {project.live && (
                        <Button
                          size="sm"
                          className="flex-1 btn-send-glow rounded-xl"
                          asChild
                        >
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal className="text-center mt-20" delay={0.3}>
          <p className="text-muted-foreground/60 mb-6">
            Interested in working together or want to see more projects?
          </p>
          <Button
            size="lg"
            className="btn-primary-glow px-8 py-6 text-base font-medium tracking-wide rounded-full"
            asChild
          >
            <a href="#contact">
              <span className="relative z-10">Get in Touch</span>
              <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
