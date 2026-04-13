import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@cresoradigital.com?subject=Project Inquiry from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.name} (${form.email})`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="relative py-40 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[180px]" />

      <div className="relative mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Contact</p>
          <div className="premium-divider mb-8" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Let's Build Your <span className="glow-text">Project</span>
          </h2>
          <p className="text-muted-foreground font-light">
            Ready to bring your vision to life? Drop us a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="glass-card p-10 sm:p-12 space-y-7"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium tracking-wide mb-2.5 text-muted-foreground uppercase">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/30 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs font-medium tracking-wide mb-2.5 text-muted-foreground uppercase">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/30 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium tracking-wide mb-2.5 text-muted-foreground uppercase">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-glass-border bg-glass px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-md focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/30 transition-all duration-300 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <Button variant="glow" size="lg" className="w-full">
            <Send size={16} /> Send Message
          </Button>

          <div className="flex items-center justify-center gap-8 pt-4 text-xs text-muted-foreground">
            <a href="mailto:hello@cresoradigital.com" className="flex items-center gap-2 hover:text-foreground transition-colors duration-300">
              <Mail size={14} /> hello@cresoradigital.com
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors duration-300">
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
