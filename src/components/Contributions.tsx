import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, GitFork, Star } from 'lucide-react';

export function Contributions() {
  const contribution = {
    id: 1,
    project: "Open Fiesta",
    type: "Major Feature Enhancement",
    description: "Enhanced a conversation-sharing tool by adding URL-safe encoded links, smart truncation of turns, privacy protection, a grid-based multi-model comparison layout, robust error handling, and full accessibility with ARIA labels.",
    impact: "Improved user experience for 1000+ active users",
    technologies: ["React", "TypeScript", "Accessibility", "URL Encoding", "Grid Layout"],
    features: [
      "URL-safe encoded links for secure sharing",
      "Smart conversation truncation algorithm",
      "Privacy protection with data anonymization",
      "Grid-based multi-model comparison layout",
      "Comprehensive error handling system",
      "Full ARIA label accessibility compliance"
    ],
    github: "https://github.com/shubhambhatt/open-fiesta",
    stats: [
      { icon: GitFork, label: "Contributions", value: "12+" },
      { icon: Star, label: "Stars on Repository", value: "897+" },
      { icon: Github, label: "Commits", value: "8" }
    ]
  };

  return (
    <section id="contributions" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-dots-container">
        {[...Array(8)].map((_, i) => (
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
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Open Source</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Open Source Contributions
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Contributing to the open source community by enhancing tools and creating meaningful 
            improvements that benefit developers worldwide.
          </p>
        </div>

        {/* Main Contribution Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="project-card project-card-large">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-xl">
                    <Github className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {contribution.project}
                    </CardTitle>
                    <Badge className="mt-2 bg-accent/90 text-accent-foreground">
                      {contribution.type}
                    </Badge>
                  </div>
                </div>
              </div>
              
              <CardDescription className="text-base text-muted-foreground/80 leading-relaxed">
                {contribution.description}
              </CardDescription>
              
              <div className="mt-4 p-4 bg-muted/20 rounded-lg">
                <p className="text-sm font-medium text-foreground">
                  <span className="text-accent">Impact:</span> {contribution.impact}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Key Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Enhancements</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {contribution.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-muted/10 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Technologies Used</h4>
                <div className="tech-badges flex flex-wrap gap-2">
                  {contribution.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm bg-muted/50 hover:bg-muted/70 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats Grid */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Contribution Stats</h4>
                <div className="grid grid-cols-3 gap-4">
                  {contribution.stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="text-center p-4 bg-muted/20 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground/70">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 border-muted-foreground/20 hover:border-muted-foreground/40 hover:bg-muted/30"
                  asChild
                >
                  <a href="https://github.com/NiladriHazra/Open-Fiesta" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 mr-2" />
                    View Repository
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="flex-1 bg-primary/90 hover:bg-primary text-primary-foreground"
                  asChild
                >
                  <a href="https://github.com/NiladriHazra/Open-Fiesta/pull/55" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    See Contributions
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground/80 mb-6">
            Interested in collaborating on open source projects?
          </p>
          <Button 
            size="lg"
            className="bg-foreground/95 hover:bg-foreground text-background px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full shadow-xl hover:shadow-2xl"
          >
            Let's Collaborate
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}