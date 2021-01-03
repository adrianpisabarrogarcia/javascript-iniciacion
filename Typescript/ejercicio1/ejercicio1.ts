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



    //inserto perona
    let persona: Persona = new Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil)
    personas.push(persona)
    imprimirPersonas()


});


function imprimirPersonas() {
    let texto = "<hr>"
    for (let i = 0; i < personas.length; i++) {
        texto += personas[i].toString()
        texto += "<br><hr><br>"
    }
    $(".imprimirpersonas").html(texto);
}

