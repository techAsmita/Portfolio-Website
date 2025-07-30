// Typed.js initialization
      var typed = new Typed("#typed-role", {
        strings: [
          "Web Developer",
          "Content Writer",
          "AI/ML Enthusiast",
          "Video Editor",
          "Problem Solver",
        ],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true,
      });

      // Theme toggle functionality
      const themeToggle = document.getElementById("themeToggle");
      const body = document.body;

      // Check for saved theme preference
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "light-theme") {
          themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
        }
      }

      themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-theme")) {
          body.classList.remove("light-theme");
          themeToggle.querySelector("i").classList.replace("fa-moon", "fa-sun");
          localStorage.setItem("theme", ""); // Clear preference or set to dark
        } else {
          body.classList.add("light-theme");
          themeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
          localStorage.setItem("theme", "light-theme");
        }
      });

      // Hamburger menu functionality
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("navLinks");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close mobile nav when a link is clicked
      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
          }
        });
      });