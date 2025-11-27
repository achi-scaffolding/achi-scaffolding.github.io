document.addEventListener("DOMContentLoaded", () => {

    // 1️⃣ REMOVE PREVIOUS BAD CLONES BEFORE ANYTHING ELSE
    document.querySelectorAll(".testi-track > .testimonial-item").forEach(item => {
        if (!item.querySelector(".testimonial-card")) item.remove();
    });

    // 2️⃣ NOW GET THE CLEAN ORIGINAL SLIDES
    const track = document.querySelector(".testi-track");
    const original = Array.from(document.querySelectorAll(".testimonial-item"));
    const dots = document.querySelectorAll(".testi-dots li");

    let index = 3; // true center once clones added
    let auto;

    // 3️⃣ CLONE FOR INFINITE LOOP
    const clonesBefore = original.slice(-3).map(item => item.cloneNode(true));
    const clonesAfter = original.slice(0, 3).map(item => item.cloneNode(true));

    clonesBefore.forEach(cl => track.prepend(cl));
    clonesAfter.forEach(cl => track.append(cl));

    const all = Array.from(document.querySelectorAll(".testimonial-item"));
    let slideWidth = 0;

    // 4️⃣ UPDATE SIZES
    function updateSizes() {
        slideWidth = all[0].offsetWidth + 40;
        track.style.transition = "none";
        track.style.transform = `translateX(-${slideWidth * index}px)`;
    }

    // 5️⃣ SET CENTER CARD
    function setCenter() {
        all.forEach(s => s.classList.remove("center"));
        all[index].classList.add("center");

        dots.forEach(d => d.classList.remove("active"));
        const realDot = (index - 3 + original.length) % original.length;
        dots[realDot].classList.add("active");
    }

    // 6️⃣ AUTOPLAY NEXT SLIDE
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

    // 7️⃣ DOT CLICK
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

    // 8️⃣ INIT
    updateSizes();
    setCenter();
    window.addEventListener("resize", updateSizes);
    auto = setInterval(moveToNext, 3000);
});
