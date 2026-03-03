
import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);

    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "shubhambhatt037@gmail.com",
      link: "mailto:shubhambhatt037@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: MessageSquare,
      title: "Twitter",
      value: "@bhattbuilds",
      link: "https://twitter.com/bhattbuilds",
      description: "Let's connect and chat"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote Work",
      link: null,
      description: "Available worldwide"
    }
  ];

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="glow-orb glow-orb-1" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">Get in Touch</span>
          <h2 className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Whether it's a web application, AI integration, or just a chat about technology, I'd love to hear from you.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <ScrollReveal direction="left" delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>Get in Touch</h3>
                <p className="text-muted-foreground/60 mb-8">
                  Ready to bring your ideas to life? Let's discuss how we can work together.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact Methods */}
            <StaggerContainer className="space-y-5" delay={0.2}>
              {contactInfo.map((info, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="modern-card contact-card group"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/15 transition-colors duration-300">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300" style={{ fontFamily: 'var(--font-display)' }}>
                          {info.title}
                        </h4>
                        <p className="text-sm text-muted-foreground/50 mb-1">{info.description}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium text-sm"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Availability Status */}
            <ScrollReveal delay={0.4}>
              <div className="modern-card contact-card neon-border bg-primary/[0.02]">
                <div className="flex items-center space-x-3">
                  <div className="status-dot" />
                  <div>
                    <h4 className="font-semibold text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Available for Work</h4>
                    <p className="text-sm text-muted-foreground/50">
                      Currently accepting new projects and opportunities
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <ScrollReveal className="lg:col-span-3" direction="right" delay={0.2}>
            <div className="modern-card contact-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground/80 mono-label" style={{ fontSize: '0.7rem' }}>
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/40 pointer-events-none z-10" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="pl-10 h-12 bg-white/[0.02] border-white/[0.06] rounded-xl focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 cursor-text"
                        style={{ pointerEvents: 'auto' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground/80 mono-label" style={{ fontSize: '0.7rem' }}>
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground/40 pointer-events-none z-10" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="pl-10 h-12 bg-white/[0.02] border-white/[0.06] rounded-xl focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200 cursor-text"
                        style={{ pointerEvents: 'auto' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground/80 mono-label" style={{ fontSize: '0.7rem' }}>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={6}
                    className="flex min-h-[80px] w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-3 text-sm ring-offset-background placeholder:text-muted-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/10 focus-visible:border-primary/40 disabled:cursor-not-allowed disabled:opacity-50 resize-none cursor-text transition-all duration-200"
                    style={{
                      pointerEvents: 'auto',
                      zIndex: 1,
                      position: 'relative'
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-send-glow w-full h-12 rounded-xl group font-medium"
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span>Send Message</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
