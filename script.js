let menuVisible = false
// funcion para ocultar o mostrar el menu 
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList =""
        menuVisible = false
    } else{
        document.getElementById("nav").classList="responsive"
        menuVisible = true
    }
}


function seleccionar() {
    // se oculta el menu una vez se seleccione una opcion 
    document.getElementById("nav").classList =""
    menuVisible = false
}
