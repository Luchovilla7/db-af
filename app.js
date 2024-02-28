// Inicializa ScrollReveal.js
ScrollReveal().reveal('.titulo-seccion', {
    origin: 'left', // Establece el origen de la animación
    distance: '200px', // Establece la distancia del desplazamiento
    duration: 2000, // Establece la duración de la animación en milisegundos
    easing: 'ease', // Establece la función de interpolación de la animación
    reset: true, // Restablece la animación en cada desplazamiento
    viewFactor: 0.3 // Define la proporción de elemento visible antes de activar la animación
});

function mostrar(elem){
    //oculto todos los detalles
    detalles = document.getElementsByClassName("detalle");
    for(i=0; i < detalles.length; i++){
        detalles[i].style.display = "none";
    }

    links = document.querySelectorAll(".habilidades .menu li");
    for(i=0; i < detalles.length; i++){
        links[i].classList = "";
    }

    //visualizo el que corresponde en base al id
    id_skill = "info" + elem.id;
    document.getElementById(id_skill).style.display = "block";
    document.getElementById(elem.id).classList = "selected";
}

//Función para cerrar el menu
function cerrar(){
    document.getElementsByClassName("nav-menu")[0].style.top ="-100%";
}
//Función para abrir el menu
function verMenu(){
    document.getElementsByClassName("nav-menu")[0].style.top ="0";
}