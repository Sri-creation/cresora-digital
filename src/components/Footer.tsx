import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-16 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <span className="text-lg font-display font-bold tracking-tight">
            <span className="glow-text">CRESORA</span>{" "}
            <span className="text-foreground font-light">DIGITAL</span>
          </span>
          <p className="text-[11px] text-muted-foreground mt-1.5 tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
