// nea.js - NEA pages JS
document.addEventListener('DOMContentLoaded', () => {

  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const navItems = document.querySelector('.navitems');
  if (hamburger && navItems) {
    hamburger.addEventListener('click', () => {
      navItems.classList.toggle('show');
    });
  }

  // Password <-> QR toggle
  const loginContainer = document.getElementById('login-container');
  if (loginContainer) {
    const qrButtons = loginContainer.querySelectorAll('.show-qr');
    qrButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        loginContainer.classList.add('qr-active');
      });
    });

    const pwButtons = loginContainer.querySelectorAll('.show-pw');
    pwButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        loginContainer.classList.remove('qr-active');
      });
    });
  }

});
