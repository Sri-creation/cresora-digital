import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust & Reliability", desc: "We deliver on our promises with unwavering consistency." },
  { icon: Zap, title: "Fast Delivery", desc: "Rapid turnarounds without compromising on quality." },
  { icon: Target, title: "Results-Driven", desc: "Every decision is designed to maximize conversions." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-40 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">About Us</p>
          <div className="premium-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-8">
            Crafting Digital Excellence
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed font-light">
            CRESORA DIGITAL is a modern studio focused on delivering premium websites
            and digital experiences. We combine cutting-edge design with clean engineering
            to create solutions that elevate your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="glass-card-hover p-10 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 border border-primary/10">
                <item.icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 tracking-tight">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
