import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Target, Heart, Sparkles } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Universal Elevators — Bangalore Lift Specialists Since 2018" },
      { name: "description", content: "Universal Elevators is a Bangalore-based elevator dealer and installer with 8+ years of experience and a 4.8★ customer rating." },
      { property: "og:title", content: "About Universal Elevators" },
      { property: "og:description", content: "Bangalore-based elevator specialists since 2018." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero px-6 py-24 text-surface-foreground md:py-32">
        <div className="mx-auto max-w-5xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">About us</span>
          <h1 className="mt-4 font-display text-5xl font-bold md:text-7xl">
            A team of engineers, lifting Bangalore higher.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-surface-foreground/80">
            Founded in 2018 in Marathahalli, Bangalore, Universal Elevators has grown into one of
            the city's most trusted elevator dealers and installers — without losing the
            hands-on, customer-first ethos that started it all.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-3xl shadow-elevated">
            <img src={teamImg} alt="The Universal Elevators engineering team" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold md:text-5xl">Our story</h2>
            <p className="mt-6 text-muted-foreground">
              Universal Elevators was founded by a team of qualified lift engineers who believed
              Bangalore needed a more honest, design-led approach to elevators. Eight years on, we
              still operate by the same principles: hire skilled engineers, keep work in-house, and
              treat every project like it's our own building.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we serve homeowners, builders, apartment associations and businesses across
              Bangalore — handling everything from residential home lifts to large commercial
              installations and ongoing AMC service.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-4xl font-bold md:text-5xl">What we believe</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Precision first", d: "An elevator you can't trust isn't an elevator. Every install is signed off by a senior engineer." },
              { icon: Heart, t: "People always", d: "Honest pricing, clear timelines and a real human at the end of every phone call." },
              { icon: Sparkles, t: "Design matters", d: "Lifts are part of a building. We treat them like furniture, not just machinery." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl bg-card p-8 shadow-card-soft">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 font-display text-xl font-bold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
          {[
            { k: "2018", v: "Founded" },
            { k: "8+ yrs", v: "In business" },
            { k: "4.8★", v: "Customer rating" },
            { k: "Bangalore", v: "Service area" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl font-bold text-primary">{s.k}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-hero p-10 text-surface-foreground shadow-elevated md:flex-row md:p-14">
          <h3 className="font-display text-2xl font-bold md:text-3xl">Let's build something that lifts.</h3>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-primary px-7 py-3.5 text-sm font-semibold text-primary transition-smooth hover:bg-primary/5">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
