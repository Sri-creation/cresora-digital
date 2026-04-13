import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-glass-border py-12 px-6">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-lg font-bold tracking-tight">
            <span className="glow-text">CRESORA</span>{" "}
            <span className="text-foreground">DIGITAL</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
