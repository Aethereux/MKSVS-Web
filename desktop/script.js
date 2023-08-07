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
function slideImages(images, currentIndex) {
  images.forEach((img, i) => {
    if (i === currentIndex) {
      img.style.opacity = '1';
    } else {
      img.style.opacity = '0';
    }
  });
}

const containers = [
  document.querySelectorAll('.sliding-container img'),
  document.querySelectorAll('.sliding-container-keydupe1 img'),
  document.querySelectorAll('.sliding-container-keydupe2 img')
];

const indices = [0, 0, 0]; // Initialize indices for each container class

function nextImage(containerIndex) {
  slideImages(containers[containerIndex], indices[containerIndex]);
  indices[containerIndex] = (indices[containerIndex] + 1) % containers[containerIndex].length;
}

setInterval(() => nextImage(0), 2000); // Change image for .sliding-container every 5 seconds (5000 milliseconds)
setInterval(() => nextImage(1), 2000); // Change image for .sliding-container-keydupe1 every 1 second (1000 milliseconds)
setInterval(() => nextImage(2), 2500); // Change image for .sliding-container-keydupe2 every 1.5 seconds (1500 milliseconds)
