// JavaScript to handle the dropdown on click for smaller screens
const dropdownToggle = document.querySelector('.dropdown a');
const dropdownContent = document.querySelector('.dropdown-content');

// Toggle the dropdown on click
dropdownToggle.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.dropdown a') && !event.target.matches('.dropdown-content')) {
    dropdownContent.classList.remove('show');
  }
});


// Modify JavaScript to handle mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close the mobile menu if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-icon') && !event.target.matches('#menu')) {
    menu.classList.remove('active');
  }
});

