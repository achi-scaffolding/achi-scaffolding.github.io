function initMobileMenu() {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  
  // FIX: get the real menu links inside .mobile-menu
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

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
      document.body.style.height = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", initMobileMenu);
