document.addEventListener('DOMContentLoaded', function() {
    const ratingModal = document.getElementById('rating-modal');
    const ratingStars = document.querySelectorAll('.rating-stars .star');
    const calificarBtn = document.querySelector('.calificar-btn');
    const calificacionSpan = document.querySelector('.calificacion');
  
    // Función para abrir el modal de calificación
    function openRatingModal() {
      ratingModal.style.display = 'block';
    }
  
    // Función para cerrar el modal de calificación
    function closeRatingModal() {
      ratingModal.style.display = 'none';
    }
  
    // Función para calificar la cita
    function calificarCita(calificacion) {
      calificacionSpan.textContent = calificacion;
      closeRatingModal();
    }
  
    // Asignar evento click a los botones de calificar cita
    const calificarButtons = document.querySelectorAll('.calificar-cita');
    calificarButtons.forEach(function(button) {
      button.addEventListener('click', openRatingModal);
    });
  
    // Asignar evento click a las estrellas de calificación
    ratingStars.forEach(function(star) {
      star.addEventListener('click', function() {
        const value = parseInt(star.getAttribute('data-value'));
        ratingStars.forEach(function(star) {
          star.classList.remove('selected');
        });
        for (let i = 0; i < value; i++) {
          ratingStars[i].classList.add('selected');
        }
      });
    });
  
    // Asignar evento click al botón de calificar en el modal
    calificarBtn.addEventListener('click', function() {
      const selectedStar = document.querySelector('.rating-stars .star.selected');
      if (selectedStar) {
        const calificacion = selectedStar.getAttribute('data-value');
        calificarCita(calificacion);
      }
    });
  
    // Cerrar el modal si se hace click fuera de él
    window.addEventListener('click', function(event) {
      if (event.target === ratingModal) {
        closeRatingModal();
      }
    });
  });
  