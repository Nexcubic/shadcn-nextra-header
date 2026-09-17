# Rebuild Nexcubic as a living talent ecosystem

## Outcome
Create a completely new Nexcubic website around **Learn → Build → Prove → Connect → Opportunity**, with clear paths for learners, companies, colleges, founders, and technology buyers. The selected direction is **Kinetic Glass Ecosystem**: near-black and off-white foundations, one electric cyan accent, bold editorial typography, translucent technical layers, and restrained motion.

## Build
- Replace the current shared visual system, navigation, footer, buttons, section patterns, cards, forms, and page transitions.
- Build a narrative homepage with intersecting learner/company pathways, the four pillars, proof-of-work comparison, Labs, Connect, college and startup pathways, verified work, ecosystem map, principles, about, and final audience choices.
- Create focused pages at `/learn`, `/talent`, `/connect`, `/labs`, `/work`, `/about`, and `/contact`.
- Keep existing useful routes reachable, either as focused legacy pages or redirects into the new architecture.
- Reuse only verified material: Sanjay S and company contact details, Bangalore/Bengaluru location, WaveTea, Trembly, the in-progress farming initiative, free student startup support, college programs, community, and existing technology/marketing/branding capabilities.
- Mark unavailable courses, events, profiles, legal text, and outcomes as content needed rather than inventing them.

## Signature interactions
- Animated dual-path hero showing learner and company journeys intersecting through Nexcubic.
- Scroll-led lifecycle from learner to professional to mentor, with a lightweight mobile version.
- Living ecosystem map connecting learners, professionals, colleges, founders, companies, mentors, and technology.
- Calm supporting reveals, line drawing, project transitions, and tactile button/card feedback, all disabled or simplified for reduced motion.

## Technical details
- Keep React, TypeScript, Tailwind, React Router, Framer Motion, existing SEO helpers, and existing Formspree delivery.
- Use semantic design tokens and reusable components; no hardcoded visual colors in page components.
- Update titles, descriptions, canonical URLs, accurate structured data, sitemap, robots, `llms.txt`, internal links, and branded social metadata.
- Add static-host-compatible security headers where deployment supports them, without introducing secrets or a new backend.
- Optimize media loading, split larger route bundles, and avoid heavy 3D/WebGL.

## Verification
- Check all primary and legacy routes, navigation, external links, form validation/submission behavior, desktop/mobile layouts, keyboard access, reduced motion, metadata, sitemap, console output, and production build.
