window.addEventListener('DOMContentLoaded', () => {
  enforceAuth();
  loadTheme();
  document.getElementById('logoutButton').addEventListener('click', () => {
    clearCurrentUser();
    window.location.href = 'index.html';
  });
});
