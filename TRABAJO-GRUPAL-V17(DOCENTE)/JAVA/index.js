document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var fecha = document.getElementById('fecha').value;
    var curso = document.getElementById('curso').value;

    var informacion = {
      fecha: fecha,
      curso: curso
    };

    console.log(informacion);
  });