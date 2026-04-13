import { motion } from "framer-motion";
import { Shield, Zap, Target } from "lucide-react";

const values = [
  { icon: Shield, title: "Trust & Reliability", desc: "We deliver on our promises, every single time." },
  { icon: Zap, title: "Fast Delivery", desc: "Quick turnarounds without compromising quality." },
  { icon: Target, title: "Results-Driven", desc: "Every pixel is designed to convert visitors into customers." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Crafting Digital Excellence
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            CRESORA DIGITAL is a modern digital agency focused on delivering affordable, high-quality websites
            and digital experiences. We combine cutting-edge design with clean code to create solutions that
            truly work for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-8 text-center"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <item.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
