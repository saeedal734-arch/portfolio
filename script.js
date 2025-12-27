const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('myLinks');

function toggleMenu() {
  if (!navLinks) {
    return;
  }

  navLinks.classList.toggle('show');
}

if (menuButton && navLinks) {
  menuButton.addEventListener('click', (event) => {
    event.preventDefault();
    toggleMenu();
  });
}

const typedTarget = document.querySelector('.text');

if (typedTarget && window.Typed) {
  new Typed('.text', {
    strings: ['Dashboarding', 'Data Storytelling', 'Analytics'],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1200,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });
}
