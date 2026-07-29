// ============================================================
// Theme toggle functionality (unchanged behavior, new markup)
// ============================================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === "light-theme") {
    themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
    themeToggle.setAttribute("aria-pressed", "true");
  }
}

themeToggle.addEventListener("click", () => {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
    themeToggle.setAttribute("aria-pressed", "false");
    localStorage.setItem("theme", ""); // Clear preference or set to dark
  } else {
    body.classList.add("light-theme");
    themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
    themeToggle.setAttribute("aria-pressed", "true");
    localStorage.setItem("theme", "light-theme");
  }
});

// ============================================================
// Sticky header — add background/blur once the page scrolls
// ============================================================
const siteHeader = document.getElementById("siteHeader");

function updateHeaderScrollState() {
  if (window.scrollY > 12) {
    siteHeader.classList.add("is-scrolled");
  } else {
    siteHeader.classList.remove("is-scrolled");
  }
}

updateHeaderScrollState();
window.addEventListener("scroll", updateHeaderScrollState, { passive: true });

// ============================================================
// Mobile nav toggle (slide-down menu, ARIA-driven)
// ============================================================
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

// Close mobile nav when a link is clicked
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// ============================================================
// Scroll-spy — highlight the nav link for the section in view
// ============================================================
const navLinkEls = document.querySelectorAll("[data-nav-link]");
const observedSections = Array.from(navLinkEls)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          navLinkEls.forEach((link) => {
            link.classList.toggle(
              "active-link",
              link.getAttribute("href") === id
            );
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
  );

  observedSections.forEach((section) => sectionObserver.observe(section));
}

// ============================================================
// Hero scroll indicator — smooth-scroll to the next section
// ============================================================
const scrollIndicator = document.getElementById("scrollIndicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const nextSection = document.getElementById("skills");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// ============================================================
// Footer — dynamic copyright year
// ============================================================
const footerYear = document.getElementById("footerYear");
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
