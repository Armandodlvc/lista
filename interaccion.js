
const boton = document.getElementById("boton");
const input = document.getElementById("input");
const tasks = document.getElementById("tasks");

boton.addEventListener("click", () => {
  const texto = input.value; 

  if (texto.trim() !== "") { 

    const newtask = document.createElement("p");
    newtask.textContent = texto;
    newtask.classList.add("color"); 
    tasks.appendChild(newtask); 

    input.value = ""; 
  }
});