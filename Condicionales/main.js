//Primera parte

//Solicitamos al usuario que responda la pregunta
let respuesta = prompt("¿Eres bellisimo o bellisima?");

//Para evitar problemas convertimos la respuesta en minúsculas
respuesta = respuesta.toLowerCase();

//Verificamos la respuesta y respondemos
if (respuesta === "si" || respuesta === "sí"){
    console.log("Ciertamente");
    alert("Ciertamente");
} else if (respuesta === "no"){
    console.log("No te creo");
    alert("No te creo")
} else {
    console.log("Respuesta no válida, responde 'si' o 'no' por favor.");
    alert("Respuesta no válida, responde 'si' o 'no' por favor");
}

//Segunda parte

//Solicitamos al usuario que ingrese un número
let numero = parseInt(prompt("Ingrese un número por favor"));

//Se verifica si el número ingresado es divisible entre dos y mostramos el resultado

if (numero % 2 === 0){
    console.log (`${numero} es divisible entre dos.`);
    alert (`${numero} es divisible entre dos.`);
} else {
    console.log(`${numero} no es divisible entre dos.`);
    alert (`${numero} no es divisible entre dos.`);
}

//Tercera parte

//Solicitamos el ingreso de un nuevo número
let nuevoNumero = parseInt(prompt("Por favor, ingrese otro número"));

//Verificamos si el número ingresado es par o impar y respondemos

if (nuevoNumero % 2 === 0) {
    console.log(`${nuevoNumero} es un número par`)
    alert (`${nuevoNumero} es un número par`)
} else {
    console.log(`${nuevoNumero} no es un número par`)
    alert (`${nuevoNumero} no es un número par`)
}

//Cuarta parte

//Solicitamos al usuario que ingrese su número de cliente

let numeroCliente = parseInt (prompt("Por favor, ingresa tu número de cliente"));

//Verificamos si el número de cliente es 1000 y mostramos la respuesta

if (numeroCliente === 1000){
    console.log ("¡Felicidades, ganaste el premio!");
    alert ("¡Felicidades, ganaste el premio!");
} else {
    console.log ("Sigue participando");
    alert ("Sigue participando");
}

//Quinta parte

//Solicitamos al usuario que ingrese el primer número
let primerNumero = parseFloat(prompt("Por favor ingresa el primer número"));

//Le pedimos al usuario que ingrese el segundo número
let segundoNumero = parseFloat(prompt("Ingresa el segundo número por favor"));

//Comparamos ambos número y respondemos cúal es el número menor

if (primerNumero < segundoNumero){
    console.log(`${primerNumero} es menor que ${segundoNumero}`);
    alert (`${primerNumero} es menor que ${segundoNumero}`);
} else if (segundoNumero < primerNumero) {
    console.log(`${segundoNumero} es menor que ${primerNumero}`);
    alert (`${segundoNumero} es menor que ${primerNumero}`);
} else {
    console.log("Los números son iguales, por favor ingresa dos números diferentes")
    alert ("Los números son iguales, por favor ingresa dos números diferentes")
}

//Sexta parte

//Le pedimos al usuario que ingrese el primer número

let numero1 = parseFloat(prompt("Por favor ingresa el primer número"));

//Solicitamos que ingrese el segundo número

let numero2 = parseFloat(prompt("Ahora ingresa el segundo número"));

//Solicitamos al usuario que ingrese el tercer número

let numero3 = parseFloat(prompt("Por último, ingresa el tercer número"));

//Determinamos cual de los 3 números es el mayor

let numeroMayor

if (numero1 >= numero2 && numero1 >= numero3){
    numeroMayor = numero1;
} else if ( numero2 >= numero1 && numero2 >= numero3){
    numeroMayor = numero2
} else {
    numeroMayor = numero3
}

console.log (`El número mayor es: ${numeroMayor}`);
alert (`El número mayor es: ${numeroMayor}`);

//Séptima parte

//Solicitamos al usuario que ingrese el dia de la semana que guste

let dia = prompt("Ingrese un día de la semana")

dia = dia.toLowerCase ();

//Mensaje dependiendo del día ingresado por el usuario

let mensaje;

switch (dia) {
    case "lunes": mensaje = "Hoy es lunes, gran inicio de semana";
    break;
    case "viernes": mensaje = "Con toda la actitud de Viernes";
    break;
    case "sábado":
    case "sabado":
    case "domingo": 
    mensaje = "Bonito fin de semana, disfrutalo al máximo"
    break;
    default:
        mensaje = "Es un buen día"

}

console.log (mensaje);
alert (mensaje);

// Octava parte

//Pedir al usuario que ingrese una calificación entre 1 y 10

let calificacion = parseFloat (prompt("Ingresa una calificación entre 1 y 10 por favor"));

//Checamos si la calificación está dentro del rango 1 a 10

if (calificacion >= 1 && calificacion <=10){

    let mensaje;

    if (calificacion < 6){
        mensaje = "Reprobado";
    } else if (calificacion >= 6 && calificacion <= 8 ){
        mensaje = "Regular";
    } else if (calificacion == 9){
        mensaje = "Bien";
    } else if (calificacion == 10){
        mensaje = "Excelente";
    }

console.log(mensaje);
alert (mensaje);
} else {
    console.log("Error: ingresa una calificación del 1 al 10")
    alert ("Error: ingresa una calificación del 1 al 10")
}

//Novena parte

// Solicitamos al usuario el topping

let topping = prompt("Por favor ingresa el topping que deseas (Oreo, Kitkat, Brownie)")

topping = topping.toLowerCase();

//Ponemos el costo base de nuestro producto

const costoBase = 50;
let costoTotal = costoBase;
let mensajeCosto;

//Determinamos el precio total con el topping que el usuario elligió

if (topping === "oreo"){
    costoTotal += 10;
    mensajeCosto = `El precio total con topping de Oreo es $ ${costoTotal} pesos.`;
} else if (topping === "kitkat") {
    costoTotal += 15;
    mensajeCosto = `El precio total con topping de Kitkat es $ ${costoTotal} pesos.`;
} else if (topping === "brownie"){
    costoTotal += 20;
    mensajeCosto = `El precio total con topping de Brownie es $ ${costoTotal} pesos.` 
} else {
    mensajeCosto = "No contamos con este topping, intente de nuevo";
    mensajeCosto += `\nEl precio del helado sin topping es $${costoBase} pesos.`;
}

//Imprimimos en pantalla y consola
console.log(mensajeCosto);
alert (mensajeCosto)

//Décima parte

//Debemos solicitar al usuario que ingrese el programa que desea cursar

/*let programaDeseado = prompt("Por favor, ingrese el programa que deseas cursar (course, carrera o máster):");

programaDeseado = programaDeseado.toLowerCase

//En esta parte definimos los costos y la duración de cada uno de los programas

const costos = {
    course: 4999,
    carrera: 3999,
    master: 2999
};

const duraciones = {
    course: 2,
    carrera: 6,
    master: 12

};

//Validamos los datos ingresados

if (!costos[programa]) {
    console.log("Programa no válido. Ingresa cualquiera de las siguientes opciones (course, carrea o máster)");
    alert ("Programa no válido. Ingresa cualquiera de las siguientes opciones (course, carrea o máster)");

} else {
    let beca = prompt("¿Tienes alguna beca? (Facebook, Google o Jesua):");
    beca = beca.toLowerCase();

// Definimos los descuentos por beca

const descuentos = {
    facebook: 0.20,
    google: 0.15,
    jesua: 0.50
};
//Ahora determinamos el costo mensual y aplicamos la beca que corresponda

let costoMensual = costos[programa];
let descuento = descuentos[beca] || 0;
let costoConDescuento = costoMensual * (1 - descuento);
let duracion = duraciones[programa];
let costoTotal = costoConDescuento * duracion;

let mensajeBeca = `El costo mensual con descuento es $${costoTotal.toFixed(2)} pesos.`;
mensajeBeca += `\nEl costo total por el programa de ${programa} es $ ${costoTotal.toFixed(2)} pesos.`;

console.log(mensajeBeca)
alert (mensajeBeca)

} */

//Parte 11

//Solicitamos al usuario que nos mencione que tipo de vehículo usó

let tipoVehiculo = prompt("Ingrese el tipo de vehículo que usó (coche, moto o autobús");

tipoVehiculo = tipoVehiculo.toLowerCase();

//Definimos el costo por kilometro dependiendo del vehiculo

const preciosPorKilometro = {
    coche: 0.20,
    moto: 0.10,
    autobus: 0.50
};

//Verificamos si el dato ingresado es válido

if (!preciosPorKilometro[tipoVehiculo])
{
    console.log("Tipo de vehículo no válido, ingrese unicamente 'coche' 'moto' o 'autobús'.")
    alert ("Tipo de vehículo no válido, ingrese unicamente 'coche' 'moto' o 'autobús'.")

} else {
    let distanciaRecorrida = parseFloat(prompt("Ingresa la distancia recorrida en kilómetros"));
    let litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos"));
    let precioKilometro = preciosPorKilometro[tipoVehiculo];
    let cargoExtra = litrosConsumidos > 100 ? 10 : 5;
    let totalPagar = (precioKilometro * distanciaRecorrida) + cargoExtra;

    //Mostramos el resultado en consola 

    let mensaje = `El total a pagar es $${totalPagar.toFixed(2)} pesos.`;
    console.log(mensaje)
    alert (mensaje)
}










