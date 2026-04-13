import { motion } from "framer-motion";
import { Globe, Layout, ShoppingCart, Palette, RefreshCw } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom-built, responsive websites tailored to your brand identity and goals." },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting landing pages engineered to capture leads and drive action." },
  { icon: ShoppingCart, title: "E-commerce Development", desc: "Full-featured online stores with seamless checkout experiences." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive interfaces that delight users and enhance engagement." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize your digital presence with a fresh, contemporary aesthetic." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-40 px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Our Services</p>
          <div className="premium-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            What We <span className="glow-text">Offer</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground font-light">
            End-to-end digital solutions crafted with precision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="glass-card-hover p-9 group"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 border border-primary/10 group-hover:bg-primary/15 transition-colors duration-400">
                <s.icon size={20} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold mb-3 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
