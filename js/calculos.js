function calcularPromedio(elementos, categoria) {
    let acumulado = 0;
    let cantidadDeElementos = 0;
    elementos.forEach(elemento => {
        if (elemento !== "") {
            acumulado += Number(elemento);
            cantidadDeElementos++;
        }
    });

    let promedio = acumulado / cantidadDeElementos;
    return `El promedio de ${categoria} es de ${promedio}`;
}

function calcularMenor(nombres, elementos, categoria) {
    let elementoMenor = elementos[0];
    let personaMenor;

    elementos.forEach(function(elemento, i) {
        if (elemento === "") { elemento = 0; }
        if (elemento <= elementoMenor) {
            elementoMenor = elemento;
            personaMenor = nombres[i];
        }

    });
    return `La persona de menor ${categoria} es ${personaMenor}, con ${elementoMenor}`;
}

function calcularMayor(nombres, elementos, categoria) {
    let elementoMayor = elementos[0];
    let personaMayor;
    elementos.forEach(function(elemento, i) {
        if (elemento >= elementoMayor) {
            elementoMayor = elemento;
            personaMayor = nombres[i];
        }
    });
    return `La persona de mayor ${categoria} es ${personaMayor}, con ${elementoMayor}`;
}

function calcularEdades(nombres, edades) {

    document.querySelector("#promedio-edad").innerText = calcularPromedio(edades, "edad");
    document.querySelector("#edad-mayor").innerText = calcularMayor(nombres, edades, "edad");
    document.querySelector("#edad-menor").innerText = calcularMenor(nombres, edades, "edad");
    document.querySelector("#comparacion-edades").style.display = "block";
    document.querySelector("#campo-salarios").style.display = "block";
}

function calcularSalarios(nombres, salarios) {
    document.querySelector("#promedio-salario").innerText = calcularPromedio(salarios, "salarios");
    document.querySelector("#salario-mayor").innerText = calcularMayor(nombres, salarios, "salario anual");
    document.querySelector("#salario-menor").innerText = calcularMenor(nombres, salarios, "salario anual");
    document.querySelector("#comparacion-salarios").style.display = "block";
}