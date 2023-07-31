// JavaScript to handle the dropdown on click for both desktop and mobile screens
const dropdownToggle = document.querySelector('.dropdown > a'); // Select the SERVICES link directly
const dropdownContent = document.querySelector('.dropdown-content');

// Show the dropdown content when clicking on the "SERVICES" link
dropdownToggle.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior (navigating to the href)
  dropdownContent.classList.toggle('show');
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});
