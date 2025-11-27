document.addEventListener("DOMContentLoaded", () => {
  fetch("partials/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;

      // Activate burger menu AFTER header loads
      const navToggle = document.querySelector(".nav-toggle");
      const mobileMenu = document.querySelector(".mobile-menu");
      const mobileClose = document.querySelector(".mobile-close");
      const mobileLinks = document.querySelectorAll(".mobile-menu .nav-links a");

      if (navToggle && mobileMenu) {
        navToggle.addEventListener("click", () => {
          mobileMenu.classList.add("open");
          document.body.style.overflow = "hidden";
        });
      }

      if (mobileClose) {
        mobileClose.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          document.body.style.overflow = "";
        });
      }

      mobileLinks.forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    })
    .catch(error => console.log("Header failed to load:", error));
});
