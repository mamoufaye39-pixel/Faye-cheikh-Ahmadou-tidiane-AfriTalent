
const darkModeToggle = document.getElementById('darkModeToggle');
const bodyElement = document.body;
function updateDarkModeIcon(isDark) {
  if (!darkModeToggle) return; 

  const icon = darkModeToggle.querySelector('i');
  if (isDark) {
    icon.classList.remove('bi-moon-fill');
    icon.classList.add('bi-sun-fill');
  } else {
    icon.classList.remove('bi-sun-fill');
    icon.classList.add('bi-moon-fill');
  }
}

const savedTheme = localStorage.getItem('afritalent-theme');

if (savedTheme === 'dark') {
  bodyElement.classList.add('dark-mode');
  updateDarkModeIcon(true);
} else {
  updateDarkModeIcon(false);
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function () {
    bodyElement.classList.toggle('dark-mode');
    const isDarkNow = bodyElement.classList.contains('dark-mode');
    localStorage.setItem('afritalent-theme', isDarkNow ? 'dark' : 'light');
    updateDarkModeIcon(isDarkNow);
  });
}


const mainNavbar = document.getElementById('mainNavbar');
const SCROLL_THRESHOLD = 50; 

function handleNavbarScroll() {
  if (!mainNavbar) return;

  if (window.scrollY > SCROLL_THRESHOLD) {
    mainNavbar.classList.add('navbar-scrolled');
  } else {
    mainNavbar.classList.remove('navbar-scrolled');
  }
}

window.addEventListener('scroll', handleNavbarScroll);

handleNavbarScroll();


const backToTopButton = document.getElementById('backToTop');
const BACK_TO_TOP_THRESHOLD = 300; 

function handleBackToTopVisibility() {
  if (!backToTopButton) return;

  if (window.scrollY > BACK_TO_TOP_THRESHOLD) {
    backToTopButton.classList.add('visible');
  } else {
    backToTopButton.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleBackToTopVisibility);
handleBackToTopVisibility(); 
if (backToTopButton) {
  backToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.textContent = new Date().getFullYear();
}