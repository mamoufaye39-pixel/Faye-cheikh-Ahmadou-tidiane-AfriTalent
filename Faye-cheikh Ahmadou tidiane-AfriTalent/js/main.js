
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
function animateCounter(element) {
  const target = parseInt(element.getAttribute('data-target'), 10);
  const duration = 2000; 
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); 

    const currentValue = Math.floor(progress * target);
    element.textContent = currentValue.toLocaleString('fr-FR'); 

    if (progress < 1) {
      
      requestAnimationFrame(updateCount);
    } else {
      
      element.textContent = target.toLocaleString('fr-FR');
    }
  }

  requestAnimationFrame(updateCount);
}

const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {

    if (entry.isIntersecting) {
      animateCounter(entry.target);
      
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5 
});


statNumbers.forEach(function (counter) {
  counterObserver.observe(counter);
});

const fadeSections = document.querySelectorAll('.fade-in-section');

const fadeObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15 
});

fadeSections.forEach(function (section) {
  fadeObserver.observe(section);
});


const filterButtons = document.querySelectorAll('.filter-btn');
const freelanceItems = document.querySelectorAll('.freelance-item');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (btn) {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    const filterValue = button.getAttribute('data-filter');
    freelanceItems.forEach(function (item) {
      if (filterValue === 'tous') {
        item.style.display = 'block';
      } else if (item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


const submitBtn = document.getElementById('submitBtn');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.add('is-invalid');
  if (input) input.classList.remove('is-valid');
  if (error) error.classList.add('visible');
}

function showSuccess(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input) input.classList.remove('is-invalid');
  if (input) input.classList.add('is-valid');
  if (error) error.classList.remove('visible');
}

if (submitBtn) {
  submitBtn.addEventListener('click', function () {

    let isFormValid = true; 

    const nom     = document.getElementById('inputNom');
    const prenom  = document.getElementById('inputPrenom');
    const email   = document.getElementById('inputEmail');
    const sujet   = document.getElementById('inputSujet');
    const message = document.getElementById('inputMessage');

    if (!nom || nom.value.trim() === '') {
      showError('inputNom', 'errorNom');
      isFormValid = false;
    } else {
      showSuccess('inputNom', 'errorNom');
    }

    if (!prenom || prenom.value.trim() === '') {
      showError('inputPrenom', 'errorPrenom');
      isFormValid = false;
    } else {
      showSuccess('inputPrenom', 'errorPrenom');
    }
    if (!email || !emailRegex.test(email.value.trim())) {
      showError('inputEmail', 'errorEmail');
      isFormValid = false;
    } else {
      showSuccess('inputEmail', 'errorEmail');
    }

    if (!sujet || sujet.value === '') {
      showError('inputSujet', 'errorSujet');
      isFormValid = false;
    } else {
      showSuccess('inputSujet', 'errorSujet');
    }

    if (!message || message.value.trim().length < 20) {
      showError('inputMessage', 'errorMessage');
      isFormValid = false;
    } else {
      showSuccess('inputMessage', 'errorMessage');
    }
    if (isFormValid) {
      const successMessage = document.getElementById('successMessage');
      if (successMessage) {
        successMessage.classList.add('visible');
        nom.value = '';
        prenom.value = '';
        email.value = '';
        sujet.value = '';
        message.value = '';
        [nom, prenom, email, sujet, message].forEach(function (field) {
          field.classList.remove('is-valid');
        });
      }
    }
  });
}