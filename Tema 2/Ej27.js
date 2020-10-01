"use strict"

var sueldoActual = parseInt(prompt("Tu sueldo actual:"))
var annosEnEmpresa = parseInt(prompt("Años que lelvas en la empresa:"))
var nuevoSueldo = sueldoEleccionCantidad()

alert(sueldoActual+" El nuevo sueldo es de: "+nuevoSueldo)

function sueldoEleccionCantidad(){
    if (sueldoActual<500){
        if (annosEnEmpresa >= 10){
            return sueldoActual + sueldoActual * 20 / 100
        }else{
            return sueldoActual + sueldoActual * 10 / 100
        }
    }else{
        return sueldoActual
    }
}



