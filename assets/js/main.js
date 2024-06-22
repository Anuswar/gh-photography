/*=============== PRELOADER ===============*/
const preloader = document.querySelector(".preloader");

window.onload = () => {
  // Scroll to the top when all external resources are loaded
  window.scrollTo(0, 0);

  // Remove the preloader
  if (!document.body.classList.contains("loaded")) {
    document.body.classList.add("loaded");
    preloader.classList.add("loaded");
  }
};

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

/*=============== HEADER ===============*/
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu open/close on menu button click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close menu when clicking on a navigation link
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Close menu when pressing Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
    // Close menu after clicking on a navigation link
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });
});

// Function to add active class to navigation links
function activateNavLink(currentId) {
  let navLinksArray = document.querySelectorAll('header nav a');
  navLinksArray.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
}

// Highlight the current section in view on page load
function highlightCurrentSection() {
  let scrollPosition = window.scrollY;
  let sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (
      scrollPosition >= section.offsetTop - 150 &&
      scrollPosition < section.offsetTop + section.offsetHeight - 150
    ) {
      let currentId = section.id;
      activateNavLink(currentId);
    }
  });

  // Special case for the header itself
  let header = document.getElementById('home');
  if (header && scrollPosition < header.offsetHeight) {
    activateNavLink('home');
  }
}

// Trigger initial highlighting of current section
highlightCurrentSection();

// Listen for scroll events to highlight current section dynamically
window.addEventListener('scroll', highlightCurrentSection);

/*=============== BOOKING FORM ===============*/
// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function validateForm(event) {
  event.preventDefault();
  
  // Clear previous error messages and styles
  document.querySelectorAll('.error').forEach(function(el) {
    el.textContent = '';
  });
  
  document.querySelectorAll('.input-error').forEach(function(el) {
    el.classList.remove('input-error');
  });
  
  let valid = true;
            
  // Name validation
  const name = document.getElementById('name').value;
  const nameError = document.getElementById('nameError');
  const nameInput = document.getElementById('name');
  if (!name.match(/^[a-zA-Z\s]+$/)) {
    nameError.textContent = 'Please enter a valid name (letters and spaces only).';
    nameInput.classList.add('input-error');
    valid = false;
  }
            
  // Email validation
  const email = document.getElementById('email').value;
  const emailError = document.getElementById('emailError');
  const emailInput = document.getElementById('email');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    emailInput.classList.add('input-error');
    valid = false;
  }
            
  // Mobile number validation
  const number = document.getElementById('number').value;
  const numberError = document.getElementById('numberError');
  const numberInput = document.getElementById('number');
  const numberPattern = /^[0-9]{10}$/;
  if (!numberPattern.test(number)) {
    numberError.textContent = 'Please enter a valid 10-digit mobile number.';
    numberInput.classList.add('input-error');
    valid = false;
  }
           
  // If all validations pass, submit the form
  if (valid) {
    document.querySelector('form').submit();
  }  
}

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