
import { barcelona, roma, paris, londres } from './ciudades.js'
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let  subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
//AGREGAR UN EVENTO CLICK A CADA ENLACE
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //remover enlaces
    enlaces.forEach(function (enlace) {
        enlace.classList.remove('active');
    });
    //agregar la clase "active" al enlace actual
    this.classList.add('active')
// obtener el contenido correspondiente segun el enlace actual
let contenido = obtenerContenido(this.textContent)
tituloElemento.innerHTML = contenido.titulo
subTituloElemento.innerHTML = contenido.subTitulo
parrafoElemento.innerHTML = contenido.parrafo
});
});
// funcion para traer la informacion correcta desde ciudad.js
function obtenerContenido(enlace){
let contenido = {
    'Barcelona': barcelona,
    'Roma': roma,
    'Paris': paris,
    'Londres': londres
};
return contenido [enlace];
}
