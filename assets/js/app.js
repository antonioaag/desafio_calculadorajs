precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let total = document.querySelector(".valor-total")
//console.log(total)
let cantidad =document.querySelector(".cantidad")
//console.log(cantidad)
let sumar = document.querySelector("#sumar")
//console.log(sumar)
let restar = document.querySelector("#restar")

sumar.addEventListener("click", function () {
    cantidad.innerHTML = parseInt(cantidad.innerHTML) + 1
    total.innerHTML = precio * parseInt(cantidad.innerHTML)
})

restar.addEventListener("click", function () {
    cantidad.innerHTML = parseInt(cantidad.innerHTML) - 1
    total.innerHTML = precio * parseInt(cantidad.innerHTML)
})