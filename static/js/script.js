document.addEventListener('DOMContentLoaded', () => {

  // Requerimiento 1: Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
  const enviaFloresLink = document.getElementById('envia-flores-link');
  
  if (enviaFloresLink) {
    enviaFloresLink.addEventListener('mouseenter', () => {
      enviaFloresLink.textContent = 'Envía Bouquets';
    });

    enviaFloresLink.addEventListener('mouseleave', () => {
      enviaFloresLink.textContent = 'Envía Flores';
    });
  }

  // Requerimiento 2: Al hacer clic en el botón de "Iniciar Sesión", muestra alerta con bienvenida
  const loginBtn = document.getElementById('login-btn');
  const alertOverlay = document.getElementById('custom-alert');
  const alertOkBtn = document.getElementById('alert-ok-btn');

  if (loginBtn && alertOverlay && alertOkBtn) {
    loginBtn.addEventListener('click', () => {
      alertOverlay.style.display = 'flex';
    });

    alertOkBtn.addEventListener('click', () => {
      alertOverlay.style.display = 'none';
    });
  }

  // Requerimiento 3: Al hacer clic en los botones "Comprar", desaparece ese botón
  const buyButtons = document.querySelectorAll('.buy-btn');

  buyButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('hidden');
    });
  });

});