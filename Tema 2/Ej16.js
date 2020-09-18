"use strict"
var dni = prompt("Inserta el DNI: ")
dni = parseInt(dni)
var letra = dni % 23
alert(letra)
var arrayLetrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
alert("La letra del DNI es: "+arrayLetrasDNI[letra]+"\nEl DNI es: "+dni+arrayLetrasDNI[letra])