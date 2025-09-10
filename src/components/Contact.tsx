
import { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

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
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thanks for reaching out. I'll get back to you soon."
    });

    // Reset form
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
    <section id="contact" className="py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Whether it's a web application, AI integration, or just a chat about technology, I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Ready to bring your ideas to life? Let's discuss how we can work together.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="modern-card contact-card group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-1">{info.description}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="modern-card contact-card bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-foreground">Available for Work</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently accepting new projects and opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="modern-card contact-card">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground/90">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="pl-10 h-12 bg-background border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-text"
                        style={{ pointerEvents: 'auto' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground/90">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="pl-10 h-12 bg-background border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 cursor-text"
                        style={{ pointerEvents: 'auto' }}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground/90">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello! I'd love to hear from you."
                    rows={6}
                    className="flex min-h-[80px] w-full rounded-xl border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none cursor-text"
                    style={{ 
                      pointerEvents: 'auto',
                      zIndex: 1,
                      position: 'relative'
                    }}
                  />
                </div>
                
                <Button
                  type="submit"
                  className="btn-send-glow w-full h-12 text-primary-foreground rounded-xl group"
                >
                  <Send className="h-4 w-4 mr-2" />
                  <span>Send Message</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
