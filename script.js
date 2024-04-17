function toggleMenu() {
/* here we are selecting the menu-links class and the 
hamburger-icon class and storing them in the menu and icon 
variables.*/
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}