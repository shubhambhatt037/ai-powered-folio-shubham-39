import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

export function Experience() {
  const experiences = [
    {
      id: 1,
      company: "Bluestock Fintech",
      role: "SDE Intern",
      period: "October 2024 - May 2025",
      description: "Built and deployed REST APIs using Django + PostgreSQL, integrated JWT authentication, and led a 6-member team to deliver scalable financial technology solutions.",
      achievements: [
        "Designed & implemented RESTful APIs with Django",
        "Integrated JWT authentication & authorization",
        "Led team of 6 developers on core features",
        "Optimized PostgreSQL database queries"
      ],
      tags: ["Django", "PostgreSQL", "JWT", "REST APIs", "Team Leadership"]
    },
    {
      id: 2,
      company: "Learnyard Technologies",
      role: "DSA Content Writer",
      period: "Mar 2024 - May 2024",
      description: "Authored comprehensive technical content on Data Structures and Algorithms, simplifying complex programming concepts for 10k+ readers across multiple learning platforms.",
      achievements: [
        "Created 50+ detailed DSA tutorials",
        "Simplified complex algorithms for beginners",
        "Reached 10,000+ active readers",
        "Improved content engagement by 40%"
      ],
      tags: ["Technical Writing", "Data Structures", "Algorithms", "Content Creation", "Education"]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      {/* Subtle background elements */}
      <div className="glow-orb glow-orb-2" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Professional Journey</span>
          <h2 className="section-title mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            My professional experience spans fintech development and technical content creation,
            delivering impactful solutions and knowledge sharing.
          </p>
        </ScrollReveal>

        {/* Experience Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8" staggerDelay={0.2}>
          {experiences.map((experience) => (
            <StaggerItem key={experience.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="project-card h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Building2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            {experience.company}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-primary/20">
                              {experience.role}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground/60 mb-4 mono-label" style={{ fontSize: '0.75rem' }}>
                      <Calendar className="w-3.5 h-3.5" />
                      {experience.period}
                    </div>

                    <CardDescription className="text-muted-foreground/70 leading-relaxed">
                      {experience.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-display)' }}>Key Achievements</h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground/70">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="tech-badges flex flex-wrap gap-2 pt-2">
                      {experience.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-white/[0.03] border border-white/[0.06] text-muted-foreground/80 hover:bg-white/[0.06] transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
