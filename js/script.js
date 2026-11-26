// ==========================================================
// script.js — Site interactivity
// ==========================================================

// ---------- Mobile navigation toggle ----------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the mobile menu after a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ---------- Footer year ----------
// Keeps the copyright year current automatically
document.getElementById("year").textContent = new Date().getFullYear();
