const carrito = []

const eventosDisponibles = document.querySelector("#eventos-disponibles")
const verCarrito = document.querySelector("#ver-carrito")
const cantidadAdulto = document.querySelector("#cantidad-adultos")
const totalAdulto = cantidadAdulto * eventos.precioAdulto
const cantidasMenor = document.querySelector("#cantidad-menores")
const totalMenor = cantidasMenor * eventos.precioMenor
const totalCompra = totalAdulto + totalMenor


verCarrito.addEventListener("click", () => {
    carrito.forEach((item) => {
        const div = document.createElement('div')
        div.classList.add("item")
        div.innerHTML += `
            <p>Evento: ${item.nombre}</p>
            <p>Adultos: ${cantidadAdulto}</p>
            <p>Menores: ${cantidasMenor}</p>
            <p>El total de tu compra es: ${totalCompra}    
    `
    })
    verCarrito.appendChild(div)
})


eventos.forEach((evento) => {
    eventosDisponibles.innerHTML += `
        <option>"${evento.nombre}" - Adultos: $${evento.precioAdulto} - Menores: $${evento.precioMenor} </option>
    `
    const button = document.querySelector("#button")
    button.addEventListener("click", () =>
    carrito.push(evento))

})
