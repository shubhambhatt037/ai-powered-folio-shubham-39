import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

export function CodingProfiles() {
  const profiles = [
    {
      id: 1,
      platform: "Codeforces",
      username: "@shubhambhatt037",
      level: "Specialist Level",
      rating: "1433 Rating",
      achievement: "Consistent Specialist",
      description: "Competitive programming with strong performance in algorithmic contests and mathematics.",
      link: "https://codeforces.com/profile/shubhambhatt037",
      iconUrl: "/assets/codeforces.png",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      featured: false,
      stats: [
        { label: "Max Rating", value: "1433" },
        { label: "Contests", value: "50+" },
        { label: "Rank", value: "Specialist" }
      ]
    },
    {
      id: 2,
      platform: "LeetCode",
      username: "@shubhambhatt037",
      level: "Knight Level",
      rating: "2026 Rating",
      achievement: "1000+ Problems Solved",
      description: "Consistent problem solving with focus on algorithmic optimization and system design patterns.",
      link: "https://leetcode.com/shubhambhatt037",
      iconUrl: "/assets/leetcode.png",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      featured: true,
      stats: [
        { label: "Problems Solved", value: "1000+" },
        { label: "Contest Rating", value: "2026" },
        { label: "Global Rank", value: "Top 3%" }
      ]
    },
    {
      id: 3,
      platform: "CodeChef",
      username: "@kindle_beam_34",
      level: "4 Star",
      rating: "1854 Rating",
      achievement: "4 Star Coder",
      description: "Regular participation in monthly challenges with consistent performance in long contests.",
      link: "https://www.codechef.com/users/kindle_beam_34",
      iconUrl: "/assets/codechef.png",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      featured: false,
      stats: [
        { label: "Current Rating", value: "1854" },
        { label: "Stars", value: "4" },
        { label: "Global Rank", value: "Top 15%" }
      ]
    }
  ];

  return (
    <section id="coding-profiles" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="glow-orb glow-orb-3" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Competitive Programming</span>
          <h2 className="section-title mb-4 gradient-text">
            Coding Profiles
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            My competitive programming journey across major platforms, showcasing algorithmic thinking
            and problem-solving skills through consistent practice and contests.
          </p>
        </ScrollReveal>

        {/* Profiles Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {profiles.map((profile) => (
            <StaggerItem key={profile.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className={`project-card h-full ${
                  profile.featured ? 'ring-1 ring-primary/20 shadow-[0_0_30px_hsl(185_100%_55%/0.08)]' : ''
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 ${profile.bgColor} rounded-xl`}>
                          <img src={profile.iconUrl} alt={`${profile.platform} icon`} className="w-6 h-6 object-contain" />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                            {profile.platform}
                          </CardTitle>
                          <p className="text-sm text-muted-foreground/50 mono-label" style={{ fontSize: '0.7rem' }}>
                            {profile.username}
                          </p>
                        </div>
                      </div>

                      {profile.featured && (
                        <Badge className="bg-primary/15 text-primary border border-primary/20 text-[0.65rem]">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs bg-white/[0.03] border border-white/[0.06]">
                          {profile.level}
                        </Badge>
                        <Badge variant="secondary" className="text-xs bg-white/[0.03] border border-white/[0.06]">
                          {profile.rating}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-foreground" style={{ fontFamily: 'var(--font-display)' }}>
                        {profile.achievement}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-6">
                    <p className="text-sm text-muted-foreground/60 leading-relaxed">
                      {profile.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-1 gap-2">
                      {profile.stats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center py-2 px-3 bg-white/[0.02] rounded-lg border border-white/[0.04]">
                          <span className="mono-label" style={{ fontSize: '0.65rem' }}>{stat.label}</span>
                          <span className="stat-number text-sm">{stat.value}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="sm" className="w-full btn-primary-glow rounded-xl" asChild>
                      <a href={profile.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 relative z-10" />
                        <span className="relative z-10">View Profile</span>
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Call to Action */}
        <ScrollReveal className="text-center mt-20" delay={0.3}>
          <p className="text-muted-foreground/60 mb-6">
            Want to connect and discuss algorithms or competitive programming?
          </p>
          <Button size="lg" className="btn-outline-glow px-8 py-6 text-base font-medium tracking-wide rounded-full" asChild>
            <a href="#contact">
              Let's Connect
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
