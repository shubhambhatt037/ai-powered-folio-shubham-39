import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Sparkles, Mic, Brain, Search, MessageSquare, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';
import { motion } from 'framer-motion';

interface ProductFeature {
  icon: React.ElementType;
  label: string;
}

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  url: string;
  tags: string[];
  features: ProductFeature[];
  status: 'live' | 'beta' | 'coming-soon';
  featured?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Scryb",
    tagline: "Your AI Note Assistant",
    description:
      "AI-powered note-taking that auto-categorizes, transcribes voice, surfaces related content, and lets you chat with your knowledge base. Capture instantly, find effortlessly.",
    url: "https://scryb.space",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "OpenAI", "Prisma", "Tailwind CSS", "Stripe"],
    features: [
      { icon: Zap, label: "Quick Capture" },
      { icon: Mic, label: "Voice Transcription" },
      { icon: Brain, label: "AI Auto-Categorize" },
      { icon: Search, label: "Semantic Search" },
      { icon: MessageSquare, label: "Chat with Notes" },
      { icon: Sparkles, label: "Related Notes" },
    ],
    status: 'live',
    featured: true,
  },
];

function StatusBadge({ status }: { status: Product['status'] }) {
  const config = {
    live: { label: 'Live', dotClass: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]', badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
    beta: { label: 'Beta', dotClass: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]', badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
    'coming-soon': { label: 'Coming Soon', dotClass: 'bg-zinc-400', badgeClass: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' },
  };
  const { label, dotClass, badgeClass } = config[status];

  return (
    <Badge className={`${badgeClass} border text-[0.65rem] gap-1.5`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass} ${status === 'live' ? 'animate-pulse' : ''}`} />
      {label}
    </Badge>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      className={`project-card group relative ${
        product.featured ? 'ring-1 ring-primary/15 shadow-[0_0_40px_hsl(185_100%_55%/0.06)]' : ''
      }`}
    >
      {/* Featured glow accent */}
      {product.featured && (
        <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      )}

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h3
                className="text-2xl font-bold text-foreground tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {product.name}
              </h3>
              <StatusBadge status={product.status} />
            </div>
            <p
              className="text-primary/80 text-sm font-medium"
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}
            >
              {product.tagline}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground/70 leading-relaxed text-[0.95rem]">
          {product.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-muted-foreground/70 text-xs transition-colors hover:bg-white/[0.06] hover:text-foreground/80"
            >
              <feature.icon className="w-3 h-3 text-primary/70" />
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div className="tech-badges flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs bg-white/[0.03] border border-white/[0.06] text-muted-foreground/60 hover:bg-white/[0.06] transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action */}
        <div className="pt-2">
          <Button
            size="sm"
            className="w-full btn-send-glow rounded-xl group/btn"
            asChild
          >
            <a href={product.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit {product.name}
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-32 bg-background relative overflow-hidden">
      <div className="section-divider mb-32" />

      <div className="glow-orb glow-orb-1" />
      <div className="glow-orb glow-orb-4" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-20">
          <span className="section-label block mb-4">What I've Built</span>
          <h2 className="section-title mb-4 gradient-text">
            Products
          </h2>
          <p className="text-lg text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed">
            SaaS products I've designed, developed, and shipped — solving real problems
            with modern tech stacks and AI integration.
          </p>
        </ScrollReveal>

        {/* Products grid — single column for 1-2, two columns for 3+ */}
        <StaggerContainer
          className={`grid gap-8 ${
            products.length === 1
              ? 'max-w-2xl mx-auto'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}
          staggerDelay={0.2}
        >
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
