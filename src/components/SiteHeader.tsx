import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ArrowUpSquare, Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_DISPLAY, WA } from "@/lib/contact";

const links = [
  { to: "/#hero", label: "Home" },
  { to: "/#services", label: "Services" },
  { to: "/#why", label: "About" },
  { to: "/#faq", label: "FAQ" },
  { to: "/#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
            <ArrowUpSquare className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-extrabold sm:text-lg">Universal Elevators</span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:block">Bangalore · Since 2018</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE}`}
            className="hidden items-center gap-1.5 text-sm font-semibold text-foreground lg:inline-flex"
          >
            <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
          </a>
          <a
            href={WA.quote}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-[1.04]"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" /> Get Free Quote
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background md:hidden">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
