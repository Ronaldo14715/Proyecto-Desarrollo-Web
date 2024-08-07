document.addEventListener('DOMContentLoaded', function() {
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
    
    const productos = document.querySelectorAll('.producto');
    productos.forEach(producto => {
        producto.style.display = 'none';
    });

    const figuras = document.getElementById('contenedor-producto-figura');
    if (figuras) {
        figuras.style.display = 'grid';
    }

    // NAV
    const abrir = document.querySelector('#abrir');
    const cerrar = document.querySelector('#cerrar');
    const nav = document.querySelector('#main-nav');

    abrir.addEventListener('click', () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener('click', () => {
        nav.classList.remove("visible");
    });

    function mostrarContenedorVenta(id, btn) {
        let contenedorVentas = document.querySelectorAll('.producto');
        contenedorVentas.forEach(function(value) {
            value.style.display = 'none';
        });

        let contenedorSeleccionado = document.getElementById(id);
        if (contenedorSeleccionado) {
            contenedorSeleccionado.style.display = 'grid';
        }

        let botones = document.querySelectorAll('button[id^="producto-btn-"]');
        botones.forEach(function(value) {
            value.classList.remove('visible');
        });

        btn.classList.add('visible');
    }

    btnFigura.addEventListener('click', function() {
        mostrarContenedorVenta('contenedor-producto-figura', this);
    });

    btnFunkoPop.addEventListener('click', function() {
        mostrarContenedorVenta('contenedor-producto-funkoPop', this);
    });

    btnJuegos.addEventListener('click', function() {
        mostrarContenedorVenta('contenedor-producto-juegos', this);
    });

    btnAccesorios.addEventListener('click', function() {
        mostrarContenedorVenta('contenedor-producto-accesorios', this);
    });
});
