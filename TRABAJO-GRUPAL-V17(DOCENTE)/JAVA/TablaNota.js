// Obtén la referencia a la tabla
var tabla = document.getElementById('tabla');

// Obtén todas las celdas de la tabla
var celdas = tabla.getElementsByTagName('td');

// Recorre todas las celdas y aplica el color correspondiente
for (var i = 0; i < celdas.length; i++) {
  var valor = parseInt(celdas[i].innerHTML); // Obtiene el valor de la celda y lo convierte a entero

  // Aplica el color correspondiente según el valor
  if (valor >= 0 && valor <= 11) {
    celdas[i].style.backgroundColor = "#F72B2B";
  } else if (valor > 11 && valor <= 15) {
    celdas[i].style.backgroundColor = "#FDFD87";
  } else if (valor >= 16 && valor <= 20) {
    celdas[i].style.backgroundColor = "#7DF38D";
  }
}