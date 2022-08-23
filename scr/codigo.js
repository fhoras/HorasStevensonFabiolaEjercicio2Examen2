let boton = document.querySelector("#botonEnvio");
let cantidad = document.getElementById("cantidad");
boton.addEventListener("click", () => {
  cantidad = Number(cantidad.value);
  //verificarNulos(cantidad);
  console.log(cantidad);
  // Agregar tantos botones como indique la cantidad
  //let divContenedor = document.querySelector("#");

  for (let i = 1; i <= cantidad; i++) {
    let miDiv = document.getElementById("divContenedor");
    let boton = document.createElement("button");
    boton.type = "button";
    boton.innerHTML = "Boton Nuevo " + i;
    boton.className = "botonAgregar";
    miDiv.append(boton);
  }
});
