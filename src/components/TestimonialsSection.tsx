import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, BrightPath", text: "CRESORA DIGITAL transformed our online presence completely. The website they built exceeded our expectations — modern, fast, and beautifully designed." },
  { name: "James Carter", role: "Founder, NovaTech", text: "Incredible work ethic and attention to detail. They delivered our e-commerce platform ahead of schedule and it's been driving sales since day one." },
  { name: "Emily Rodriguez", role: "Marketing Director, Zenith", text: "Working with CRESORA was seamless. They understood our vision perfectly and created a stunning landing page that converts like crazy." },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 px-6">
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-glow-secondary/10 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            What Clients <span className="glow-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-8"
            >
              <Quote size={20} className="text-primary/40 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>
              <div>
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
