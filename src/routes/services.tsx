import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, Building2, Factory, Wrench, Check, ArrowRight } from "lucide-react";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import industrialImg from "@/assets/service-industrial.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Lift Installation, AMC & Modernisation | Universal Elevators" },
      { name: "description", content: "Elevator installation, repair, AMC and modernisation services across Bangalore. Residential, passenger, goods and capsule lifts." },
      { property: "og:title", content: "Services | Universal Elevators Bangalore" },
      { property: "og:description", content: "Install, modernise and maintain. Bangalore-wide elevator specialists." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Home,
    img: residentialImg,
    title: "Residential elevators",
    desc: "Quiet, compact and beautifully finished home lifts — perfect for villas, duplexes and apartment retrofits.",
    items: ["Home & villa elevators", "Compact MRL home lifts", "Hydraulic & traction options", "Stylish cabin finishes"],
  },
  {
    icon: Building2,
    img: commercialImg,
    title: "Passenger elevators",
    desc: "Reliable, smooth-ride passenger lifts for apartments, offices, hotels and commercial buildings.",
    items: ["Passenger lifts up to 20 persons", "MRL (machine room-less) systems", "Capsule & panoramic cabins", "Auto-rescue & ARD systems"],
  },
  {
    icon: Factory,
    img: industrialImg,
    title: "Goods & industrial lifts",
    desc: "Heavy-duty goods, freight and dumbwaiter lifts engineered for warehouses, factories and commercial kitchens.",
    items: ["Goods lifts up to 5,000 kg", "Hospital & stretcher lifts", "Dumbwaiters & kitchen lifts", "Hydraulic freight lifts"],
  },
];

const extras = [
  { title: "Modernisation", desc: "Upgrade old lifts with new drives, controls and cabins — without a full replacement." },
  { title: "AMC & maintenance", desc: "Annual maintenance contracts with 24/7 emergency response across Bangalore." },
  { title: "Repair & breakdown", desc: "Fast on-site repair for all elevator brands — Johnson, Genesis, Schindler, Kone, Otis & more." },
  { title: "Spare parts supply", desc: "Genuine elevator spares and control panels for installation, repair and replacement." },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero px-6 py-24 text-surface-foreground md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">Our services</span>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
            Every elevator. Every sector.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-foreground/80">
            From a single home lift to commercial fleets across Bangalore — we install, modernise,
            repair and maintain elevators of every type.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6">
          {services.map((s, i) => (
            <article key={s.title} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-elevated">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="font-display text-3xl font-bold md:text-4xl">{s.title}</h2>
                <p className="mt-4 text-muted-foreground">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Wrench className="h-8 w-8 text-primary" />
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Beyond installation.</h2>
            <p className="mt-4 text-muted-foreground">
              An elevator is a long-term investment. We help you protect it for the long haul.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {extras.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-card p-6 shadow-card-soft">
                <h3 className="font-display text-lg font-bold">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-foreground p-10 text-background md:flex-row md:p-14">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Not sure what you need?</h3>
            <p className="mt-2 text-background/70">Our engineers will visit, assess and recommend.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-smooth hover:scale-[1.02]">
            Book a free site visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
