window.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  const currentUser = getCurrentUser();
  if (currentUser) {
    window.location.href = 'dashboard.html';
    return;
  }

  const loginTab = document.getElementById('loginTab');
  const signupTab = document.getElementById('signupTab');
  const nameGroup = document.getElementById('nameGroup');
  const authForm = document.getElementById('authForm');
  const authSubmit = document.getElementById('authSubmit');
  const authMessage = document.getElementById('authMessage');
  const demoSignIn = document.getElementById('demoSignIn');

  let authMode = 'login';

  function updateFormMode() {
    nameGroup.style.display = authMode === 'signup' ? 'block' : 'none';
    authSubmit.textContent = authMode === 'signup' ? 'Create Account' : 'Login';
    loginTab.classList.toggle('button-primary', authMode === 'login');
    loginTab.classList.toggle('button-secondary', authMode !== 'login');
    signupTab.classList.toggle('button-primary', authMode === 'signup');
    signupTab.classList.toggle('button-secondary', authMode !== 'signup');
    authMessage.textContent = '';
  }

  loginTab.addEventListener('click', () => {
    authMode = 'login';
    updateFormMode();
  });

  signupTab.addEventListener('click', () => {
    authMode = 'signup';
    updateFormMode();
  });

  authForm.addEventListener('submit', event => {
    event.preventDefault();
    authMessage.textContent = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password || (authMode === 'signup' && !name)) {
      authMessage.textContent = 'Please fill out all required fields.';
      return;
    }
    if (!email.includes('@')) {
      authMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    if (password.length < 6) {
      authMessage.textContent = 'Password must be at least 6 characters.';
      return;
    }

    if (authMode === 'signup') {
      const result = createUser(name, email, password);
      if (result.error) {
        authMessage.textContent = result.error;
        return;
      }
      setCurrentUser(result.user);
      window.location.href = 'dashboard.html';
    } else {
      const existing = getUserByEmail(email);
      if (!existing || existing.password !== password) {
        authMessage.textContent = 'Invalid email or password.';
        return;
      }
      ensureUserProgress(existing);
      setCurrentUser(existing);
      window.location.href = 'dashboard.html';
    }
  });

  demoSignIn.addEventListener('click', () => {
    const demo = createDemoUser();
    setCurrentUser(demo);
    window.location.href = 'dashboard.html';
  });

  updateFormMode();
});
