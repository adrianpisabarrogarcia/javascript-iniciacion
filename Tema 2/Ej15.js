"use strict"
var factorial = prompt("Introduce un numero para calcular su factorial:")
document.write(factorial + " = "+ factorial)
var numero = factorial - 1
while (numero != 0){
    document.write(" * " + numero)
    factorial = factorial * numero
    numero = numero - 1
}
document.write(" = " + factorial)