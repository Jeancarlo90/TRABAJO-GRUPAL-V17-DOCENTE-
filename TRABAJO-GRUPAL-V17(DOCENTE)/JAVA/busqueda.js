class Profesor {
    constructor(nombre, nombreDeUniversidad, fecha) {
      this.nombre = nombre;
      this.nombreDeUniversidad = nombreDeUniversidad;
      this.fecha = fecha;
    }
  }


  var profesor1 = new Profesor(
    "Juan Lopez",
    "Universidad de Lima",
    "2023-05-26"
  );
  var profesor2 = new Profesor(
    "Pedro ramirez",
    "Universidad de Lima ",
    "2023-05-27"
  );
  var profesor3 = new Profesor(
    "Marcelo Otiniano",
    "Universidad de Lima",
    "2023-05-28"
  );
  var profesor4 = new Profesor(
    "Marcelo Jimenez",
    "Universidad de Lima",
    "2023-05-29"
  );

  var formularioBusqueda = document.getElementById("formulario-busqueda");
  var resultadoBusqueda = document.getElementById("resultado-busqueda");

  formularioBusqueda.addEventListener("submit", function (e) {
    e.preventDefault();

    var busqueda = document.getElementById("busqueda").value.toLowerCase();

    // Verifica si el término de búsqueda coincide con los datos de los profesores
    var resultados = [];
    if (
      profesor1.nombre.toLowerCase().includes(busqueda) ||
      profesor1.nombreDeUniversidad.toLowerCase().includes(busqueda) ||
      profesor1.fecha.includes(busqueda)
    ) {
      resultados.push(profesor1);
    }
    if (
      profesor2.nombre.toLowerCase().includes(busqueda) ||
      profesor2.nombreDeUniversidad.toLowerCase().includes(busqueda) ||
      profesor2.fecha.includes(busqueda)
    ) {
      resultados.push(profesor2);
    }
    if (
      profesor3.nombre.toLowerCase().includes(busqueda) ||
      profesor3.nombreDeUniversidad.toLowerCase().includes(busqueda) ||
      profesor3.fecha.includes(busqueda)
    ) {
      resultados.push(profesor3);
    }
    if (
      profesor4.nombre.toLowerCase().includes(busqueda) ||
      profesor4.nombreDeUniversidad.toLowerCase().includes(busqueda) ||
      profesor4.fecha.includes(busqueda)
    ) {
      resultados.push(profesor4);
    }

    resultadoBusqueda.innerHTML = "";

  
    if (resultados.length > 0) {
      for (var i = 0; i < resultados.length; i++) {  
        var profesor = resultados[i]
        const Boton = document.createElement("button");
        var hoy = parseInt(String(profesor.fecha).substring(8, 10));
        var divResultado = document.createElement("div");
        Boton.className = "BtnReserva"
        divResultado.classList.add("resultado");
        divResultado.innerHTML =
          "<h3>" +
          profesor.nombre +
          "</h3>" +
          "<p>Nombre de Universidad: " +
          profesor.nombreDeUniversidad +
          "</p>" +
          "<p>Fecha: " +
          profesor.fecha +
          hoy+
          "</p>";
        Boton.innerHTML = "Reservar"
        resultadoBusqueda.appendChild(divResultado);
        resultadoBusqueda.appendChild(Boton);
        Boton.onclick = function(){
              window.location.href = "index.html";
        }
      }
    } else {
      resultadoBusqueda.innerHTML = "<p>No se encontraron resultados.</p>";
    }
  });

