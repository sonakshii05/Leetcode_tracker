function loadTheme() {
  const storedTheme = localStorage.getItem(STORAGE_KEY_THEME);
  const preferred = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(preferred);
}

function setTheme(theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  appState.theme = theme;
  localStorage.setItem(STORAGE_KEY_THEME, theme);
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  toggles.forEach(button => {
    button.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  });
}

function toggleTheme() {
  setTheme(appState.theme === 'dark' ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  toggles.forEach(button => {
    button.addEventListener('click', toggleTheme);
  });

  const navMenuButton = document.getElementById('navMenuButton');
  const navMenu = document.getElementById('navMenu');
  if (navMenuButton && navMenu) {
    navMenuButton.addEventListener('click', event => {
      event.stopPropagation();
      const open = navMenu.classList.toggle('open');
      navMenuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', event => {
      if (!navMenu.contains(event.target) && event.target !== navMenuButton) {
        navMenu.classList.remove('open');
        navMenuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }
});
