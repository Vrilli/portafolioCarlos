let menuVisible = false;
// funcion para ocultar o mostrar el menu
function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  // se oculta el menu una vez se seleccione una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}

// Obtener el enlace de descarga por su id
const downloadLink = document.getElementById('download-link');

// Obtener el botón de descarga por su id
const downloadButton = document.getElementById('download-button');

// Agregar un event listener al botón de descarga
downloadButton.addEventListener('click', (event) => {
  // Evitar que se abra el enlace en el navegador
  event.preventDefault();

  // Descargar el archivo automáticamente
  downloadLink.click();
});
