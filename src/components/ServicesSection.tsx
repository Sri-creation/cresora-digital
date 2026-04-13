import { motion } from "framer-motion";
import { Globe, Layout, ShoppingCart, Palette, RefreshCw } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built, responsive websites tailored to your brand and business goals." },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting landing pages designed to capture leads and drive action." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Full-featured online stores with seamless checkout and inventory management." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces that delight users and enhance engagement." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your existing website with a fresh, contemporary look and feel." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What We <span className="glow-text">Offer</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            End-to-end digital solutions to take your business to the next level.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card-hover p-8 group"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <s.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
