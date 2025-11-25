document.addEventListener("DOMContentLoaded", function () {

    const items = Array.from(document.querySelectorAll("#testimonials .testimonial-item"));
    const dots = Array.from(document.querySelectorAll("#testimonials .testi-dots li"));

    if (!items.length) return;

    let currentIndex = 0;

    function normalize(i) {
        if (i < 0) return items.length - 1;
        if (i >= items.length) return 0;
        return i;
    }

    function update() {
        const left = normalize(currentIndex - 1);
        const right = normalize(currentIndex + 1);

        items.forEach((el, idx) => {
            el.classList.remove("is-center", "is-left", "is-right", "is-hidden");
            if (idx === currentIndex) el.classList.add("is-center");
            else if (idx === left) el.classList.add("is-left");
            else if (idx === right) el.classList.add("is-right");
            else el.classList.add("is-hidden");
        });

        dots.forEach((d,i) => d.classList.toggle("active", i === currentIndex));
    }

    function next() {
        currentIndex = normalize(currentIndex + 1);
        update();
    }

    // Dots click
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            currentIndex = i;
            update();
        });
    });

    // autoplay
    setInterval(next, 6000);

    update();
});
