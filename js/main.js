/*TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs + labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre - existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo"
que empiece el proceso nuevamente, borrando los inputs ya creados(investigar cómo en MDN).*/



document.querySelector("#ingresar-miembros").onclick = function() {

    const $miembrosFamilia = document.querySelector("#miembros-familia");
    const numeroDeMiembros = Number($miembrosFamilia.value);
    if (numeroDeMiembros !== 0) {
        reset();
    }

    const errorNumeroDeMiembros = validarNumeroDeMiembros(numeroDeMiembros);
    removerErrorCorregido(errorNumeroDeMiembros);
    if (errorNumeroDeMiembros === "") {
        agregarEspacioMiembros(numeroDeMiembros);
        $miembrosFamilia.classList.remove("error");

    } else {
        chequearSiErrorExiste(errorNumeroDeMiembros);
        $miembrosFamilia.className = "error";
    }


    return false;
}



document.querySelector("#calcular-edades").onclick = function() {
    const $nombres = document.querySelectorAll(".nombres");
    let nombres = [];
    convertirAArray($nombres, nombres);

    const $edades = document.querySelectorAll(".edades");
    let edades = [];
    convertirAArray($edades, edades);

    document.querySelector("#errores").innerHTML = "";
    let conteoErrores = 0;
    conteoErrores += manejoErrores(nombres, $nombres, validarNombre);
    conteoErrores += manejoErrores(edades, $edades, validarEdad);
    const isExito = (conteoErrores === 0);


    if (isExito) {
        calcularEdades(nombres, edades);
        document.querySelector(".calculos-edades").style.display = "none";
    }
    return false;

}

document.querySelector("#resetear").onclick = function() {
    return reset();
}

function reset() {
    const miembros = document.querySelectorAll(".miembro");
    miembros.forEach(miembro => miembro.remove())
    document.querySelector(".calculos-edades").style.display = "none";
    document.querySelector("#comparacion-edades").style.display = "none";
    document.querySelector("#campo-salarios").style.display = "none";
    document.querySelector("#errores").innerHTML = "";
    document.querySelector("#comparacion-salarios").style.display = "none";

    return;
}

document.querySelector("#agregar-salarios").onclick = function() {
    const campoSalarios = document.querySelectorAll(".campo-salario");

    if (campoSalarios[0] === undefined) {
        const miembros = document.querySelectorAll(".miembro");
        miembros.forEach(miembro => {
            agregarSalarios(miembro);
        });

    }
    document.querySelector("#calcular-salarios").style.display = "block";
    return false;
}


document.querySelector("#quitar-salarios").onclick = function() {
    const campoSalarios = document.querySelectorAll(".campo-salario");
    ocultarCampo(campoSalarios);
    let $resultadosSalarios = document.querySelectorAll(".resultados-salarios");
    $resultadosSalarios.forEach(resultado => resultado.innerText = "")

    return false;
}

document.querySelector("#calcular-salarios").onclick = function() {
    const $nombres = document.querySelectorAll(".nombres");
    let nombres = [];
    convertirAArray($nombres, nombres);

    const $salarios = document.querySelectorAll(".salarios");
    let salarios = [];
    convertirAArray($salarios, salarios);
    const haySalarios = salarios.some(salario => salario !== "")
    let conteoErrores = 0;


    document.querySelector("#errores").innerHTML = "";


    if (haySalarios) {
        conteoErrores += manejoErrores(salarios, $salarios, validarSalario);
    } else {
        agregarError("Debe ingresar por lo menos un salario");
    }
    const isExito = (conteoErrores === 0);

    if (isExito && haySalarios) {
        calcularSalarios(nombres, salarios);

        document.querySelector("#calcular-salarios").style.display = "none";
    }


    return false;
}

function ocultarCampo(campo) {
    campo.forEach(elemento => {
        elemento.remove();
    });
    return;
}

function convertirAArray(nodeList, array) {
    nodeList.forEach(node => {
        array.push(node.value);
    });
    return;
}