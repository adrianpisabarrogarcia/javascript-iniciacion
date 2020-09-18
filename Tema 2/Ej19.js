"use strict"
var candena = prompt("Inserta una cadena de texto: ")
var arraytexto = candena.split("")
var contador = 0
for (let i = 0; i<arraytexto.length; i++){
    let letra = arraytexto[i]
    letra = letra.toUpperCase()
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
        contador += 1
    }
}
var porcentaje = contador * 100 / arraytexto.length
alert("El porcentaje de vocales es: "+porcentaje+"\nEl numero de vocales es: "+contador)