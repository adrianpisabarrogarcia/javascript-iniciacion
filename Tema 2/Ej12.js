"use strict"
//No me ha salido bien
var continuar = true
var sumaNumeros = 0
while (continuar){
    let numero = prompt("Inserta una numero: ")
    numero = parseInt(numero)
    alert(typeof numero)
    if (typeof numero != "number"){
        alert(numero + " no es un numero")
    }else {
        numero = parseInt(numero)
        sumaNumeros += numero
    }
    continuar = confirm("Quieres continuar?");
}
alert(sumaNumeros)