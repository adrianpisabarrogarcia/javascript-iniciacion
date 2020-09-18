"use strict"
var sueldos = []
var suma = 0
for (var i = 0; i<5; i++){
    let sueldoOperario = parseInt(prompt("Inserta el sueldo de un operario: "))
    sueldos.push(sueldoOperario)
}
for (var i = 0; i<5; i++){
    suma += sueldos[i]
    //document.write(suma+" - ")
}
alert("La suma total es de : "+suma)