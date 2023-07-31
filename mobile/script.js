// JavaScript to handle the dropdown on click for both desktop and mobile screens
const dropdownToggle = document.querySelector('.dropdown > a'); // Select the SERVICES link directly
const dropdownContent = document.querySelector('.dropdown-content');

dropdownToggle.addEventListener('click', () => {
  // Toggle the 'show' class for the dropdown content
  dropdownContent.classList.toggle('show');
  
  // Hide other open dropdowns
  const dropdowns = document.querySelectorAll('.dropdown-content');
  dropdowns.forEach((dropdown) => {
    if (dropdown !== dropdownContent) {
      dropdown.classList.remove('show');
    }
  });
});

// Close the dropdown if clicked outside of it
window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});
