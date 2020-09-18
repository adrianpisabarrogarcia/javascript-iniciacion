"use strict"
var num1 = prompt("Escribe un número");
var num2 = prompt("Escribe un número");
var num3 = prompt("Escribe un número");
if(num1>num2){
    if(num1>num3){
        alert(num1 + " es el número mayor de los 3")
    }else{
        alert(num3 + " es el número mayor de los 3")
    }
}else{
    if(num2>num3){
        alert(num2 + " es el número mayor de los 3")
    }else{
        alert(num3 + " es el número mayor de los 3")
    }
}