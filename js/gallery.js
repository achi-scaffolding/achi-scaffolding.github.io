document.addEventListener("DOMContentLoaded", function () {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll(".gallery-item"));
    const paginationWrapper = document.querySelector(".gallery-pagination");
    const pageNumbersContainer = document.querySelector(".gallery-page-numbers");
    const prevBtn = document.querySelector(".gallery-page-btn.prev");
    const nextBtn = document.querySelector(".gallery-page-btn.next");
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = lightbox ? lightbox.querySelector("img") : null;
    const lightboxClose = lightbox ? lightbox.querySelector(".lightbox-close") : null;
    const lightboxBackdrop = lightbox ? lightbox.querySelector(".lightbox-backdrop") : null;

    const PER_PAGE = 39;
    let currentPage = 1;
    const totalPages = Math.ceil(items.length / PER_PAGE);

    items.forEach(function (item) {
        const img = item.querySelector("img");
        if (img && lightboxImg) {
            img.addEventListener("click", function () {
                openLightbox(img.src, img.alt || "Project image");
            });
        }
    });

    function renderPage(page) {
        currentPage = page;
        const startIndex = (currentPage - 1) * PER_PAGE;
        const endIndex = startIndex + PER_PAGE;

        items.forEach(function (item, index) {
            if (index >= startIndex && index < endIndex) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });

        updatePaginationButtons();
        renderPageNumbers();
    }

    function updatePaginationButtons() {
        if (!prevBtn || !nextBtn) return;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    }

    function renderPageNumbers() {
        if (!pageNumbersContainer) return;

        pageNumbersContainer.innerHTML = "";

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "gallery-page-number";
            if (i === currentPage) {
                btn.classList.add("active");
            }
            btn.textContent = i.toString();
            btn.addEventListener("click", function () {
                renderPage(i);
                scrollToTopOfGallery();
            });
            pageNumbersContainer.appendChild(btn);
        }
    }

    function scrollToTopOfGallery() {
        const section = document.querySelector(".gallery-section");
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: top, behavior: "smooth" });
    }

    function openLightbox(src, alt) {
        if (!lightbox || !lightboxImg) return;
        lightboxImg.src = src;
        lightboxImg.alt = alt || "Project image";
        lightbox.classList.add("open");
    }

    function closeLightbox() {
        if (!lightbox || !lightboxImg) return;
        lightbox.classList.remove("open");
        lightboxImg.src = "";
        lightboxImg.alt = "";
    }

    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }

    if (lightboxBackdrop) {
        lightboxBackdrop.addEventListener("click", closeLightbox);
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && lightbox && lightbox.classList.contains("open")) {
            closeLightbox();
        }
    });

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            if (currentPage > 1) {
                renderPage(currentPage - 1);
                scrollToTopOfGallery();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            if (currentPage < totalPages) {
                renderPage(currentPage + 1);
                scrollToTopOfGallery();
            }
        });
    }

    if (items.length > 0) {
        renderPage(1);
    } else if (paginationWrapper) {
        paginationWrapper.style.display = "none";
    }
});
