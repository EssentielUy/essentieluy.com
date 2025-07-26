document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.style.color = '#2575fc';
    // Simulación de envío exitoso
    setTimeout(() => {
      formMessage.textContent = '¡Gracias por tu mensaje! Te responderé pronto.';
      form.reset();
    }, 800);
  });

  // Función para manejar los botones de compra
  const botonesComprar = document.querySelectorAll('.btn-comprar');
  
  botonesComprar.forEach(function(boton) {
    boton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Abrir directamente la URL de Instagram
      window.open('https://www.instagram.com/essentiel_uy/', '_blank');
    });
  });
}); 