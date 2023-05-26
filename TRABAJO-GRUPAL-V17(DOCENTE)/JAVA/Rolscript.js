document.addEventListener('DOMContentLoaded', function() {
    var userRole = 'student'; // Aquí puedes cambiar el rol del usuario ('student' o 'teacher')
  
    // Verificar el rol del usuario y mostrar el contenido correspondiente
    if (userRole === 'student') {
      document.getElementById('studentContent').classList.add('visible');
      document.getElementById('')
    } else if (userRole === 'teacher') {
      document.getElementById('teacherContent').classList.add('visible');
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var userRoles = null;
  
    // Obtener elementos de la interfaz
    var loginButton = document.getElementById('loginButton');
    var loginModal = document.getElementById('loginModal');
    var loginForm = document.getElementById('loginForm');
    var roleModal = document.getElementById('roleModal');
    var studentButton = document.getElementById('studentButton');
    var teacherButton = document.getElementById('teacherButton');
    var closeButton = document.getElementsByClassName('close');

  });
