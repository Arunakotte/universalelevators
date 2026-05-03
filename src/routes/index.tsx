import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Check, Shield, Wrench, Clock, Award, Building2, Home, Factory,
  Star, Phone, MessageCircle, MapPin, IndianRupee, HeartHandshake, Users, Mail, CalendarClock,
} from "lucide-react";
import { ElevatorShaft } from "@/components/ElevatorShaft";
import { PHONE, PHONE_DISPLAY, PHONE2, PHONE2_DISPLAY, EMAIL, ADDRESS_FULL, HOURS_LINES, WA } from "@/lib/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Universal Elevators — Premium Elevator Services in Bangalore | Installation, Repair & AMC" },
      { name: "description", content: "Universal Elevators — Bangalore's trusted elevator company in Marathahalli. Installation, repair & AMC for residential and commercial lifts. 8+ years, 4.8★. WhatsApp 097258 53272." },
      { name: "keywords", content: "elevator services in Bangalore, lift installation Bangalore, elevator repair Marathahalli, elevator AMC Bangalore, home elevators Bangalore, commercial elevator Bangalore" },
      { property: "og:title", content: "Universal Elevators — Premium Elevator Services in Bangalore" },
      { property: "og:description", content: "Safe, reliable & affordable elevator installation, repair & AMC across Bangalore. WhatsApp us for a free quote." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden bg-gradient-hero text-surface-foreground">
        <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-glow/30 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent/20 blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-5 md:py-28">
          <div className="md:col-span-3">
            <span className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              4.8★ rated · Bangalore · Since 2018
            </span>

            <h1 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl" style={{ ["--d" as never]: "80ms" }}>
              <span className="block text-primary">
                Universal Elevators
              </span>
              <span className="mt-2 block text-surface-foreground">
                Safe. Reliable. Always Moving Up.
              </span>
            </h1>

            <p className="reveal mt-5 max-w-xl text-lg text-surface-foreground/85" style={{ ["--d" as never]: "180ms" }}>
              Premium elevator installation, repair &amp; AMC services
              for homes, apartments and commercial buildings across Bangalore.
            </p>

            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ ["--d" as never]: "260ms" }}>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-105"
              >
                Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-smooth hover:scale-105 hover:bg-primary/5"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </div>

            <ul className="reveal mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-surface-foreground/85" style={{ ["--d" as never]: "340ms" }}>
              {["Free site visit", "No-obligation quote", "IS 14665 compliant", "Mon–Sat, 9 AM–5:30 PM"].map((x) => (
                <li key={x} className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> {x}</li>
              ))}
            </ul>
          </div>

          <div className="reveal md:col-span-2" style={{ ["--d" as never]: "200ms" }}>
            <ElevatorShaft />
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            { k: "4.8★", v: "Customer rating", icon: Star },
            { k: "8+ Yrs", v: "Industry experience", icon: Award },
            { k: "Bangalore", v: "Locally based", icon: MapPin },
            { k: "500+", v: "Happy customers", icon: HeartHandshake },
          ].map(({ k, v, icon: Icon }) => (
            <div key={v} className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold leading-none">{k}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{v}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-border bg-secondary/40 px-6 py-3 text-center text-sm text-muted-foreground">
          Trusted by hundreds of satisfied customers across Bangalore.
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our services</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Complete elevator solutions, end to end.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Installation, repair, AMC, modernisation — for every type of building in Bangalore.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Wrench, title: "Elevator Installation",
                desc: "Turnkey lift installation by certified engineers — homes, apartments and commercial buildings.",
                bullets: ["IS 14665 / BIS compliant", "Fixed-price quote, no surprises", "Clean, on-schedule delivery"],
                wa: WA.install,
                cta: "Enquire about installation",
              },
              {
                icon: Wrench, title: "Elevator Repair",
                desc: "Fast on-site repair for all major elevator brands across Bangalore — same-day response in most areas.",
                bullets: ["All brands supported", "Genuine spare parts", "Transparent diagnosis"],
                wa: WA.repair,
                cta: "Book a repair on WhatsApp",
              },
              {
                icon: Shield, title: "AMC / Maintenance",
                desc: "Annual maintenance contracts that keep lifts safe, smooth and downtime-free.",
                bullets: ["Quarterly safety checks", "24/7 emergency call-out", "Comprehensive & non-comprehensive plans"],
                wa: WA.amc,
                cta: "Get an AMC quote",
              },
              {
                icon: Home, title: "Residential Elevators",
                desc: "Compact, quiet home and villa lifts that fit small shafts and look beautiful in any home.",
                bullets: ["Starts from ₹6 lakhs", "Custom cabin finishes", "Low-maintenance MRL drives"],
                wa: WA.residential,
                cta: "Discuss a home elevator",
              },
              {
                icon: Building2, title: "Commercial Elevators",
                desc: "Reliable passenger and goods lifts for offices, hotels, hospitals and apartment buildings.",
                bullets: ["Up to 20 passengers", "Auto-rescue (ARD) system", "Energy-efficient drives"],
                wa: WA.commercial,
                cta: "Plan a commercial lift",
              },
              {
                icon: Factory, title: "Modernization",
                desc: "Refresh old lifts with new drives, controls and cabins — without rebuilding the shaft.",
                bullets: ["40–60% cheaper than new", "Adds 15+ years of life", "Latest safety standards"],
                wa: WA.modernization,
                cta: "Modernise my elevator",
              },
            ].map(({ icon: Icon, title, desc, bullets, wa, cta }) => (
              <a href={wa} target="_blank" rel="noopener" key={title} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated cursor-pointer">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#128C4A] group-hover:underline">
                  <MessageCircle className="h-4 w-4" /> {cta}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Why choose us</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Bangalore's most trusted elevator partner.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Clock, t: "Fast service", d: "Same-day response in most parts of Bangalore. Home lifts ready in 7–15 days on site." },
              { icon: IndianRupee, t: "Affordable pricing", d: "Honest fixed-price quotes. No hidden charges, no surprise extras at handover." },
              { icon: Users, t: "Experienced technicians", d: "In-house certified engineers — never sub-contracted to outside teams." },
              { icon: Shield, t: "Safety compliance", d: "Every install meets IS 14665 / BIS standards with full safety certification." },
              { icon: HeartHandshake, t: "Reliable support", d: "24/7 emergency response across Bangalore for AMC clients." },
              { icon: Award, t: "8+ years, 4.8★ rated", d: "A growing book of happy homeowners, builders and apartment associations." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gradient-hero px-6 py-12 text-surface-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Get a free quote in minutes.</h3>
            <p className="mt-1 text-surface-foreground/85">Message us on WhatsApp — we usually reply within the hour.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={WA.quote} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-105" style={{ backgroundColor: "#25D366" }}>
              <MessageCircle className="h-4 w-4" /> Get Free Quote
            </a>
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-smooth hover:scale-105 hover:bg-primary/5">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Our process</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">A simple, transparent journey.</h2>
          </div>
          <ol className="grid gap-6 md:grid-cols-5">
            {[
              { n: "1", t: "Site Visit", d: "Free on-site survey across Bangalore." },
              { n: "2", t: "Consultation", d: "Recommendations, options and a fixed quote." },
              { n: "3", t: "Installation", d: "Clean, on-schedule install by our engineers." },
              { n: "4", t: "Testing", d: "Full safety testing, certification and training." },
              { n: "5", t: "Maintenance", d: "Ongoing AMC and 24/7 breakdown support." },
            ].map((s, i) => (
              <li key={s.n} className="relative rounded-2xl bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary font-display text-base font-bold text-primary-foreground">{s.n}</div>
                <h3 className="mt-4 font-display text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                {i < 4 && <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/40 md:block" />}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Questions, answered.</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "How much does an elevator installation cost in Bangalore?",
                a: "Costs vary by type and capacity. Home elevators typically start from ₹6 lakhs, passenger lifts for apartments from ₹10 lakhs, and goods lifts from ₹8 lakhs. After a free site visit we provide a fixed-price quote with no hidden charges.",
              },
              {
                q: "How long does an installation take?",
                a: "A residential home lift takes 7–15 days on site after manufacturing. Passenger lifts for apartments typically take 4–8 weeks. Manufacturing lead times are usually 6–10 weeks depending on cabin specification.",
              },
              {
                q: "Do you offer AMC (Annual Maintenance Contracts)?",
                a: "Yes. Our AMCs are tailored to lift type and usage, with options for comprehensive or non-comprehensive cover. All contracts include 24/7 emergency call-out across Bangalore.",
              },
              {
                q: "Are your installations compliant with Indian standards?",
                a: "Yes — every installation complies with IS 14665 (Indian Standard for electric traction lifts) and applicable BIS norms, with full certification provided on handover.",
              }
            ].map((f, i) => (
              <details key={f.q} className="group overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/30">
                <summary className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 font-display text-lg font-semibold list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-foreground">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">What clients say</span>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Trusted across Bangalore.</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-medium">
              <Star className="h-4 w-4 fill-accent text-accent" /> 4.8 / 5 average rating
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "Ramesh K.", r: "Villa owner, Whitefield", t: "I had a great experience with Universal Elevators. Their repair service was quick, affordable and handled professionally." },
              { n: "Pooja S.", r: "Secretary, Marathahalli Apartments", t: "Switched our AMC to Universal Elevators last year. Response times have been excellent and our two old lifts run smoother than ever." },
              { n: "Arvind M.", r: "Builder, HSR Layout", t: "We've installed 4 passenger lifts with them across our projects. Honest pricing, no surprises, and the safety certification was sorted promptly." },
            ].map((t) => (
              <figure key={t.n} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-card-soft transition-smooth hover:-translate-y-1 hover:shadow-elevated">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-accent" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm text-foreground/90">"{t.t}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BIG WHATSAPP CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl p-10 text-white shadow-elevated md:flex-row md:p-14"
          style={{ background: "linear-gradient(135deg, #128C4A, #25D366)" }}>
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Book a Free Site Visit</h3>
            <p className="mt-2 text-white/90">Tell us your requirement on WhatsApp — we'll arrange a visit at a time that suits you.</p>
          </div>
          <a href={WA.siteVisit} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#128C4A] transition-smooth hover:scale-105">
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gradient-hero px-6 py-20 text-surface-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Contact</span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">Talk to Universal Elevators.</h2>
            <p className="mt-4 max-w-md text-surface-foreground/85">
              Contact us directly on WhatsApp for the fastest response — or call our office during business hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA.general} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-smooth hover:scale-105" style={{ backgroundColor: "#25D366" }}>
                <MessageCircle className="h-4 w-4" /> WhatsApp Now
              </a>
              <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-smooth hover:scale-105 hover:bg-primary/5">
                <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <ul className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-surface-foreground/70">Phone</div>
                <a href={`tel:${PHONE}`} className="font-semibold hover:underline block">{PHONE_DISPLAY}</a>
                <a href={`tel:${PHONE2}`} className="font-semibold hover:underline block mt-1">{PHONE2_DISPLAY}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-surface-foreground/70">WhatsApp</div>
                <a href={WA.general} target="_blank" rel="noopener" className="font-semibold hover:underline">Message us instantly</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-surface-foreground/70">Email</div>
                <a href={`mailto:${EMAIL}`} className="font-semibold hover:underline break-all">{EMAIL}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-surface-foreground/70">Office</div>
                <div className="text-sm">{ADDRESS_FULL}</div>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CalendarClock className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-surface-foreground/70">Business hours</div>
                {HOURS_LINES.map((h) => <div key={h} className="text-sm">{h}</div>)}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

