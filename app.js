const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
});
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.querySelector('.sidebar');
menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});



