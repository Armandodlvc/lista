const form = document.getElementById("taskForm");
const input = document.getElementById("input");
const tasks = document.getElementById("tasks");
const btnEliminarPrimera = document.getElementById("btnEliminarPrimera");

form.onsubmit = function(event) {
  event.preventDefault();

  const texto = input.value.trim();
  if (texto !== "") {
    const lineaArriba = document.createElement("hr");
    lineaArriba.style.margin = "0";
    tasks.appendChild(lineaArriba);

    const contenedor = document.createElement("div");
    contenedor.classList.add("task-container");

    const newtask = document.createElement("ul");
    newtask.textContent = texto;
    newtask.classList.add("task");

    const circulo = document.createElement("button");
    circulo.classList.add("terminado");

    circulo.onclick = function() {
      circulo.classList.toggle("terminadoverde");
    };

    contenedor.appendChild(newtask);
    contenedor.appendChild(circulo);

    tasks.appendChild(contenedor);

    const lineaAbajo = document.createElement("hr");
    lineaAbajo.style.margin = "0";
    tasks.appendChild(lineaAbajo);

    input.value = "";
  }
};

