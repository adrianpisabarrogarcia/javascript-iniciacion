var anotaciones = []

//Creo array bidimensional
anotaciones = new Array(30)
for (let i = 0; i < anotaciones.length; i++) {
    anotaciones[i] = [] //Dentro de un array va a ir otro array para crear el bidimensional
}


//Obtengo todos los numeros del mes
let clic = document.getElementsByClassName("dia")
for (let i = 0; i < clic.length; i++) {
    clic[i].addEventListener("click",introducirTexto)
}

function introducirTexto(event) {
    let texto = document.getElementById("anotacion").value
    alert(event.target.value)
    anotaciones[event.target.value-1].push(texto)
    alert("Añadido 💪: "+texto+ " \n")

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