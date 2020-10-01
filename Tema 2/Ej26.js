"use strict"

saludar()
saludar("Adrián")
saludar("Pepe","Pepito","Perico")

function saludar() {
    let texto = ""
    if (arguments.length > 0){
        for (let i = 0; i < arguments.length; i++) {
            texto += "Hola, "+arguments[i]+". \n"
        }
    }else {
        texto= "Hola."
    }

    alert(texto)
}