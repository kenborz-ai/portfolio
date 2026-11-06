 
    // Mobile menu toggle
    const toggle = document.querySelector('.menu-toggle');
    const links = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    // Close menu after tapping a link
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  