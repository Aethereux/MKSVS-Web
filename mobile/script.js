// JavaScript to handle the dropdown on click for both desktop and mobile screens
const dropdownToggle = document.querySelector('.dropdown > a'); // Select the SERVICES link directly
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
