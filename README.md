# 🌐 Personal Portfolio Website

My personal portfolio website — designed and built from scratch using HTML, CSS, and JavaScript. Features a dark/light theme toggle, smooth animations, typed role text, and a fully responsive layout.

🔗 **Live:** [techasmita.github.io/Portfolio-Website](https://techasmita.github.io/Portfolio-Website/)

---

## ✨ Features

- **Dark / Light theme toggle** — persisted via `localStorage`
- **Typed.js** — animated role cycling: Web Developer → AI/ML Enthusiast → Content Writer → ...
- **Responsive navbar** — hamburger menu for mobile, closes on link click
- **Smooth section navigation** — About, Skills, Projects, Education, Contact
- **Skills grid** — categorized cards for Frontend, Backend, AI/ML, Languages, Tools
- **Projects showcase** — cards with tech tags, live demo & GitHub links
- **Education timeline** — institution logos, degrees, relevant coursework
- **Contact form** — name, email, message fields + LinkedIn link
- **Section dividers** — clean `<hr>` separators between sections
- **Poppins font** — loaded via Google Fonts
- **Font Awesome icons** — throughout nav, skills, and contact

---

## 🗂️ Structure

```
Portfolio-Website/
├── index.html                  → Main HTML (all sections)
├── Styles/
│   └── All-Styles.css          → 930+ lines of CSS with CSS variables & theming
├── Javascript-code/
│   └── Interactive.js          → Typed.js init, dark/light toggle, hamburger menu
└── All Images/
    ├── WhatsApp Image ...jpeg   → Profile photo
    ├── Thapar Institute...jpeg  → Education logo
    ├── images.jpeg             → School logo
    └── ...                     → Project thumbnail images
```

---

## 🎨 Design Highlights

- **CSS Variables** for full theme switching — dark (`#230532` bg, `#a26bfa` accent) and light (`#f0f2f5` bg, `#7b3fe0` accent)
- **Smooth transitions** on all theme changes (`0.3s ease`)
- **Card-based layout** for skills and projects with hover effects
- **Box shadows** — purple glow in dark mode, soft drop shadow in light mode
- **Max-width 1200px** with centered sections and responsive padding

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (CSS Variables, Flexbox, Grid) |
| Interactivity | Vanilla JavaScript |
| Animations | [Typed.js](https://github.com/mattboldt/typed.js/) |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Fonts | Google Fonts — Poppins |
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
| **About** | Profile photo, name, animated role, bio, resume link |
| **Skills** | 6 categories: Frontend, Backend, Databases, AI/ML, Languages, Tools |
| **Projects** | House Price Prediction · Gender Bias Detection · Portfolio Website |
| **Education** | TIET (B.E. CE, 2023–27) · Cambridge School Noida (XII & X) |
| **Contact** | Form + LinkedIn |

---

## 👩‍💻 Author

**Asmita Roy** — [@techAsmita](https://github.com/techAsmita)  
B.E. Computer Engineering | AI/ML Enthusiast  
[LinkedIn](https://linkedin.com/in/techasmita) · [Live Portfolio](https://techasmita.github.io/Portfolio-Website/)
