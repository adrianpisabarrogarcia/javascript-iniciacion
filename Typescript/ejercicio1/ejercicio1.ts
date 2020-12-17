/// <reference path="./node_modules/@types/jquery/index.d.ts" />
/// <reference path="./Persona.ts" />

var personas: Persona[] = new Array();


$("#annadir-persona").click(function () {
    //recojo datos persona
    let nombre: string = $("#nombre").val().toString()
    let edad: number = +$("#edad").val()
    let dni: string = $("#dni").val().toString()
    let sexo: string = $("#sexo").val().toString()
    let peso: number = +$("#peso").val()
    let altura: number = +$("#altura").val()
    let estadoCivil: string = $("input[name='estado-civil']:checked").val().toString()

    //Compruebo persona
    //nombre

    //sexo
    comprobarSexo(sexo)


    //inserto perona
    let persona: Persona = new Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil)
    personas.push(persona)
    imprimirPersonas(persona)


});


function imprimirPersonas(persona: Persona) {
    let texto: string = "<hr><br>"
    texto += "<b>Nombre y Apellidos: </b>" + persona.nombre + "<br>"
    texto += "<b>Edad: </b>" + persona.edad + "<br>"
    texto += persona.dni + "<br>"
    if (persona.sexo == "H") {
        texto += "<b>Sexo: </b>" + "Hombre" + "<br>"
    } else {
        texto += "<b>Sexo: </b>" + "Mujer" + "<br>"
    }
    texto += "<b>Peso: </b>" + persona.peso + "<br>"
    texto += "<b>Altura: </b>" + persona.altura + "<br>"
    texto += "<b>Estado Civil: </b>" + persona.estadoCivil + "<br>"

    $(".imprimirpersonas").append(texto);

}

function comprobarSexo(sexo:string){
    if (sexo != "H" && sexo != "M") {
        sexo = "H"
    }
}
