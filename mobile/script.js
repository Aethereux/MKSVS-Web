// JavaScript to handle the dropdown on click for both desktop and mobile screens
const dropdownToggle = document.querySelector('.dropdown a');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});

// Toggle the mobile menu
function toggleMenu() {
  var menu = document.getElementById('menu');
  menu.classList.toggle('active');
}
