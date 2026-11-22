# Readymaid Approved V2 Homepage Production Baseline

Source of truth: accepted GitHub main in `salimbenzidane/ready-maid-scroll-world`; visual reference: approved Readymaid three-section homepage, confirmed by owner on 22 Nov 2026. This document supersedes the previous locked Meet DUKE landing-page design for the root homepage only. Protected main and existing deployment checks remain authoritative.

## Locked approved website

- Keep the three major homepage sections, responsive English/Chinese/Bahasa Melayu behavior, approved gradient Readymaid R logo, original 17 video files and original customer interview.
- Preserve the current premium native HTML/CSS compliance footer without flattening it to a photo or adding invisible click rectangles.
- JTKSM 432 Licence C renewed until 30 Nov 2028; legal operator Agensi Pekerjaan Expert Sdn. Bhd.
- All Readymaid WhatsApp destinations point to 601115556666.
- FAQ wording: 2-year warranty covers Maid runaway only; customers contact Readymaid for the full terms and written agreement.
- Homepage metadata, social preview, crawl directives, canonical, structured data and the existing GA4 WhatsApp-click event remain operational.
- The original old landing-page visual is retired. Do not reinsert it under another homepage URL.

## Retained SEO project

- Keep all 47 existing sitemap URLs and their target pages on readymaid.my, including 26 current guide articles and service/location pages.
- Keep `/refund-policy/`, `/fees-payment-replacement-policy/`, `/licence-company-verification/`, `/contact-ready-maid/`, `/domestic-helper-faq/` live, indexable, and internally linked.
- Keep refund and fees pages visible through the homepage footer, with mutually consistent business information.
- Preserve n8n as SEO worker scheduler, the existing deterministic guide-CREATE boundary, and the existing VPS-based CI workflow; no duplicate scheduler or alternate CMS.
- Old root `styles.css` and `script.js` remain for legacy SEO pages. Approved new-home assets are namespaced under `/site-v2/`.
- No catch-all rewrite/proxy to the historical Vercel deployment.

## Release policy

Production requires: approved source review; new V2 guard and SEO audit passing; VPS desktop/mobile EN/ZH/MS browser evidence; 17 media paths playable; contact conversion event verification; indexed URL preservation; checked authority-emblem use; rollback identity; deployed site readback. No green assertion from a static ZIP alone.

Protected V2 file hashes are recorded in `config/meet-duke-baseline.json` (the old path is retained solely so the existing release gate can reuse its configuration filename). A baseline change must follow owner-approved visual QA and normal protected-code review.
