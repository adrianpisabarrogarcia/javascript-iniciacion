"use strict"
var nota = prompt("Inserta una nota")
nota = parseInt(nota)
//Otra posibilidad
switch (nota){
    case 0: case 1: case 2:
        alert("Muy deficiente")
        break;
    case 3: case 4:
        alert("Insuficiente")
        break;
    case 5:
        alert("Suficiente")
        break;
    case 6:
        alert("Bien")
        break;
    case 7: case 8:
        alert("Notable")
        break;
    case 9: case 10:
        alert("Sobresaliente")
        break;
    default:
        alert("Inserta un número del 0 al 10")
}