document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const user = document.getElementById('usuario').value.trim();
    const pass = document.getElementById('clave').value.trim();

    if (user === 'cenfo' && pass === '123') {
      
      window.location.href = 'landing.html';
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  });
});
