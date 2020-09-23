"use strict"
var cadenaTexto = introducirTexto()
var menu = menu()
escoger(menu)

function introducirTexto() {
    return prompt("Introduce una cadena de Texto")
}

function menu(){
    let texto="" +
        "a) Indica si esta en mayúsculas, en minúsculas o si hay una mezcla de ambas. \n"+
        "b) Comprobar si dentro de una cadena de caracteres hay una determinada subcadena. \n"+
        "c) Convertir una cadena de caracteres en un array. Cada uno de los caracteres pasara a ser un elemento del array. \n"+
        "d) Convertir una cadena de caracteres en un array. Cada una de las palabras pasara a ser un elemento del array \n"+
        "e) Dentro de una cadena de caracteres, sustituye cada letra v por b. \n"+
        "f) Anade a la cadena los puntos necesarios al final para que su longitud sea 20. Si ya tiene 20 o mas caracteres no hagas nada \n"
    let menuEscoger = prompt(texto)

    return menuEscoger

}
function escoger(menu) {
    switch (menu.toUpperCase()){
        case "A":
            a()
            break;
        case "B":
            b()
            break;
        case "C":
            c()
            break;
        case "D":
            d()
            break;
        case "E":
            e()
            break;
        case "F":
            f()
            break;
        default:
            alert("No has introducido una opción válida.")
    }
}

function a() {
    let aux = cadenaTexto
    if (cadenaTexto == aux.toUpperCase()){
        alert("Esta todo en mayúsculas")
    }else{
        if (cadenaTexto == aux.toLowerCase()){
            alert("Esta todo en minúsculas")
        }else{
            alert("Esta mezcladas las mayúsculas y las minúsculas.")
        }
    }
}

function b() {
    if (cadenaTexto.includes("hola")){
        alert(cadenaTexto+" La cadena de Texto incluye la palabra _hola_")
    }else{
        alert(cadenaTexto+" La cadena de Texto NO incluye la palabra _hola_")
    }
}

function c() {
    let array = []
    for (let i = 0; i < cadenaTexto.length; i++) {
        array.push(cadenaTexto.charAt(i))
    }
    alert(cadenaTexto+" La cadena de texto transformada a un Array: "+array)
}

function d() {
    let array = []
    let contador = 0
    cadenaTexto += " "
    for (let i = 0; i < cadenaTexto.length ; i++) {
        if (cadenaTexto.charAt(i) == " "){
            let texto = ""
            for (let j = contador; j < i; j++) {
                texto += cadenaTexto.charAt(j)
            }
            array.push(texto)
            contador = i + 1
        }
    }
    alert(cadenaTexto+"La cadena de texto queda de la siguiente manera: "+array)
    /*
    document.write("<br>"+cadenaTexto+"<br><br>")
    for (let i = 0; i < array.length; i++) {
        document.write(array[i]+"<br>")
    }
     */

}

function e() {
    let auxCadena = ""
    for (let i = 0; i < cadenaTexto.length; i++) {
        if (cadenaTexto.charAt(i).toUpperCase() == "V"){
            auxCadena += "b"
        }else{
            auxCadena += cadenaTexto.charAt(i)
        }

    }
    alert(cadenaTexto+" La cadena queda de la siguiente manera: "+auxCadena)

}

function f() {
    alert(20 - cadenaTexto.length)
    let cadenaAux = cadenaTexto
    if (!(cadenaTexto.length >= 20)){
        for (let i = 0; i < 20 - cadenaTexto.length; i++) {
            cadenaAux += "."
        }
    }
    document.write(cadenaAux + cadenaAux.length)
}