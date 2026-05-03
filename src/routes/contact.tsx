import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import { PHONE, PHONE_DISPLAY, EMAIL, ADDRESS_FULL, HOURS_LINES, WA } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Universal Elevators — WhatsApp, Call, Visit | Bangalore" },
      { name: "description", content: "Contact Universal Elevators in Marathahalli, Bangalore. WhatsApp 097258 53272 for the fastest response on elevator installation, repair and AMC." },
      { property: "og:title", content: "Contact Universal Elevators Bangalore" },
      { property: "og:description", content: "WhatsApp, call or visit Universal Elevators in Marathahalli, Bangalore." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const blocks = [
    {
      icon: MessageCircle,
      label: "WhatsApp (fastest)",
      value: PHONE_DISPLAY,
      sub: "Tap to chat — usually a reply within the hour.",
      href: WA.general,
      external: true,
      accent: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: PHONE_DISPLAY,
      sub: "Mon – Sat, 9:00 AM – 5:30 PM",
      href: `tel:${PHONE}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: EMAIL,
      sub: "We reply within one working day.",
      href: `mailto:${EMAIL}`,
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Marathahalli, Bangalore",
      sub: ADDRESS_FULL,
    },
    {
      icon: Clock,
      label: "Business hours",
      value: HOURS_LINES[0],
      sub: HOURS_LINES.slice(1).join(" · "),
    },
  ];

  return (
    <>
      <section className="bg-gradient-hero px-6 py-24 text-surface-foreground md:py-28">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">Let's talk elevators.</h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/85">
            Contact us directly on WhatsApp for the fastest response. Or call our Marathahalli
            office during business hours — a senior engineer will help you straight away.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WA.quote}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-105"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp for a Free Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary/5 hover:scale-105">
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {blocks.map(({ icon: Icon, label, value, sub, href, external, accent }) => {
            const inner = (
              <div className={`flex h-full items-start gap-4 rounded-2xl border bg-card p-6 shadow-card-soft transition-smooth ${href ? "hover:-translate-y-1 hover:shadow-elevated" : ""} ${accent ? "border-[#25D366]/40" : "border-border"}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${accent ? "text-white" : "bg-primary/10 text-primary"}`} style={accent ? { backgroundColor: "#25D366" } : undefined}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-1 break-words font-display text-lg font-bold">{value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{sub}</div>
                </div>
              </div>
            );
            if (!href) return <div key={label}>{inner}</div>;
            return (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                className="block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {inner}
              </a>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center text-sm text-muted-foreground">
          <strong className="text-foreground">Tip:</strong> Contact us directly on WhatsApp for the
          fastest response — share photos of your site or existing lift and we'll quote in hours, not days.
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl p-10 text-white shadow-elevated md:flex-row md:p-14"
          style={{ background: "linear-gradient(135deg, #128C4A, #25D366)" }}>
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Book a free site visit</h3>
            <p className="mt-2 text-white/90">Anywhere in Bangalore — no obligation, no pushy sales.</p>
          </div>
          <a href={WA.siteVisit} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#128C4A] transition-smooth hover:scale-105">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
