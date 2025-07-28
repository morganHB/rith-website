document.addEventListener('DOMContentLoaded', () => {
  let path = window.location.pathname.split('/').pop();
  if (!path || path === '') {
    path = 'index.html';
  }
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // For root or index.html, treat both as same
    if ((href === 'index.html' && path === 'index.html') || href === path) {
      link.classList.add('active');
    }
  });
});
