document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".testi-track");
    const original = Array.from(document.querySelectorAll(".testimonial-item"));
    const dots = document.querySelectorAll(".testi-dots li");

    // visible=3 → real center = middle element (index 1 inside the visible frame)
    let index = 3; // after cloning, this will be the true middle element
    let auto;

    // Clone for perfect infinite loop
    const clonesBefore = original.slice(-3).map(item => item.cloneNode(true));
    const clonesAfter = original.slice(0, 3).map(item => item.cloneNode(true));

    clonesBefore.forEach(cl => track.prepend(cl));
    clonesAfter.forEach(cl => track.append(cl));

    const all = Array.from(document.querySelectorAll(".testimonial-item"));
    let slideWidth = 0;

    function updateSizes() {
        slideWidth = all[0].offsetWidth + 40;
        track.style.transition = "none";
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    function setCenter() {
        all.forEach(s => s.classList.remove("center"));

        // middle of visible is always index
        all[index].classList.add("center");

        dots.forEach(d => d.classList.remove("active"));

        const realDot = (index - 3 + original.length) % original.length;
        dots[realDot].classList.add("active");
    }

    function moveToNext() {
        index++;
        track.style.transition = "0.6s ease";
        track.style.transform = `translateX(-${slideWidth * index}px)`;

        setTimeout(() => {
            if (index >= all.length - 3) {
                track.style.transition = "none";
                index = 3;
                track.style.transform = `translateX(-${slideWidth * index}px)`;
            }
            setCenter();
        }, 620);
    }

    function moveToDot(i) {
        index = i + 3;
        track.style.transition = "0.6s ease";
        track.style.transform = `translateX(-${slideWidth * index}px)`;
        setCenter();
    }

    dots.forEach(d => {
        d.addEventListener("click", () => {
            clearInterval(auto);
            moveToDot(Number(d.dataset.index));
            auto = setInterval(moveToNext, 3000);
        });
    });

    updateSizes();
    setCenter();
    window.addEventListener("resize", updateSizes);

    auto = setInterval(moveToNext, 3000);
});
