"use strict"
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var num = parseInt(prompt("Inserta un número del 1 al 12: "))
if (num < 1 || num > 12){
    alert("Inserta un número comprendido entre el 1 y el 12.")
}else{
    var mes = meses[num-1]
    var dias = 0
    switch (mes){
        case "Abril": case "Junio":  case "Septiembre": case "Noviembre":
            dias = 30
            break;
        case "Enero": case "Marzo":  case "Mayo": case "Julio": case "Julio": case "Agosto":  case "Octubre": case "Diciembre":
            dias = 31
            break;
        case "Febrero":
            dias = 28
            break;
    }
    alert("El mes "+num+" corresponde al mes "+mes+" y tiene "+dias+" días.")
}