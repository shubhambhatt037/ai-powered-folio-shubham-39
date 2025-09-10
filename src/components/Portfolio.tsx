
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "ConnectSphere – Real-time Communication Platform",
      description: "Full-stack communication app with real-time chat, channels, and voice/video calls powered by WebRTC and WebSockets.",
      image: "/lovable-uploads/8ae7797e-c853-4834-8a02-9271c83471bf.png",
      tags: ["React.js", "Node.js", "Express.js", "WebSockets", "WebRTC", "MongoDB"],
      github: "https://github.com/shubhambhatt037/discord-clone",
      live: "https://connectsphere-landing-page.vercel.app/",
      featured: true,
      size: "large"
    },
    {
      id: 2,
      title: "StreakFlow – Coding Streak Tracker",
      description: "Interactive dashboard that tracks coding streaks, visualizes heatmaps, and delivers insights to keep developers consistent and motivated.",
      image: "/lovable-uploads/7051e00d-1233-4368-96b2-d336047ccc8b.png",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "D3.js", "Chart.js"],
      github: "https://github.com/shubhambhatt037/streak-zen-dashboard",
      live: "https://streakflow-landing-page.onrender.com/",
      featured: true,
      size: "large"
    }
  ];

  const getGridClass = (size: string) => {
    switch (size) {
      case 'large': return 'md:col-span-2 md:row-span-2';
      case 'medium': return 'md:col-span-2 md:row-span-1';
      case 'small': return 'md:col-span-1 md:row-span-1';
      default: return 'md:col-span-1 md:row-span-1';
    }
  };

  const getCardClass = (size: string) => {
    switch (size) {
      case 'large': return 'project-card project-card-large h-full min-h-[400px]';
      case 'medium': return 'project-card project-card-medium h-full min-h-[280px]';
      case 'small': return 'project-card h-full min-h-[240px]';
      default: return 'project-card h-full';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-dots-container">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="floating-dot"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 15}s`,
            }}
          />
        ))}
      </div>
      
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Featured Work</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
          <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A collection of projects showcasing my expertise in modern web development, 
            AI integration, and full-stack solutions.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-min">
          {projects.map((project) => (
            <div key={project.id} className={getGridClass(project.size)}>
              <Card className={getCardClass(project.size)}>
                <div className="relative h-48 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-primary-foreground pulse-glow-purple">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground/80 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 space-y-6">
                  {/* Tech Stack */}
                  <div className="tech-badges flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/30"
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
                        className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground"
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
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground/80 mb-6">
            Interested in working together or want to see more projects?
          </p>
          <Button 
            size="lg"
            className="bg-foreground/95 hover:bg-foreground text-background px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full shadow-xl hover:shadow-2xl"
            asChild
          >
            <a href="#contact">
              Get in Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
