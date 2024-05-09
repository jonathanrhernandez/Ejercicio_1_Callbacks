// 1. Muestra un mensaje en consola mediante un callback. La función que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.

console.log("***** Ejercicio 1 *****");

function showMessage(message, callback) {
    // Verificar si se proporcionó un callback válido
    if (typeof callback === 'function') {
        // Llamar al callback con el mensaje proporcionado
        callback(message);
    } else {
        console.error('Error: El callback no es una función válida');
    }
}

// Función de callback para mostrar el mensaje como console.warn
function showWarning(message) {
    console.warn('Mensaje de advertencia:', message);
}

// Función de callback para mostrar el mensaje como console.log
function showLog(message) {
    console.log('Mensaje:', message);
}

// Función de callback para mostrar el mensaje como console.info
function showInfo(message) {
    console.info('Mensaje informativo:', message);
}

// Ejemplo de uso
showMessage('Hola Mundo', showWarning);
showMessage('Este es un mensaje de prueba', showLog);
showMessage('Información importante', showInfo);


/* 2. Crear una función que reciba como argumento una variable de cualquier tipo y un callback. La función debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido. typeof */

console.log("***** Ejercicio 2 *****");

function checkDataType(variable, callback) {
    // Obtener el tipo de dato de la variable
    const dataType = typeof variable;
    
    // Llamar al callback con el tipo de dato y el contenido de la variable
    if (typeof callback === 'function') {
        callback(dataType, variable);
    } else {
        console.error('Error: El callback no es una función válida');
    }
}

// Función de callback para imprimir el tipo de dato y el contenido de la variable
function printDataTypeAndContent(type, content) {
    console.log('Tipo de dato:', type);
    console.log('Contenido:', content);
}

// Ejemplos de uso
checkDataType(42, printDataTypeAndContent);
checkDataType('Hola', printDataTypeAndContent);
checkDataType(true, printDataTypeAndContent);
checkDataType([1, 2, 3], printDataTypeAndContent);
checkDataType({ key: 'value' }, printDataTypeAndContent);

/* 3 Crear una función que reciba como argumentos, dos números y un callback. Según el callback que se pase a la función, se devuelve la suma de los dos números, la resta de los dos números, la multiplicación de los dos números o división. */

console.log("***** Ejercicio 3 *****");

function operateNumbers(num1, num2, callback) {
    let result;
    // Verificar si el callback es una función válida
    if (typeof callback === 'function') {
        // Realizar la operación correspondiente según el callback
        if (callback === sum) {
            result = num1 + num2;
        } else if (callback === subtract) {
            result = num1 - num2;
        } else if (callback === multiply) {
            result = num1 * num2;
        } else if (callback === divide) {
            // Verificar si el divisor es distinto de cero
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.error('Error: División por cero');
                return;
            }
        } else {
            console.error('Error: Callback no válido');
            return;
        }
        // Devolver el resultado a través del callback
        callback(result);
    } else {
        console.error('Error: El callback no es una función válida');
    }
}

// Funciones

// Función de callback para la suma
function sum(result) {
    console.log('Suma:', result);
}

// Función de callback para la resta
function subtract(result) {
    console.log('Resta:', result);
}

// Función de callback para la multiplicación
function multiply(result) {
    console.log('Multiplicación:', result);
}

// Función de callback para la división
function divide(result) {
    console.log('División:', result);
}

operateNumbers(5, 3, sum); // Suma: 8
operateNumbers(5, 3, subtract); // Resta: 2
operateNumbers(5, 3, multiply); // Multiplicación: 15
operateNumbers(5, 0, divide); // Error: División por cero
operateNumbers(10, 2, divide); // División: 5
 /* 4.  Escribe una función que reciba una cadena de caracteres y debe devolver, mediante un callback, la cadena de caracteres en mayúsculas o en minúsculas.
ordenSuperior("PejeLagarto", minus); -> pejelagarto ordenSuperior("PejeLagarto", mayus); -> PEJELAGARTO */

console.log("***** Ejerccio 4 *****");

function orderHigher(text, callback) {
    // Verificar si el callback es una función válida
    if (typeof callback === 'function') {
        // Llamar al callback con la cadena de caracteres transformada
        callback(text);
    } else {
        console.error('Error: El callback no es una función válida');
    }
}

// Función de callback para convertir a minúsculas
function toLowercase(text) {
    console.log(text.toLowerCase());
}

// Función de callback para convertir a mayúsculas
function toUppercase(text) {
    console.log(text.toUpperCase());
}

// Ejemplos de uso
orderHigher("PejeLagarto", toLowercase); // pejelagarto
orderHigher("PejeLagarto", toUppercase); // PEJELAGARTO

/* 5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos) EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades mayores a dos horas (hacer la comparación en horas) regresar el nuevo array mediante un callback. */

console.log("***** Ejercicio 5 *****");

function filterTimeGreaterThanTwoHours(times, callback) {
    // Filtrar las cantidades de tiempo mayores a dos horas (120 minutos)
    const filteredTimes = times.filter(time => time > 120);
    // Llamar al callback con el nuevo arreglo
    callback(filteredTimes);
}

// Función de callback para mostrar el nuevo arreglo
function displayFilteredTimes(filteredTimes) {
    console.log('Cantidades de tiempo mayores a dos horas:', filteredTimes);
}

// Arreglo de cantidades de tiempo en minutos
const times = [120, 80, 200, 100];

// Llamada a la función con el arreglo y el callback
filterTimeGreaterThanTwoHours(times, displayFilteredTimes);

