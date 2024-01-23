const carrito = []

const contenedorEventos = document.querySelector("#eventos-disponibles")
const botonAgregar = document.querySelector("#button")
const cantidadAdulto = document.querySelector("#cantidad-adultos")
const cantidadMenor = document.querySelector("#cantidad-menores") 

function cargarEventos() {
    eventos.forEach(evento => {
        contenedorEventos.innerHTML += `
        <option>"${evento.nombre}" - Adultos: $${evento.precioAdulto} - Menores: $${evento.precioMenor}</option>
    `    })
}
cargarEventos()

botonAgregar.addEventListener("click", () => {
    cantidadAdulto.forEach(adulto => {
        carrito.push(Number(adulto.value))
    });
 console.log(carrito)   
})
