## Rebrand site to Universal Elevators

Update every page from the placeholder "Apex Lift Installations" to the real business, using details pulled from the Justdial listing.

### Business details to apply

- **Name:** Universal Elevators
- **Phone:** 097258 53272 (tel link `09725853272`, WhatsApp `wa.me/919725853272`)
- **Address:** Flat 24 Mandala House, 5th Cross MSR Nagar, Near Buncake Palace, Marathahalli, Bangalore – 560037, Karnataka
- **Founded:** 2018 (8+ years in business)
- **Rating:** 4.8★ (Justdial verified)
- **Hours:** Mon–Sat, 9:00 am – 7:00 pm

### Files to update

1. **`src/components/SiteHeader.tsx`** — logo text → "Universal Elevators"
2. **`src/components/SiteFooter.tsx`** — name, tagline (Bangalore-focused), phone, email, address, compliance line (IS 14665, 4.8★)
3. **`src/routes/__root.tsx`** — site title + meta description
4. **`src/routes/index.tsx`** (Home)
   - Hero: badge "Bangalore's elevator specialists since 2018", India-focused copy
   - Replace "Request a survey" CTA with "Request a quote" + tel-link "Call 097258 53272"
   - Stats: 8+ yrs / 4.8★ / 24/7
   - Services: Residential, Passenger, Goods & Industrial
   - Why Us cards: BIS compliant (IS 14665), in-house team, 24/7 AMC, 4.8★ trusted dealer
   - Add visible 4.8★ rating badge
5. **`src/routes/services.tsx`**
   - Three sectors: Residential elevators, Passenger elevators, Goods & industrial lifts
   - "Beyond installation" cards: Modernisation, AMC & maintenance, Repair & breakdown, Spare parts supply
   - Mention compatibility with Johnson, Genesis, Schindler, Kone, Otis
6. **`src/routes/about.tsx`** — Marathahalli/Bangalore origin story, 2018 founding, 8+ yrs, 4.8★, Bangalore service area stats
7. **`src/routes/faq.tsx`** — India-specific Q&A: pricing in ₹ (home from ₹6L, passenger from ₹10L), IS 14665 compliance, AMC, multi-brand servicing, Bangalore service area
8. **`src/routes/contact.tsx`**
   - Real phone, email, full address
   - Add WhatsApp button (`https://wa.me/919725853272`)
   - Hours: Mon–Sat 9am–7pm
   - Project type dropdown updated to Indian elevator categories

### Copy/terminology shift

- "Lift" → mostly "elevator" (mixed where natural — both are common in India)
- Remove UK references: LOLER, EN 81, Part M, "£" → IS 14665, BIS, "₹"
- Remove fabricated stats (1,200+ installs, 40 engineers, 10-yr warranty, "two brothers" story) — replace with verifiable facts (8+ yrs, 4.8★, Marathahalli HQ)

### Out of scope

- No logo image (text logo with icon stays)
- No Google Maps embed (can add later if you want)
- No backend form submission yet (form still shows success state only)

Approve and I'll apply the changes.