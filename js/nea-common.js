//nea-common.js
//handles shared nea behaviours like navbar active state and logout

//set active link based on current page
const currentPage = window.location.pathname.split('/').pop();

const navLinks = document.querySelectorAll('.nea-nav a');
navLinks.forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});

//logout button handler (redirect only, auth handled elsewhere)
const logoutBtn = document.querySelector('.logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}