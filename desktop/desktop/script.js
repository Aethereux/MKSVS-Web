// JavaScript to handle the dropdown on click for smaller screens
const dropdownToggle = document.querySelector('.dropdown a');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown a')) {
    dropdownContent.classList.remove('show');
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