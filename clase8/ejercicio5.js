/*Ejercicio 5: Saludo personalizado 
Enunciado: 
Este ejercicio es ideal para familiarizarse con la manipulación de cadenas de 
texto y la función prompt(). Escribe un programa que: 
1. Solicite al usuario que ingrese su nombre. 
2. Muestre un saludo personalizado usando el nombre ingresado. 
Requisitos: 
• Utiliza prompt() para recibir el nombre del usuario. 
• Muestra un mensaje utilizando concatenación de cadenas*/


const prompt = require('prompt-sync')();

// el usuario ingresara el nombre
let nombre = prompt("¿Cuál es tu nombre? ");

// se muestra un saludo personalizado 
console.log("¡Hola, buenas noches, " + nombre + "! Bienvenida a la fiesta");