function probarValidarNumeroDeMiembros() {
    console.assert(validarNumeroDeMiembros(0) === "Es necesario ingresar la cantidad de miembros",
        "Validar numero de miembros no validó que se ingrese un valor");
    console.assert(validarNumeroDeMiembros(15) === "El numero de miembros no puede ser superior a 10",
        "Validar número de miembros no validó que el número de miembros no exceda las 10 personas");
    console.assert(validarNumeroDeMiembros(1) === "El número de miembros no puede ser menor a 2",
        "Validar número de miembros no validó que el número de miembros no sea inferior a 2")
}

probarValidarNumeroDeMiembros();

function probarValidarNombre() {
    console.assert(validarNombre("") === "El nombre no puede estar vacío",
        "Validar nombre no validó que el nombre no esté vacío", );
    console.assert(validarNombre("2141'.,") === "El nombre solo puede incluir letras",
        "Validar nombre no validó que el nombre solo incluya letras");
    console.assert(validarNombre("as") === "El nombre debe tener por lo menos 3 caracteres",
        "Validar nombre no validó que el nombre tenga mínimo tres caracteres");
    console.assert(validarNombre("sdfjpsslkshvsvhskdhvslddhsldvhskdvhsld") === "El nombre no puede exceder los 30 caracteres",
        "Validar nombre no validó que el nombre no exceda los 30 caracteres");

}
probarValidarNombre();

function probarValidarEdad() {
    console.assert(validarEdad("") === "El campo edad no puede estar vacío",
        "Validar edad no validó que el campo edad no este vacío");
    console.assert(validarEdad(3.2) === "La edad no puede ser un número decimal",
        "Validar edad no validó que la edad no se un número decimal");
    console.assert(validarEdad(120) === "La edad no puede ser mayor a 110",
        "Validad edad no validó que la edad no sea mayor a 110");
}

probarValidarEdad();

function probarValidarSalario() {
    console.assert(validarSalario("skjfsd.,.") === "El campo salario solo puede incluir números",
        "Validar salarios no validó que el campo salario solo incluya números");

    console.assert(validarSalario("37284792474") === "El campo salarios no puede exceder los 10 caracteres",
        "Validar salarios no validó que el campo no exceda los 10 caracteres");

}
probarValidarSalario();