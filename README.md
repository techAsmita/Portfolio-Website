# 🌐 Personal Portfolio Website

My personal portfolio website — designed and built from scratch using HTML, CSS, and JavaScript. A premium, minimal AI-engineer-focused portfolio inspired by Vercel, Linear, and Stripe, with a full dark/light theme system, a bento-style project showcase, and a fully responsive layout.

🔗 **Live:** [techasmita.github.io/Portfolio-Website](https://techasmita.github.io/Portfolio-Website/)

---

## ✨ Features

- **Dark / Light theme toggle** — persisted via `localStorage`, with a premium tinted-surface light mode (soft radial highlights, subtle gradients) rather than flat white
- **Sticky glass navbar** — transparent at the top, blurred glass background on scroll, active-section indicator via `IntersectionObserver`
- **Custom favicon** — "AR" monogram in the portfolio's accent color
- **Hero** — static AI Engineer / Full Stack Developer positioning, CSS-only animated grid + gradient-glow background, staggered entrance animations
- **Featured Work** — bento-grid project showcase with one featured project (real product screenshot) and four supporting project cards
- **Skills** — grouped technology badges across Languages, AI/ML, Frontend, Backend, Databases, and Tools
- **Education** — single premium card (institution, degree, CGPA, relevant coursework tags)
- **CTA section** — "Let's Build Something Meaningful" call-to-action with direct Email / GitHub / LinkedIn links and a resume button (replaces the old contact form)
- **Minimal footer** — name, role, socials, and an auto-updating copyright year
- **Responsive navbar** — accessible slide-down mobile menu with proper ARIA attributes
- **Section dividers** — clean `<hr>` separators between sections
- **Inter + JetBrains Mono** — loaded via Google Fonts (Inter for body/headings, JetBrains Mono for labels and tags)
- **Font Awesome icons** — throughout nav, skills, and project/contact links

---

## 🗂️ Structure

```
Portfolio-Website/
├── index.html                  → Main HTML (all sections)
├── Styles/
│   └── All-Styles.css          → Token-based design system (colors, type, spacing, radius, shadow, motion) + theming
├── Javascript-code/
│   └── Interactive.js          → Theme toggle, sticky header, mobile nav, scroll-spy, footer year
└── All Images/
    ├── WhatsApp Image ...jpeg  → Profile photo
    ├── Screenshots/            → Real project screenshots (Pactra, StyleSync)
    └── Favicon/                → favicon.ico, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png
```

---

## 🎨 Design Highlights

- **Design-system CSS variables** — a full token layer (colors, typography scale, spacing scale, radius, shadow, motion) that both themes draw from, instead of per-component light/dark overrides
- **Dark mode** — near-black surfaces (`#0A0A0C`) with a refined indigo-violet accent (`#6E62F5`)
- **Light mode** — tinted surfaces (not pure white) with soft radial-highlight gradients for a premium feel, while keeping strong text contrast
- **Hairline borders over heavy shadows** — cards use 1px borders and subtle elevation rather than glow-heavy box-shadows
- **Bento-grid project showcase** with a featured project spanning a larger grid area
- **Consistent hover system** — subtle lift/scale on cards, badges, and tags, all using shared transition tokens
- **Accessibility** — visible `:focus-visible` states, ARIA-driven mobile nav and theme toggle, `prefers-reduced-motion` support throughout
- **Max-width 1200px** with centered sections and consistent vertical rhythm between sections

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 (semantic sections, ARIA) |
| Styling | CSS3 (custom-property design system, Flexbox, Grid, `clamp()`) |
| Interactivity | Vanilla JavaScript (no frameworks) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Fonts | Google Fonts — Inter & JetBrains Mono |
| Hosting | GitHub Pages |

---

## 🚀 Run Locally

```bash
git clone https://github.com/techAsmita/Portfolio-Website.git
cd Portfolio-Website
# Open index.html in your browser
open index.html
```

No build tools or dependencies to install — pure HTML/CSS/JS.

---

## 📌 Sections

| Section | What's inside |
|---------|--------------|
| **About (Hero)** | Profile photo, name, "AI Engineer & Full Stack Developer" headline, bio, resume/GitHub/project CTAs |
| **Featured Work** | Pactra AI (featured) · StyleSync AI · CFLO Agent · BrailleVision · Business Analytics Dashboard |
| **Skills** | 6 groups: Languages, AI/ML, Frontend, Backend, Databases, Tools |
| **Education** | Thapar Institute of Engineering & Technology — B.E. Computer Engineering, 2023–2027, CGPA 8.35 |
| **Contact (CTA)** | "Let's Build Something Meaningful" — Email, GitHub, LinkedIn, resume |

---

## 👩‍💻 Author

**Asmita Roy** — [@techAsmita](https://github.com/techAsmita)
B.E. Computer Engineering | AI Engineer & Full Stack Developer
[LinkedIn](https://linkedin.com/in/techasmita) · [Live Portfolio](https://techasmita.github.io/Portfolio-Website/)
