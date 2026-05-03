import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Elevator FAQ — Cost, AMC & Installation in Bangalore | Universal" },
      { name: "description", content: "Common questions about elevator installation, AMC, modernisation and pricing answered for Bangalore home and commercial projects." },
      { property: "og:title", content: "Elevator FAQ | Universal Elevators" },
      { property: "og:description", content: "Costs, timelines, AMC and compliance answered." },
    ],
  }),
  component: FaqPage,
});

const faqs = [
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
  },
  {
    q: "Can you service or repair elevators from other brands?",
    a: "Absolutely. We service and repair all major brands including Johnson, Genesis, Schindler, Kone, Otis and more — including spare parts supply and control panel replacement.",
  },
  {
    q: "Can you modernise an existing old lift?",
    a: "Yes. Modernisation upgrades drives, controls, doors and cabin finishes without replacing the entire shaft — typically saving 40–60% versus a new install while extending lift life by 15+ years.",
  },
  {
    q: "What types of elevators do you install?",
    a: "Residential home elevators, passenger lifts, capsule and panoramic lifts, goods and freight lifts, hospital and stretcher lifts, dumbwaiters and hydraulic lifts.",
  },
  {
    q: "Where do you operate?",
    a: "We're based in Marathahalli, Bangalore, and serve clients across Bangalore and surrounding areas in Karnataka.",
  },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-gradient-hero px-6 py-24 text-surface-foreground md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">FAQ</span>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
            Questions, answered.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-surface-foreground/80">
            Cost, timelines, AMC, compliance — the things people most want to know before
            starting an elevator project.
          </p>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card transition-smooth hover:border-primary/30">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-foreground p-10 text-background md:flex-row md:p-14">
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">Still have questions?</h3>
            <p className="mt-2 text-background/70">Talk to a real engineer — no pushy sales calls.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-smooth hover:scale-[1.02]">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
