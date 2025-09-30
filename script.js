// Smooth scroll animation is already handled by CSS (scroll-behavior)
// Add navbar shrink on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.padding = "0.5rem 5%";
  } else {
    nav.style.padding = "1rem 5%";
  }
});
