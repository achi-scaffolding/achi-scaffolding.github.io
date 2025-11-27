document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("header");
  if (!headerContainer) return;

  // Detect Github Pages
  const base = window.location.hostname.includes("github.io")
    ? "/Achi_Internship"
    : "";

  fetch(`${base}/partials/header.html`)
    .then(res => res.text())
    .then(html => {
      headerContainer.innerHTML = html;

      // Now that header is inserted, activate burger menu
      initMobileMenu();
    })
    .catch(err => console.error("Header load failed:", err));
});


function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");

  // FIXED: Select correct links inside mobile menu
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-links a");

  if (!navToggle || !mobileMenu || !mobileClose) return;

  navToggle.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
  });

  mobileClose.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.height = "";
  });

  // Close menu when clicking a link
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      document.body.style.height = "";
    });
  });
}
