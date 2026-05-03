import { Link } from "@tanstack/react-router";
import { ArrowUpSquare, Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS_FULL, HOURS_LINES, WA } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
              <ArrowUpSquare className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold">Universal Elevators</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-surface-foreground/60">Bangalore · Since 2018</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-surface-foreground/70">
            Premium elevator installation, repair and AMC services across Bangalore.
            Residential, passenger and goods lifts — engineered to lift, built to last.
          </p>
          <a
            href={WA.quote}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-glow"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-foreground/60">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary-glow">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary-glow">About</Link></li>
            <li><Link to="/faq" className="hover:text-primary-glow">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-surface-foreground/60">Get in touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0" /> <a href={`tel:${PHONE}`} className="hover:text-primary-glow">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0" /> <a href={`mailto:${EMAIL}`} className="hover:text-primary-glow break-all">{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> <span>{ADDRESS_FULL}</span></li>
            <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0" /> <span>{HOURS_LINES.join(" · ")}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-surface-foreground/60 md:flex-row">
          <span>© {new Date().getFullYear()} Universal Elevators. All rights reserved.</span>
          <span>IS 14665 compliant · 8+ years · 4.8★ rated</span>
        </div>
      </div>
    </footer>
  );
}
