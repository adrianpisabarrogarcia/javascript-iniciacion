"use strict"

var seleccion = menu()
switch2(seleccion)


function menu() {
    let text = "" +
        "Qué quieres comprobar:\n" +
        "\n" +
        "a- Validar un dni\n" +
        "b- Validar un nombre\n" +
        "c- Validar una url\n" +
        "d- Validar una IP\n" +
        "e- Poner en mayusculas todas las vocales de un string \n"
    return prompt(text)

}
function switch2(seleccion) {
    switch(seleccion.toUpperCase()){
        case "A":
            a()
            break
        case "B":
            b()
            break
        case "C":
            c()
            break
        case "D":
            d()
            break
        case "E":
            e()
            break
        default:
            alert("No has introducido una letra válida")
    }

}

function a() {
    let cadena = prompt("Inserta el DNI: ")
    let expreg = new RegExp("[0-9]{8}[T|R|W|A|G|M|Y|F|P|D|X|B|N|J|Z|S|Q|V|H|L|C|K|E]")
    if (expreg.test(cadena.toUpperCase())){
        alert("El DNI es correcto")
    }else{
        alert("El DNI no es correcto")
    }
}

function b() {
    let cadena = prompt("Inserta un nombre: ")
    let expreg = new RegExp("[A-Z][a-z]+([ ][A-Z]?[a-z]+)?")
    if (expreg.test(cadena)){
        alert("El Nombre es correcto")
    }else{
        alert("El Nombre no es correcto")
    }
}

function c() {
    let cadena = prompt("Inserta una url: ")
    let expreg = new RegExp("^https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[/#?]?.*$")
    if (expreg.test(cadena)){
        alert("LA URL es correcto")
    }else{
        alert("LA URL no es correcto")
    }
}

function d() {
    let cadena = prompt("Inserta una IP: ")
    let expreg = new RegExp("^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")
    if (expreg.test(cadena)){
        alert("LA IP es correcto")
    }else{
        alert("LA IP no es correcto")
    }
}

function e() {
    let cadena = prompt("Inserta una cadena de texto: ")
    let caden2 = ""
    for (let i = 0; i < cadena.length ; i++) {
        if (cadena.charAt(i)=='a' || cadena.charAt(i)=='e'  || cadena.charAt(i)=='i'  || cadena.charAt(i)=='a'  || cadena.charAt(i)=='o'  || cadena.charAt(i)=='u' ) {
            cadena2 = cadena2 + cadena.charAt(i).toUpperCase()
        }else{
            cadena2 = cadena2 + cadena.charAt(i)
        }
    }
}
