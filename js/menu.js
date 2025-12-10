document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileClose = document.querySelector(".mobile-close");
  const mobileLinks = document.querySelectorAll(".mobile-menu a");

  if (!navToggle || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add("open");
  }

  function closeMenu() {
    mobileMenu.classList.remove("open");
  }

  navToggle.addEventListener("click", openMenu);

  if (mobileClose) {
    mobileClose.addEventListener("click", closeMenu);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 992) {
      closeMenu();
    }
  });
});
