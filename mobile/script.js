const menuToggle = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const servicesDropdownToggle = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  dropdownContent.style.maxHeight = null; // Reset the max-height when opening the mobile menu
});

servicesDropdownToggle.addEventListener('click', (event) => {
  event.preventDefault();
  if (window.innerWidth <= 768) {
    // Only toggle the dropdown if the screen is in mobile view
    dropdownContent.style.maxHeight = dropdownContent.style.maxHeight ? null : dropdownContent.scrollHeight + 'px';
  }
});

// Close the mobile menu and dropdown if clicked outside of them
document.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-icon') && !event.target.closest('.navbar')) {
    mobileMenu.classList.remove('active');
  }

  if (!event.target.closest('.dropdown')) {
    dropdownContent.style.maxHeight = null;
  }
});

