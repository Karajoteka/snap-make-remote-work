const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.dropdown-mobile-menu--container');
const closeIcon = document.querySelector('.close-icon');
const features = document.querySelector('#features');
const featuresDropdown = document.querySelector('#features-dropdown');
const company = document.querySelector('#company');
const companyDropdown = document.querySelector('#company-dropdown');

mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('inactive');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('inactive');
})

features.addEventListener('click', () => {
  featuresDropdown.classList.toggle('inactive');
});

company.addEventListener('click', () => {
  companyDropdown.classList.toggle('inactive');
});