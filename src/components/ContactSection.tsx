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
    <section id="contact" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's Build Your <span className="glow-text">Project</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to bring your vision to life? Drop us a message.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="glass-card p-8 sm:p-10 space-y-6"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-glass-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-glass-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg border border-glass-border bg-glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              placeholder="Tell us about your project..."
            />
          </div>
          <Button variant="glow" size="lg" className="w-full">
            <Send size={18} /> Send Message
          </Button>

          <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
            <a href="mailto:hello@cresoradigital.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} /> hello@cresoradigital.com
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
