// Variables para el NAV
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');
let nav = document.getElementById('ain-nav');

// Variables para los botones - VENTAS
let btnFigura = document.getElementById('producto-btn-figura');
let btnFunkoPop = document.getElementById('producto-btn-funkoPop');
let btnJuegos = document.getElementById('producto-btn-juegos');
let btnAccesorios = document.getElementById('producto-btn-accesorios');

// Variables para los DIVS - VENTAS
let divFigura = document.getElementById('contenedor-producto-figura');
let divFunkoPop = document.getElementById('contenedor-producto-funkoPop');
let divJuegos = document.getElementById('contenedor-producto-juegos');
let divAccesorios = document.getElementById('contenedor-producto-accesorios');

// NAV
abrir.addEventListener('click', () => {
    nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
    nav.classList.remove("visible");
});

// Contenedor Ventas
function mostrarContenedorVenta(id) {
    let contenedorVentas = document.querySelectorAll('.producto');
    contenedorVentas.forEach(function(value) {
        value.style.display = 'none';
    });

    let contenedorSeleccionado = document.getElementById(id);

    if (contenedorSeleccionado) {
        contenedorSeleccionado.style.display = 'grid';
    }
}

btnFigura.addEventListener('click', function() {
    mostrarContenedorVenta('contenedor-producto-figura');
});

btnFunkoPop.addEventListener('click', function() {
    mostrarContenedorVenta('contenedor-producto-funkoPop');
});

btnJuegos.addEventListener('click', function() {
    mostrarContenedorVenta('contenedor-producto-juegos');
});

btnAccesorios.addEventListener('click', function() {
    mostrarContenedorVenta('contenedor-producto-accesorios');
});
