const botonesReservar = document.querySelectorAll(".btn-reservar");
const mensajeReserva = document.getElementById("mensaje-reserva");

botonesReservar.forEach(function (boton) {
  boton.addEventListener("click", function () {
    mensajeReserva.textContent = "Reserva realizada correctamente";
    mensajeReserva.style.display = "block";
    mensajeReserva.style.backgroundColor = "#d4edda";
    mensajeReserva.style.color = "#155724";
    mensajeReserva.style.padding = "10px";
    mensajeReserva.style.marginTop = "15px";
  });
});

const categorias = ["Conciertos", "Ferias", "Deportes"];
const btnCategorias = document.getElementById("btn-categorias");
const listaCategorias = document.getElementById("lista-categorias");

btnCategorias.addEventListener("click", function () {
  listaCategorias.innerHTML = "";
  categorias.forEach(function (cat) {
    const item = document.createElement("li");
    item.textContent = cat;
    listaCategorias.appendChild(item);
  });
});
