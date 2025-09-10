
import { GraduationCap, Code, Brain, Coffee, Award, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="about" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From photography to code, driven by the passion to create and innovate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Bio */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                I started my software journey from photography. Through that, I learned to 
                love the process of creating things from scratch.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since then, I've been passionate about software development as it fulfills 
                my love for learning and building things that matter.
              </p>
            </div>
            
            {/* Education */}
            <div className="modern-card trait-card group">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">Education</h3>
                  <h4 className="font-medium text-foreground mb-1">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-muted-foreground text-sm">Building a strong foundation in computer science fundamentals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="modern-card trait-card group">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="modern-card trait-card text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
