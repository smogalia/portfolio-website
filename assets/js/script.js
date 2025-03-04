const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function enableDarkMode() {
  body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
}

function disableDarkMode() {
  body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}

function toggleTheme() {
  if (body.classList.contains('dark-mode')) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
}

// Vérifier la préférence de l'utilisateur
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (savedTheme === 'dark' || (savedTheme === null && prefersDarkScheme.matches)) {
  enableDarkMode();
}

themeToggle.addEventListener('click', toggleTheme);



// Fonction pour afficher ou masquer le bouton
function toggleBackToTopButton() {
    const button = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
  }
  
  // Fonction pour remonter en haut de la page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Écouteurs d'événements
  window.addEventListener('scroll', toggleBackToTopButton);
  document.getElementById('back-to-top').addEventListener('click', scrollToTop);
  