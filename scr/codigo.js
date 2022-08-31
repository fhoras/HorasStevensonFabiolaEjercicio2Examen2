let boton = document.querySelector("#botonEnvio");

let cantidad = document.getElementById("cantidad");
boton.addEventListener("click", () => {
  let cantidadValue = Number(cantidad.value);
  //verificarNulos(cantidad);
  console.log(cantidadValue);
  // Agregar tantos botones como indique la cantidad
  //let divContenedor = document.querySelector("#");

  for (let i = 1; i <= cantidadValue; i++) {
    let miDiv = document.getElementById("divContenedor");
    let div = document.createElement("div");
    div.innerHTML = "Div Nuevo " + i;
    div.className = "botonAgregar";
    miDiv.append(div);
  }
});
