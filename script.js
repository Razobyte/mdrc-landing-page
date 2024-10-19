// script.js
const carousel = document.getElementById('carousel');
const slides = carousel.children;
let currentIndex = 0;

// Auto loop function
function startCarousel() {
  setInterval(() => {
    // Calculate the width of one slide
    const slideWidth = slides[0].clientWidth;
    
    // Move to the next slide
    currentIndex = (currentIndex + 1) % slides.length;
    
    // Apply the translation for sliding effect
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }, 3000); // Change slide every 3 seconds
}

// Start the carousel when the page loads
window.onload = startCarousel;
