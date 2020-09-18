"use strict"
var continuar = true
var cadenasTexto = ""
while (continuar){
    let texto = prompt("Inserta una cadena de texto: ")
    cadenasTexto += (texto+"-") //cadenasTexto = cadenasTexto + texto
    continuar = confirm("Quieres continuar?");
}
alert(cadenasTexto)