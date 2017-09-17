var texto = document.getElementById('txt_lineas');
var boton = document.getElementById('btn_darle');
var color_seleccionado = document.getElementById('slc_color');

var colorcito = "red"; // Primer valor.
color_seleccionado.addEventListener("change", function () {
  colorcito = color_seleccionado.value;
});
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById('dibujito');
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujoPorClick() {
  lienzo.clearRect(0, 0, d.width, d.height); // Limpiar Canvas.
  var yIni, xFin;
  var lineas = parseInt(texto.value);
  var espacio_entre_lineas = ancho / lineas;

  /* Dibujar las líneas de los bordes */
  dibujarLinea(colorcito, 0, 0, 0, ancho);
  dibujarLinea(colorcito, 0, ancho, ancho, ancho);

  for (var i = 0; i < lineas; i++) {
    yIni = espacio_entre_lineas * i;
    xFin = espacio_entre_lineas * (i + 1);
    dibujarLinea(colorcito, 0, yIni, xFin, 300);
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}
