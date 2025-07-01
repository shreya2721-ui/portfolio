// ===== Slideshow Effect =====
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".slide");

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = "none";
    });

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display current slide
    slides[slideIndex - 1].style.display = "block";

    // Change every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow on page load
showSlides();



// ===== Circular Progress Bars Animation =====
function setProgress(circle, percent) {
  const radius = 50; // same as r in SVG circles
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.circle-progress').forEach(circle => {
    const svg = circle.parentElement;
    const textElem = svg.querySelector('.skill-text');
    const percent = parseInt(textElem.textContent);
    setProgress(circle, percent);
  });
});
// ===== Theme Toggle =====
const themeToggle = document.getElementById("theme-toggle");
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Switch icon between moon and sun
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
// ===== Handle Contact Form Submission =====
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent actual form submission

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // For now, just log them (or use for further processing)
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  // Optional: Show success alert
  alert("Thank you for your message, " + name + "!");

  // Optional: Clear form
  this.reset();
});
