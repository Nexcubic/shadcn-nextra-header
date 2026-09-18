# Rebuild Nexcubic as a proof-forward digital solutions company

## Outcome
Create a premium, mobile-first Nexcubic website that clearly presents all five services—web development, mobile apps, AI automation, branding, and digital marketing—and supports that breadth with verified work, specific deliverables, and founder credibility.

## Technical foundation
- Add build-time prerendering for every public route so headings, service copy, founder information, and case-study text exist in generated HTML without browser JavaScript.
- Keep the current React/Vite architecture; document that this is static prerendering, not request-time server-side rendering.
- Generate `sitemap.xml` from the public route list, preserve and validate `robots.txt`, and explicitly allow Googlebot, GPTBot, PerplexityBot, and ClaudeBot.
- Preserve the existing homepage title, description, Open Graph, Twitter, canonical, and branded imagery while auditing consistency.
- Add accurate Organization and WebSite schema on the homepage, plus Service schema for all five offerings and on each service page.

## Visual and content rebuild
- Establish a distinctive light editorial system: confident sans-serif typography, navy/charcoal structure, one teal accent, sharp grid lines, restrained motion, and generous whitespace.
- Rebuild the header and mobile navigation around Home, Services, Work, About, and Contact, with a prominent project CTA.
- Rebuild the homepage in the requested order: hero, verified trust strip, five equal services, proof/case studies, founder story, four-step process, audiences, practical FAQ, and a contact-rich final CTA.
- Use WaveTea and Trembly as the early proof anchor, with real imagery and only verified statements.
- Present case studies using Client, Problem, Solution, What Nexcubic Built, and Result; mark unavailable metrics as `[CONTENT NEEDED: verified result metric]`.
- Refresh Services, service detail, Case Studies, About, and Contact pages to match the new system while preserving verified copy and the existing contact form delivery.
- Keep current auxiliary public pages reachable and visually compatible.
- Do not fabricate legal copy; show Privacy Policy and Terms as pending content rather than publishing misleading pages.

## Responsive, accessibility, and performance
- Add a mobile sticky project CTA, 44px minimum touch targets, overflow-safe layouts, visible focus states, semantic headings, labels, and reduced-motion handling.
- Lazy-load below-the-fold images, use stable image dimensions, split page bundles where practical, and avoid heavy visual libraries.
- Use only project assets and verified public links; no stock imagery or decorative gradient blobs.

## Verification
- Check generated HTML for each primary route before JavaScript execution.
- Validate sitemap, robots, JSON-LD, metadata, internal links, forms, desktop/mobile layouts, keyboard use, reduced motion, image loading, console output, and the production build.
- Do not publish automatically.