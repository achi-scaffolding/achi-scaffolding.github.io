/* =========================================================
   ABOUT PAGE JS
   Mobile menu toggle + smooth scroll
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ------------------------------
       ELEMENTS
    ------------------------------ */
    const navToggle = document.querySelector(".nav-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileClose = document.querySelector(".mobile-close");
    const menuLinks = document.querySelectorAll(".mobile-nav-links a");

    /* ------------------------------
       OPEN MOBILE MENU
    ------------------------------ */
    if (navToggle) {
        navToggle.addEventListener("click", () => {
            mobileMenu.classList.add("open");
            document.body.style.overflow = "hidden"; // prevent scrolling
        });
    }

    /* ------------------------------
       CLOSE MOBILE MENU
    ------------------------------ */
    if (mobileClose) {
        mobileClose.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            document.body.style.overflow = ""; // unlock scroll
        });
    }

    /* ------------------------------
       CLOSE MENU ON NAV LINK CLICK
    ------------------------------ */
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    /* ------------------------------
       SMOOTH SCROLL FOR:
       <a href="#about-main">Read our story</a>
    ------------------------------ */
    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetID = this.getAttribute("href");
            const targetElem = document.querySelector(targetID);

            if (targetElem) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElem.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

});
