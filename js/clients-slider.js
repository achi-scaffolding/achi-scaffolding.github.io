(function() {
  const track = document.querySelector(".clients-slider .slide-track");
  const slides = Array.from(track.querySelectorAll(".client-logo"));
  const slideCount = slides.length;

  // Duplicate slides for seamless looping
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  const slideWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
  let position = 0;
  const speed = 0.5; // pixels per frame
  let requestId;

  function animate() {
    position += speed;
    if (position >= slideWidth * slideCount) position -= slideWidth * slideCount;
    track.style.transform = `translateX(-${position}px)`;
    requestId = requestAnimationFrame(animate);
  }

  // Start the loop
  animate();

  // Arrow buttons
  document.querySelector(".clients-slider .arrow.next").addEventListener("click", () => {
    position += slideWidth;
    if (position >= slideWidth * slideCount) position -= slideWidth * slideCount;
    track.style.transform = `translateX(-${position}px)`;
  });

  document.querySelector(".clients-slider .arrow.prev").addEventListener("click", () => {
    position -= slideWidth;
    if (position < 0) position += slideWidth * slideCount;
    track.style.transform = `translateX(-${position}px)`;
  });

  // Update slideWidth on resize
  window.addEventListener("resize", () => {
    const newWidth = slides[0].offsetWidth + parseFloat(getComputedStyle(slides[0]).marginRight);
    if (newWidth !== slideWidth) location.reload(); // simple fix
  });
})();
