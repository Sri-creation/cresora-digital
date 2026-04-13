import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TechVault SaaS",
    desc: "A modern SaaS dashboard with analytics, user management, and billing integration.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    title: "ShopFlow E-commerce",
    desc: "Full-stack e-commerce platform with cart, checkout, and payment processing.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
  },
  {
    title: "Artisan Portfolio",
    desc: "Minimal portfolio website for a creative agency with smooth animations.",
    tags: ["React", "Framer Motion", "CSS"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    title: "HealthHub App",
    desc: "Health tracking landing page with appointment booking and patient portal.",
    tags: ["TypeScript", "Tailwind", "Supabase"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Featured <span className="glow-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A selection of projects we've crafted for our clients.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <ExternalLink size={14} /> Live Demo
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github size={14} /> View Code
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
