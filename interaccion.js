const form = document.getElementById("taskForm");
const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

form.onsubmit = function(event) {
  event.preventDefault();

  const texto = input.value.trim();
  if (texto !== "") {
    const contenedor = document.createElement("div");
    contenedor.classList.add("task-container");

//agregar las ul
    const newtask = document.createElement("ul");
    newtask.textContent = texto;
    newtask.classList.add("task", "borde");

// el ciculo que se vuelve verde
    const circulo = document.createElement("button");
    circulo.classList.add("terminado");

     circulo.onclick = function() {
      circulo.classList.toggle("terminadoverde");
    };

    contenedor.appendChild(circulo);
    contenedor.appendChild(newtask);
    tasks.appendChild(contenedor);

    input.value = "";
  }
};

