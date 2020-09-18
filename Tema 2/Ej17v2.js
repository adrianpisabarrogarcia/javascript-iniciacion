"use strict"
var sueldos = []
var suma = 0
for (var i = 0; i<5; i++){
    let sueldoOperario = parseInt(prompt("Inserta el sueldo de un operario: "))
    sueldos.push(sueldoOperario)
}
/*
//forEach en el array
// var i = 0   Esto no hay que ponerlo
sueldos.forEach(i => suma += sueldos[i])
 */
for (const i in sueldos) {
    suma += sueldos[i]
}
alert("La suma total es de : "+suma)
