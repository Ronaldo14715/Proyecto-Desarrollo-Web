const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('#ain-nav');

abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
});



let btnFigura = document.getElementById('producto-btn-figura');
let btnFunkoPop = document.getElementById('producto-btn-funkoPop');
let btnJuegos = document.getElementById('producto-btn-juegos');
let btnAccesorios = document.getElementById('producto-btn-accesorios');

let divFigura = document.getElementById('contenedor-producto-figura');
let divFunkoPop = document.getElementById('contenedor-producto-funkoPop');
let divjuegos = document.getElementById('contenedor-producto-juegos');
let divAccesorios = document.getElementById('contenedor-producto-accesorios');

btnFigura.addEventListener('click', () => {
    
});