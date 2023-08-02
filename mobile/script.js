const menuToggle = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const dropdownToggle = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  dropdownContent.classList.remove('show');
});

dropdownToggle.addEventListener('click', (event) => {
  event.preventDefault();
  dropdownContent.classList.toggle('show');
});

// Close the mobile menu and dropdown if clicked outside of them
document.addEventListener('click', (event) => {
  if (!event.target.matches('.menu-icon') && !event.target.closest('.navbar')) {
    mobileMenu.classList.remove('active');
  }

  if (!event.target.closest('.dropdown')) {
    dropdownContent.classList.remove('show');
  }
});
