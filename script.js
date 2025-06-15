// Mobile Menu Toggle
const menuBtn = document.querySelector('.nav__menu-btn');
const navLinks = document.querySelector('.nav__links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Back to Top Button
const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Loading Animation
window.addEventListener('load', () => {
  const loading = document.querySelector('.loading');
  loading.style.display = 'none';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
      // Close mobile menu after clicking a link
      navLinks.classList.remove('active');
    }
  });
});

// Form Validation
const contactForm = document.querySelector('.contact__form');
const newsletterForm = document.querySelector('.newsletter__form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your newsletter subscription logic here
  alert('Thank you for subscribing to our newsletter!');
  newsletterForm.reset();
});

// Gallery Image Click Handler
document.querySelectorAll('.gallery__item').forEach(item => {
  item.addEventListener('click', () => {
    // Add your gallery image click logic here
    // For example, open in a lightbox
  });
});

// FAQ Accordion
document.querySelectorAll('.faq__item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
}); 