const form = document.getElementById("taskForm");
const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

window.onload = function () {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

  contador = tareasGuardadas.length;

  tareasGuardadas.forEach((value) => {
    crearTarea(value.id, value.texto, value.esTerminado);
  });
};

let contador = 0;

function guardarTarea(id, texto, esTerminado = false) {
  const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];

  // Buscas id en tareasGuardadas, si existe lo actualizas, si no existe lo logras
  const objectoExistente = tareasGuardadas.find((value) => value.id === id);

  if (objectoExistente) {
    objectoExistente.esTerminado = esTerminado; 
  } else {
    // PUSH agrega nueva tarea
    tareasGuardadas.push({
      id: id,
      texto: texto,
      esTerminado: esTerminado,
    });
  }

  localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));
  contador++;
}

function crearTarea(id, texto, esTerminado = false) {
  const contenedor = document.createElement("li");
  contenedor.classList.add("task-container");
  contenedor.dataset.Id = id;

  //agregar las ul
  const newtask = document.createElement("p");
  newtask.textContent = texto;
  newtask.classList.add("task");

  // el ciculo que se vuelve verde
  const circulo = document.createElement("button");
  circulo.classList.add("terminado");

  if (esTerminado) {
    newtask.classList.toggle("tachar");
    circulo.classList.toggle("terminadoverde");

    if (circulo.classList.contains("terminadoverde")) {
      circulo.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 24 24  "><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path></svg>';
    } else {
      circulo.innerHTML = "";
    }
  }

  circulo.onclick = function () {
    newtask.classList.toggle("tachar");
    circulo.classList.toggle("terminadoverde");

    if (circulo.classList.contains("terminadoverde")) {
      console.log(contenedor.dataset.Id)
      guardarTarea(parseInt(contenedor.dataset.Id), texto, true);
      circulo.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 24 24  "><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path></svg>';
    } else {
      guardarTarea(parseInt(contenedor.dataset.Id), texto, false);
      circulo.innerHTML = "";
    }
  };

  //eliminar
  const close = document.createElement("button");
  close.onclick = function () {
    tasks.removeChild(contenedor);
  };
  close.classList.add("X-closer");
  close.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 30 30"><path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path></svg> ';

  // Add the elements to my container
  contenedor.appendChild(circulo);
  contenedor.appendChild(newtask);
  contenedor.appendChild(close);

  tasks.appendChild(contenedor);
}

form.onsubmit = function (event) {
  event.preventDefault();

  const texto = input.value.trim();
  if (texto !== "") {
    crearTarea(contador, texto);
    guardarTarea(contador, texto);

    input.value = "";
  }
};
