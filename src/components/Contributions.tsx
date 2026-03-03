import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, GitFork, Star } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

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
      { icon: Star, label: "Stars", value: "897+" },
      { icon: Github, label: "Commits", value: "8" }
    ]
  };

  return (
    <section id="contributions" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="glow-orb glow-orb-2" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Open Source</span>
          <h2 className="section-title mb-4 gradient-text">
            Contributions
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Contributing to the open source community by enhancing tools and creating meaningful
            improvements that benefit developers worldwide.
          </p>
        </ScrollReveal>

        {/* Main Contribution Card */}
        <ScrollReveal className="max-w-4xl mx-auto" delay={0.1}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 250 }}
          >
            <Card className="project-card project-card-large">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-xl">
                      <Github className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                        {contribution.project}
                      </CardTitle>
                      <Badge className="mt-2 bg-primary/15 text-primary border border-primary/20 text-xs">
                        {contribution.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardDescription className="text-base text-muted-foreground/70 leading-relaxed">
                  {contribution.description}
                </CardDescription>

                <div className="mt-4 p-4 bg-primary/[0.04] rounded-lg border border-primary/10">
                  <p className="text-sm font-medium text-foreground">
                    <span className="text-primary" style={{ fontFamily: 'var(--font-mono)' }}>Impact:</span>{' '}
                    {contribution.impact}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-8">
                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Key Enhancements
                  </h4>
                  <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3" staggerDelay={0.05}>
                    {contribution.features.map((feature, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-start gap-3 p-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                          <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground/70">{feature}</span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Technologies Used
                  </h4>
                  <div className="tech-badges flex flex-wrap gap-2">
                    {contribution.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-sm bg-white/[0.03] border border-white/[0.06] text-muted-foreground/70 hover:bg-white/[0.06] transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Stats Grid */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                    Contribution Stats
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    {contribution.stats.map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <motion.div
                          key={index}
                          className="text-center p-4 bg-white/[0.02] rounded-lg border border-white/[0.04]"
                          whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.1)' }}
                        >
                          <IconComponent className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="stat-number text-xl mb-1">{stat.value}</div>
                          <div className="mono-label" style={{ fontSize: '0.6rem' }}>{stat.label}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1 border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.03] rounded-xl"
                    asChild
                  >
                    <a href="https://github.com/NiladriHazra/Open-Fiesta" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View Repository
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    className="flex-1 btn-send-glow rounded-xl"
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
          </motion.div>
        </ScrollReveal>

        {/* Call to Action */}
        <ScrollReveal className="text-center mt-20" delay={0.3}>
          <p className="text-muted-foreground/60 mb-6">
            Interested in collaborating on open source projects?
          </p>
          <Button
            size="lg"
            className="btn-outline-glow px-8 py-6 text-base font-medium tracking-wide rounded-full"
          >
            Let's Collaborate
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
