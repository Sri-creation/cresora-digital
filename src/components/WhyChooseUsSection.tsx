import { motion } from "framer-motion";
import { DollarSign, Clock, Gem, Heart } from "lucide-react";

const reasons = [
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality at prices that work for growing businesses." },
  { icon: Clock, title: "Fast Delivery", desc: "We respect deadlines and deliver on time, every time." },
  { icon: Gem, title: "Modern Design", desc: "Cutting-edge aesthetics that make your brand stand out." },
  { icon: Heart, title: "Client Satisfaction", desc: "Your success is our success — we go above and beyond." },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-40 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Why Us</p>
          <div className="premium-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            Why Choose <span className="glow-text">CRESORA</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="glass-card-hover p-9 text-center"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 border border-primary/10">
                <r.icon size={22} className="text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-sm font-semibold mb-3 tracking-tight">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
