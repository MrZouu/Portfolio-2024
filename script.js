function toggleMenu() {
/* here we are selecting the menu-links class and the 
hamburger-icon class and storing them in the menu and icon 
variables.*/
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}


// Avoir la barre de navigation qui se cache en scrollant vers le bas et qui réapparait en scrollant vers le haut
// Sélectionne la barre de navigation
const nav = document.getElementById('desktop-nav');

// Stocke la position actuelle du scroll
let lastScrollTop = 0;

// Fonction pour détecter le mouvement du scroll
window.addEventListener('scroll', () => {
  // Récupère la nouvelle position du scroll
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Vérifie la direction du scroll et si le scroll est suffisamment important pour être pris en compte
  if (scrollTop > lastScrollTop && scrollTop > nav.clientHeight) {
    // Scroll vers le bas : masque la barre de navigation
    nav.style.transition = 'top 0.5s';
    nav.style.top = `-${nav.clientHeight}px`;
  } else {
    // Scroll vers le haut : affiche la barre de navigation
    nav.style.transition = 'top 0.5s';
    nav.style.top = '0';
  }

  // Met à jour la position du scroll précédente
  lastScrollTop = scrollTop;
});
