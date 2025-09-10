import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold gradient-text">Shubham Bhatt</div>
            <p className="text-muted-foreground text-sm">Full-Stack Developer exploring AI + Web</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/shubhambhatt037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/shubham-bhatt-48b002250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/bhattbuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {currentYear} Shubham Bhatt. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}