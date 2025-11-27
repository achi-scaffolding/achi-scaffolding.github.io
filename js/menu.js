const navToggle = document.querySelector(".nav-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileClose = document.querySelector(".mobile-close");
const mobileLinks = document.querySelectorAll(".mobile-nav-links a");

// Open mobile menu
function openMenu() {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";     // ⭐ Prevent background scroll
}

// Close mobile menu
function closeMenu() {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
    document.body.style.height = "";         // ⭐ Restore scroll
}

// Only run if elements exist
if (navToggle && mobileMenu && mobileClose) {

    navToggle.addEventListener("click", openMenu);

    mobileClose.addEventListener("click", closeMenu);

    // Close menu automatically when clicking a nav link
    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}
