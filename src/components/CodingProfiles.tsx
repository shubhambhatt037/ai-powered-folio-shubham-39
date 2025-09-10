import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
export function CodingProfiles() {
  const profiles = [{
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
    stats: [{
      label: "Max Rating",
      value: "1433"
    }, {
      label: "Contests",
      value: "50+"
    }, {
      label: "Rank",
      value: "Specialist"
    }]
  }, {
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
    stats: [{
      label: "Problems Solved",
      value: "1000+"
    }, {
      label: "Contest Rating",
      value: "2026"
    }, {
      label: "Global Rank",
      value: "Top 3%"
    }]
  }, {
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
    stats: [{
      label: "Current Rating",
      value: "1854"
    }, {
      label: "Stars",
      value: "4 ⭐"
    }, {
      label: "Global Rank",
      value: "Top 15%"
    }]
  }];
  return <section id="coding-profiles" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="floating-dots-container">
        {[...Array(10)].map((_, i) => <div key={i} className="floating-dot" style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${20 + Math.random() * 15}s`
      }} />)}
      </div>
      
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>
      
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Competitive Programming</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Coding Profiles
          </h2>
          <p className="text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            My competitive programming journey across major platforms, showcasing algorithmic thinking
            and problem-solving skills through consistent practice and contests.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map(profile => {
          return <Card key={profile.id} className={`project-card h-full transition-all duration-300 ${profile.featured ? 'transform scale-105 ring-2 ring-primary/20 shadow-xl shadow-primary/10' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${profile.bgColor} rounded-xl`}>
                        <img src={profile.iconUrl} alt={`${profile.platform} icon`} className="w-6 h-6 object-contain" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-foreground">
                          {profile.platform}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground/70">
                          {profile.username}
                        </p>
                      </div>
                    </div>
                    
                    {profile.featured}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        {profile.level}
                      </Badge>
                      <Badge variant="secondary" className="text-xs bg-muted/50">
                        {profile.rating}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium text-foreground">
                      {profile.achievement}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-6">
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {profile.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-3">
                    {profile.stats.map((stat, index) => <div key={index} className="flex justify-between items-center py-2 px-3 bg-muted/20 rounded-lg">
                        <span className="text-xs text-muted-foreground/70">{stat.label}</span>
                        <span className="text-sm font-semibold text-foreground">{stat.value}</span>
                      </div>)}
                  </div>

                  {/* Profile Link */}
                  <Button size="sm" className="w-full bg-foreground/95 hover:bg-foreground text-background" asChild>
                    <a href={profile.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>;
        })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-muted-foreground/80 mb-6">
            Want to connect and discuss algorithms or competitive programming?
          </p>
          <Button size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full shadow-xl hover:shadow-2xl" asChild>
            <a href="#contact">
              Let's Connect
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>;
}