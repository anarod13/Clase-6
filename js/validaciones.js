function validarNumeroDeMiembros(numero) {
    if (numero === 0 || "") {
        return "Es necesario ingresar la cantidad de miembros";
    }
    if (numero < 2) {
        return "El número de miembros no puede ser menor a 2"
    }
    if (numero > 10) {
        return "El numero de miembros no puede ser superior a 10";
    }

    return "";
}


function validarNombre(nombre) {
    if (nombre === "") {
        return "El nombre no puede estar vacío";
    }
    if (!/^[A-z]+$/i.test(nombre)) {
        return "El nombre solo puede incluir letras";
    }
    if (nombre.length < 3) {
        return "El nombre debe tener por lo menos 3 caracteres"
    }
    if (nombre.length > 30) {
        return "El nombre no puede exceder los 30 caracteres";
    }
    return "";
}

function validarEdad(edad) {
    if (edad === "") {
        return "El campo edad no puede estar vacío";
    }
    if (edad % 1 !== 0) {
        return "La edad no puede ser un número decimal";
    }
    if (edad > 110) {
        return "La edad no puede ser mayor a 110";
    }
    if (!/^[0-9]/.test(edad)) {
        return "La edad solo puede incluir números";
    }
    return;
}

function validarSalario(salario) {
    if (salario === "") {
        return "";
    } else if (!/^[0-9]/.test(salario)) {
        return "El campo salario solo puede incluir números";
    }
    if (salario.length > 10) {
        return "El campo salarios no puede exceder los 10 caracteres";
    }
    return "";
}

function listarErrores(erroresListados) {

    const $erroresListados = document.querySelectorAll(".errores-mostrados");
    $erroresListados.forEach($errorListado => {
        erroresListados.push($errorListado);
    })
    return erroresListados;

}

function chequearSiErrorExiste(error) {
    let erroresListados = [];
    listarErrores(erroresListados);
    if (erroresListados.every(errorListado =>
            errorListado.innerText !== error)) {
        return agregarError(error);
    }
}

function removerErrorCorregido(error) {
    let erroresListados = [];
    listarErrores(erroresListados);
    erroresListados.forEach(function(errorListado) {
        if (errorListado.innerText !== error) {
            errorListado.remove();

        }
    });
    return;
}

function manejoErrores(elementos, $elementos, validacion) {
    let cantErrores = 0;
    elementos.forEach(function(elemento, i) {
        let error = validacion(elemento);
        if (error) {
            chequearSiErrorExiste(error);
            $elementos[i].classList.add("error");
            cantErrores++;
        } else {
            $elementos[i].classList.remove("error");
        }
    });

    return cantErrores;
}