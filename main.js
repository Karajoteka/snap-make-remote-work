// Mobile dropdown menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.dropdown-menu--container');
const closeIcon = document.querySelector('.close-icon');
const features = document.querySelector('#features');
const featuresDropdown = document.querySelector('#features-dropdown');
const company = document.querySelector('#company');
const companyDropdown = document.querySelector('#company-dropdown');

// Desktop navbar
const featuresDesktop = document.querySelector('.features');
const featuresDropdownDesktop = document.querySelector('.features-dropdown');
const companyDesktop = document.querySelector('.company');
const companyDropdownDesktop = document.querySelector('.company-dropdown');


mobileMenuIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('inactive');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.add('inactive');
})

features.addEventListener('click', () => {
  featuresDropdown.classList.toggle('inactive');
  features.classList.toggle('active');
});

company.addEventListener('click', () => {
  companyDropdown.classList.toggle('inactive');
  company.classList.toggle('active');
});

featuresDesktop.addEventListener('click', () => {
  featuresDropdownDesktop.classList.toggle('inactive');
  featuresDesktop.classList.toggle('active');
});

companyDesktop.addEventListener('click', () => {
  companyDropdownDesktop.classList.toggle('inactive');
  companyDesktop.classList.toggle('active');
});