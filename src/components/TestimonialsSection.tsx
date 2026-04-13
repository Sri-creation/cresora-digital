import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, BrightPath", text: "CRESORA DIGITAL transformed our online presence completely. The website they built exceeded our expectations — modern, fast, and beautifully designed." },
  { name: "James Carter", role: "Founder, NovaTech", text: "Incredible work ethic and attention to detail. They delivered our e-commerce platform ahead of schedule and it's been driving sales since day one." },
  { name: "Emily Rodriguez", role: "Marketing Director, Zenith", text: "Working with CRESORA was seamless. They understood our vision perfectly and created a stunning landing page that converts like crazy." },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-40 px-6">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-glow-secondary/8 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Testimonials</p>
          <div className="premium-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
            What Clients <span className="glow-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="glass-card-hover p-9 flex flex-col"
            >
              <Quote size={18} className="text-primary/30 mb-5" strokeWidth={1.5} />
              <p className="text-sm text-muted-foreground leading-[1.8] mb-8 flex-1 font-light">{t.text}</p>
              <div className="border-t border-glass-border pt-5">
                <p className="text-sm font-semibold tracking-tight">{t.name}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
