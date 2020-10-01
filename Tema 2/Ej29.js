"use strict"

function Persona(dni, numSeguridadSocial, nombre, apellidos, fechaNacimiento, edad, estadoCivil) {
    //Atributos
    this.dni = arguments[0]
    this.numSeguridadSocial = arguments[1]
    this.nombre = arguments[2]
    this.apellidos = arguments[3]
    this.fechaNacimiento = arguments[4]
    this.edad = arguments[5]
    this.estadoCivil = arguments[6]

    this.casarse = function (){
        this.estadoCivil = true
    }
    this.divorciarse = function (){
        this.estadoCivil = false
    }
    this.cumplirAnnos = function (){
        this.edad = edad + 1
    }

}

var arrayPersonas = []

do {
    let dni = prompt("Inserta el DNI: ")
    let numSeguridadSocial = prompt("Inserta el número de la seguridad social: ")
    let nombre = prompt("Inserta el nombre: ")
    let apellidos = prompt("Inserta los apellidos: ")
    let fechaNacimiento = prompt("Inserta la fecha de nacimiento: ")
    let estadoCivil = confirm("¿Estás casado?")

    arrayPersonas.push(new Persona(dni,numSeguridadSocial,nombre,apellidos,fechaNacimiento,estadoCivil))
    /*
    let texto = "" +
        "Vas a introudcir... \n" +
        "DNI: "+dni+"\n"+
        "Numero de SS: "+numSeguridadSocial+"\n"+
        "Nombre: "+nombre+"\n"+
        "Apellidos: "+apellidos+"\n"+
        "Fecha Nacimiento: "+fechaNacimiento+"\n"+
        "Estado civil: "+estadoCivil+"\n"
    alert(texto)

     */

}while (confirm("¿Hay más personas?"))
arrayPersonas.forEach(contador => alert(contador.estadoCivil))
for (let i = 0; i < arrayPersonas.length; i++) {
    alert(arrayPersonas.values(estadoCivil))
}

//Numero de personas casadas
/*
var personasCasadas = 0
for (let i = 0; i < arrayPersonas.length; i++) {
    //Aquí hay un error
    if (arrayPersonas.==true){
        contador += 1
    }
}

 */
var personasCasadas = function (personasCasadasArray){
    let contador = 0
    for (let i = 0; i < personasCasadasArray.length; i++) {
        if (personasCasadasArray[i].estadoCivil == true){
            contador += 1
        }
    }
    return contador
}

alert("Hay casados: "+personasCasadas(arrayPersonas)+" personas.")
/*
var personaJoven = function (personaJoven){
    personaJoven.
        Object.estadoCivil
}

 */




//let numPersonasCasadas = arrayPersonas.filter()