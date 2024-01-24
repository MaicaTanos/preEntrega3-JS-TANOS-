let carrito = []

const contenedorEventos = document.querySelector("#eventos-disponibles")
const botonAgregar = document.querySelector("#button")
const botonVerCarrito = document.querySelector("#ver-carrito")
const carritoContenedor = document.querySelector("#carrito-contenedor")

function mostrarEventos() {
    eventos.forEach(evento => {
        contenedorEventos.innerHTML += `
        <option>"${evento.nombre}" - Adultos: $${evento.precioAdulto} - Menores: $${evento.precioMenor}</option>
    `    })
    botonAgregar.addEventListener("click", () => {
        const cantidadAdulto = document.querySelector("#cantidad-adultos").valueAsNumber || 0
        const cantidadMenor = document.querySelector("#cantidad-menores").valueAsNumber || 0
        const eventoSeleccionado = eventos[contenedorEventos.selectedIndex]
        agregarAlCarrito(eventoSeleccionado, cantidadAdulto, cantidadMenor)
    })
}
mostrarEventos()
function agregarAlCarrito(evento, cantidadAdulto, cantidadMenor) {
    
    if (eventoYaEnCarrito(evento.id)) {
        carrito.forEach(item => {
            if (item.eventoId === evento.id) {
                item.cantidadAdulto += cantidadAdulto;
                item.cantidadMenor += cantidadMenor;
            }
        })
    } else {
        const item = {
            eventoId: evento.id,
            nombre: evento.nombre,
            precioAdulto: evento.precioAdulto,
            precioMenor: evento.precioMenor,
            cantidadAdulto,
            cantidadMenor
        }

        carrito.push(item);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    verCarrito();
}

botonVerCarrito.addEventListener("click", () => { 
    verCarrito()
})

function verCarrito() {
    carritoContenedor.innerHTML = ''

    carrito.forEach(item => {
        const itemsDiv = document.createElement('div')
        itemsDiv.innerHTML = `
        <p>${item.nombre}</p>
        <p>Adultos: ${item.cantidadAdulto}</p>
        <p>Menores: ${item.cantidadMenor}</p>
        <p>Total: ${calcularTotal(item)}</p>
        `
        carritoContenedor.appendChild(itemsDiv)
    })
}

function calcularTotal(item) {
    return (item.cantidadAdulto * (item.precioAdulto || 0)) + (item.cantidadMenor * (item.precioMenor || 0))    
}
function eventoYaEnCarrito(eventoId) {
    return carrito.some(item => item.eventoId === eventoId)
}

const carritoGuardado = localStorage.getItem('carrito')

if (carritoGuardado) {
    carrito = JSON.parse(carritoGuardado);
} else {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

        
verCarrito()

