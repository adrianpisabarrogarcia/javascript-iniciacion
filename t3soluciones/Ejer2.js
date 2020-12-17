
// Array de dos dimensiones para las anotaciones.
let anotaciones = new Array(30);
for(let x = 0; x < anotaciones.length; x++)
    anotaciones[x] = [];

// Añadir el evento click a todos los botones
// byTagName
let botones = document.getElementsByClassName('btnDias');
for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", agregarAnotacion);
}

function agregarAnotacion(event){
   // alert(event.target.value);
    let anotacion = document.getElementById("anotacion").value;
    if (anotacion != "")
         anotaciones[event.target.value - 1].push(anotacion);
    else
        alert("Escribe primero");
}

function inicializar(){
    document.getElementById("anotacion").value="";
}

function visualizar(){
    let datos ="";
    for(let x in anotaciones)
    {
        if (anotaciones[x].length > 0)
        {
            let dia = parseInt(x) + 1;
            datos += "Anotaciones del día " + dia + "\n";
            anotaciones[x].forEach(el => datos += el + "\n")
        }

    }
    alert(datos);
}
