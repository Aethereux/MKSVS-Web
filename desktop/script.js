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