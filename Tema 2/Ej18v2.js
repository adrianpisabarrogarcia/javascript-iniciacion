"use strict"
//Problema al ejecutar
var mesesArray = new Array(12)
mesesArray[0] = new Array(12)
mesesArray[1] = new Array(2)

mesesArray[0][0] = "Enero"
mesesArray[0][1] = 31
mesesArray[1][0] = "Febrero"
mesesArray[1][1] = 28
mesesArray[2][0] = "Marzo"
mesesArray[2][1] = 31
mesesArray[3][0] = "Abril"
mesesArray[3][1] = 30
mesesArray[4][0] = "Mayo"
mesesArray[4][1] = 31
mesesArray[5][0] = "Junio"
mesesArray[5][1] = 30
mesesArray[6][0] = "Julio"
mesesArray[6][1] = 31
mesesArray[7][0] = "Agosto"
mesesArray[7][1] = 31
mesesArray[8][0] = "Septiembre"
mesesArray[8][1] = 30
mesesArray[9][0] = "Octubre"
mesesArray[9][1] = 31
mesesArray[10][0] = "Noviembre"
mesesArray[10][1] = 30
mesesArray[11][0] = "Diciembre"
mesesArray[11][1] = 31


var num = parseInt(prompt("Inserta un número del 1 al 12: "))
if (num < 1 || num > 12){
    alert("Inserta un número comprendido entre el 1 y el 12.")
}else{
    let mes = mesesArray[num-1][0]
    let dias = mesesArray[num-1][1]
    alert("El mes "+num+" corresponde al mes "+mes+" y tiene "+dias+" días.")
}