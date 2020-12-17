/// <reference path="./node_modules/@types/jquery/index.d.ts" />
/// <reference path="./Persona.ts" />
var personas = new Array();
$("#annadir-persona").click(function () {
    //recojo datos persona
    var nombre = $("#nombre").val().toString();
    var edad = +$("#edad").val();
    var dni = $("#dni").val().toString();
    var sexo = $("#sexo").val().toString();
    var peso = +$("#peso").val();
    var altura = +$("#altura").val();
    var estadoCivil = $("input[name='estado-civil']:checked").val().toString();
    //Compruebo persona
    //nombre
    //sexo
    comprobarSexo(sexo);
    //inserto perona
    var persona = new Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil);
    personas.push(persona);
    imprimirPersonas(persona);
});
function imprimirPersonas(persona) {
    var texto = "<hr><br>";
    texto += "<b>Nombre y Apellidos: </b>" + persona.nombre + "<br>";
    texto += "<b>Edad: </b>" + persona.edad + "<br>";
    texto += persona.dni + "<br>";
    if (persona.sexo == "H") {
        texto += "<b>Sexo: </b>" + "Hombre" + "<br>";
    }
    else {
        texto += "<b>Sexo: </b>" + "Mujer" + "<br>";
    }
    texto += "<b>Peso: </b>" + persona.peso + "<br>";
    texto += "<b>Altura: </b>" + persona.altura + "<br>";
    texto += "<b>Estado Civil: </b>" + persona.estadoCivil + "<br>";
    $(".imprimirpersonas").append(texto);
}
function comprobarSexo(sexo) {
    if (sexo != "H" && sexo != "M") {
        sexo = "H";
    }
}
