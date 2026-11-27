// ==========================================================
// script.js — Site interactivity
// ==========================================================

// ---------- Mobile menu ----------
// On narrow screens the nav links collapse behind a menu button.
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("primary-nav");

function setMenuOpen(open) {
  navLinks.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    setMenuOpen(!navLinks.classList.contains("open"));
  });

  // Close after choosing a link
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  // Close when tapping outside the menu or pressing Escape
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".site-nav")) setMenuOpen(false);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenuOpen(false);
  });
}

// ---------- Footer year ----------
// Keeps the copyright year current automatically
document.getElementById("year").textContent = new Date().getFullYear();
