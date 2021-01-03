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
    //inserto perona
    var persona = new Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil);
    personas.push(persona);
    imprimirPersonas();
});
function imprimirPersonas() {
    var texto = "<hr>";
    for (var i = 0; i < personas.length; i++) {
        texto += personas[i].toString();
        texto += "<br><hr><br>";
    }
    $(".imprimirpersonas").html(texto);
}
