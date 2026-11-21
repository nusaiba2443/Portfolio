(() => {
  const body = document.body;
  const toggle = document.getElementById('themeToggle');
  const storedTheme = localStorage.getItem('nya-theme');
  if (storedTheme === 'light') body.dataset.theme = 'light';
  const updateThemeIcon = () => {
    toggle.innerHTML = body.dataset.theme === 'light'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-regular fa-sun"></i>';
  };
  updateThemeIcon();
  toggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('nya-theme', body.dataset.theme);
    updateThemeIcon();
  });

  const navMenu = document.getElementById('mainNav');
  document.querySelectorAll('#mainNav .nav-link').forEach(link => link.addEventListener('click', () => {
    if (window.bootstrap && navMenu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
  }));

  document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      const filter = button.dataset.filter;
      document.querySelectorAll('.project-item').forEach(card => {
        card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.kind !== filter);
      });
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => backTop.classList.toggle('visible', window.scrollY > 500), { passive: true });
  backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(data.get('subject'));
    const bodyText = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    document.getElementById('formFeedback').textContent = 'Opening your email application…';
    window.location.href = `mailto:nusaiba2443m@gmail.com?subject=${subject}&body=${bodyText}`;
  });
})();