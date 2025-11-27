// Load header dynamically
document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  if (!headerContainer) return;

  // Auto-detect correct base path (GitHub Pages vs local)
  const base = window.location.hostname.includes("github.io")
    ? "/Achi_Internship"
    : "";

  fetch(`${base}/partials/header.html`)
    .then(res => res.text())
    .then(html => {
      headerContainer.innerHTML = html;

      // Initialize menu AFTER header is inserted into DOM
      initMobileMenu();
    })
    .catch(err => console.error("Header load failed:", err));
});


// =========================
//  Mobile Menu Controller
// =========================
function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");

  // FIX: Select menu links from inside the mobile menu
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-links a");

  if (!navToggle || !mobileMenu || !mobileClose) {
    console.warn("Mobile menu elements not found.");
    return;
  }

  // Open menu
  navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  });

  // Close menu
  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.height = "";
  });

  // Close when clicking a menu link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      document.body.style.height = "";
    });
  });

  console.log("Mobile menu initialized ✔");
}
