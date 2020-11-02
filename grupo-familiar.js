/*TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs + labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre - existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo"
que empiece el proceso nuevamente, borrando los inputs ya creados(investigar cómo en MDN).*/

let nombres;

document.querySelector("#ingresar-miembros").onclick = function() {
    const numeroDeMiembros = Number(document.querySelector("#miembros-familia").value);
    const listaMiembros = document.querySelector("#agregar-miembros");
    for (let i = 0; i < numeroDeMiembros; ++i) {
        listaMiembros.appendChild(crearMiembro());

    }


    document.querySelector("#boton-calcular").style.display = "block";

    return false;
}

function crearMiembro() {
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

document.querySelector("#calcular-edades").onclick = function() {
    const edades = document.querySelectorAll(".edades");
    nombres = document.querySelectorAll(".nombres");

    document.querySelector("#promedio-edad").innerText = calcularPromedioEdades(edades);
    document.querySelector("#edad-mayor").innerText = calcularMayor(nombres, edades, "edad");
    document.querySelector("#edad-menor").innerText = calcularMenor(nombres, edades, "edad");
    document.querySelector("#comparacion-edades").style.display = "block";
    document.querySelector("#campo-salarios").style.display = "block";
    return false;

}

function calcularPromedioEdades(edades) {
    let acumulado = 0;
    for (let i = 0; i < edades.length; i++) {
        acumulado += Number(edades[i].value);
    }
    let promedio = acumulado / edades.length;
    return `El promedio de edades es de ${promedio}`;
}

function calcularMenor(nombres, elementos, categoria) {
    let elementoMenor = Number(elementos[0].value);
    let personaMenor;
    for (let i = 0; i < elementos.length; ++i) {
        if (Number(elementos[i].value) <= elementoMenor) {
            elementoMenor = Number(elementos[i].value);
            personaMenor = String(nombres[i].value);
        };
    }
    return `La persona de menor ${categoria} es ${personaMenor}, con ${elementoMenor}`;
}

function calcularMayor(nombres, elementos, categoria) {
    let elementoMayor = Number(elementos[0].value);
    let personaMayor;
    for (let i = 0; i < elementos.length; ++i) {
        if (Number(elementos[i].value) >= elementoMayor) {
            elementoMayor = Number(elementos[i].value);
            personaMayor = nombres[i].value;
        }
    }
    return `La persona de mayor ${categoria} es ${personaMayor}, con ${elementoMayor}`;
}

document.querySelector("#resetear").onclick = function() {
    return reset();
}

function reset() {
    const miembros = document.querySelectorAll(".miembro");
    for (i = 0; i < miembros.length; i++) {
        miembros[i].remove();
    }
    document.querySelector("#boton-calcular").style.display = "none";
    document.querySelector("#comparacion-edades").style.display = "none";
    document.querySelector("#campo-salarios").style.display = "none";
    return;
}

document.querySelector("#agregar-salarios").onclick = function() {

    const miembros = document.querySelectorAll(".miembro");
    for (let i = 0; i < miembros.length; i++) {

        agregarSalarios(miembros[i]);
    }
    return false;
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
document.querySelector("#quitar-salarios").onclick = function() {
    const campoSalarios = document.querySelectorAll(".campo-salario");
    ocultarCampo(campoSalarios);


    return false;
}

function ocultarCampo(campo) {
    for (i = 0; i < campo.length; i++) {
        campo[i].style.display = "none";
    }
    return;
}

document.querySelector("#calcular-salarios").onclick = function() {
    const salarios = document.querySelectorAll(".salarios");
    document.querySelector("#promedio-salario").innerText = calcularPromedioSalarios(salarios);
    document.querySelector("#salario-mayor").innerText = calcularMayor(nombres, salarios, "salario anual");
    document.querySelector("#salario-menor").innerText = calcularMenor(nombres, salarios, "salario anual");
    return false;
}

function calcularPromedioSalarios(salarios) {
    let acumulado = 0;
    let cantidadDeSalarios = 0;
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value !== "") {
            acumulado += Number(salarios[i].value);
            cantidadDeSalarios++;
        }
    }
    let promedio = acumulado / cantidadDeSalarios;
    return `El promedio de salarios es de ${promedio}`;
}