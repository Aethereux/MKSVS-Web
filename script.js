const menuToggle = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const servicesDropdownToggle = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');

servicesDropdownToggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (window.innerWidth <= 768) {
    // Only toggle the dropdown if the screen is in mobile view
    const dropdown = servicesDropdownToggle.parentNode;
    dropdown.classList.toggle('clicked'); // Remove the class 'show'
  }
});

// Sliding shts
const images = document.querySelectorAll('.sliding-container img');
let index = 0;

function slideImages() {
  images.forEach((img, i) => {
    if (i === index) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
  index = (index + 1) % images.length;
}

function nextImage() {
  slideImages();
}

setInterval(nextImage, 5000); // Change image every 5 seconds (5000 milliseconds)
