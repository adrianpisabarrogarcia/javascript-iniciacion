"use strict"

//Inserción de fecha por teclado
var fechaNacimiento = prompt("Inserta tu fecha de nacimiento de la siguiente forma dd/MM/YYYY: ")
var day = fechaNacimiento.charAt(0)+fechaNacimiento.charAt(1)
day = parseInt(day)
var month = fechaNacimiento.charAt(3)+fechaNacimiento.charAt(4)
month = parseInt(month)
var year = fechaNacimiento.charAt(6)+fechaNacimiento.charAt(7)+fechaNacimiento.charAt(8)+fechaNacimiento.charAt(9)
year = parseInt(year)
fechaNacimiento = year+"/"+month+"/"+day

//Creación de fecha
alert(fechaNacimiento.toString())
fechaNacimiento = new Date(fechaNacimiento.toString())
var fechaActual = new Date("2020/09/21")
var edad = new Date(fechaActual.getFullYear()-fechaNacimiento.())
alert("Tiene: "+edad.getTime()+" años.")


