import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Calendar } from 'lucide-react';

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
    <section id="experience" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-dots-container">
        {[...Array(12)].map((_, i) => (
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
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Professional Journey</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            My professional experience spans fintech development and technical content creation,
            delivering impactful solutions and knowledge sharing.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience) => (
            <Card key={experience.id} className="project-card h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-foreground">
                        {experience.company}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs bg-muted/50">
                          {experience.role}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground/80 mb-4">
                  <Calendar className="w-4 h-4" />
                  {experience.period}
                </div>
                
                <CardDescription className="text-muted-foreground/80 leading-relaxed">
                  {experience.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-6">
                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="tech-badges flex flex-wrap gap-2 pt-2">
                  {experience.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}