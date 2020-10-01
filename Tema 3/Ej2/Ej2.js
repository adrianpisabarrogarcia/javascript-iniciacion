var anotaciones = []

//Creo array bidimensional
anotaciones = new Array(30)
for (let i = 0; i < anotaciones.length; i++) {
    anotaciones[i] = [] //Dentro de un array va a ir otro array para crear el bidimensional
}


//Obtengo el numero del día
let clic = document.getElementsByClassName("dia")
for (let i = 0; i < clic.length; i++) {
    clic[i].addEventListener("click",introducirTexto)
}

function introducirTexto(event) {
    //Obtengo el texto de las anotaciones
    let texto = document.getElementById("anotacion").value
    //Accedo a la posición idonea del array y en la última columna hago un push de la anotación
    let posicion = 0
    for (let i = 0; i < anotaciones.length; i++) {
        for (let j = 0; j < anotaciones[i].length; j++) {
            posicion = j
        }
    }
    //anotaciones[event.target.value][posicion] = texto
    alert(event.target.value)

    anotaciones[event.target.value-1].push(texto)
    alert("Añadido 💪: "+texto+ " \nEl dia 📅:"+parseInt(clic))

}

function visualizar() {
    let texto = ""
    for (let i = 0; i < anotaciones.length; i++) {
        texto += "📅 Dia: "+(i+1)+":"+"\n"
        for (let j = 0; j < anotaciones[i].length; j++) {
            texto += "     ✅: "+ anotaciones[i][j]+ " \n"
        }
        texto = "\n\n"
    }
    alert(texto)
}
