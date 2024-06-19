/*=============== PRELOADER ===============*/
const preloader = document.querySelector(".preloader");

window.addEventListener("DOMContentLoaded", () => {
  if (!document.body.classList.contains("loaded")) {
    document.body.classList.add("loaded");
    preloader.classList.add("loaded"); 
  }
});

window.onload = () => {
  // Scroll to the top when all external resources are loaded
  window.scrollTo(0, 0);
};

/*=============== HEADER ===============*/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

/*=============== SCROLL UP ===============*/
// Function to check scroll position and show/hide scroll-to-top button
const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");

  if (window.scrollY >= 350) {
    scrollUpButton.classList.add("show-scroll");
  } else {
    scrollUpButton.classList.remove("show-scroll");
  }
};

// Function to scroll smoothly to the top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Event listener for scroll event
window.addEventListener("scroll", scrollUp);

// Event listener for click event on scroll-to-top button
document.getElementById("scroll-up").addEventListener("click", (event) => {
  event.preventDefault();
  scrollToTop();
});

// Disable scroll restoration
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

// Customize the reveal animation for different elements
sr.reveal(`.section-header`, {
  delay: 600,
});
sr.reveal(`.nav, .img-items, .social-icon, .service-card, .footer-links, .footer-col`, {
  origin: "top",
  interval: 100,
});
sr.reveal(`.section-description, .gallery-btn`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.hero-img`, { origin: "top" });

/*=============== BOOKING FORM ===============*/
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/*=============== SWIPER SLIDE ===============*/
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  loop: true,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});


