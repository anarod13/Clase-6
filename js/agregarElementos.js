function agregarEspacioMiembros(numeroDeMiembros) {
    const listaMiembros = document.querySelector("#lista-miembros");
    for (let i = 0; i < numeroDeMiembros; ++i) {
        listaMiembros.appendChild(agregarMiembro());
    }
    document.querySelector(".calculos-edades").style.display = "block";
    document.querySelector("#resetear").style.display = "block";
    return;
}

function agregarMiembro() {
    let miembro = document.createElement("li");
    miembro.className = "miembro";
    let labelNombre = document.createElement("label");
    labelNombre = document.createTextNode("Nombre: ");
    let nombre = document.createElement("input");
    nombre.placeholder = "Nombre";
    nombre.className = "nombres";
    nombre.type = "text";
    let labelEdad = document.createElement("label");
    labelEdad.className = "label-edades";
    labelEdad = document.createTextNode("Edad: ");
    let edad = document.createElement("input");
    edad.placeholder = "Edad";
    edad.className = "edades";
    edad.type = "number";
    miembro.appendChild(labelNombre);
    miembro.appendChild(nombre);
    miembro.appendChild(labelEdad);
    miembro.appendChild(edad);

    return miembro
}

function agregarSalarios(miembro) {
    let salarios = document.createElement("div");
    salarios.className = "campo-salario";
    let labelSalario = document.createElement("label");
    labelSalario = document.createTextNode("Salario Anual: ");
    let salarioMiembro = document.createElement("input");
    salarioMiembro.placeholder = "Salario";
    salarioMiembro.type = "Number";
    salarioMiembro.className = "salarios";
    salarios.appendChild(labelSalario);
    salarios.appendChild(salarioMiembro);
    miembro.appendChild(salarios);
    return;
}

function agregarError(error) {
    const $error = document.createElement("li");
    $error.innerText = error;
    $error.className = "errores-mostrados";

    let $errores = document.querySelector("#errores");
    return $errores.appendChild($error);
}