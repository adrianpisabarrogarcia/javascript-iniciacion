///<reference path="node_modules/@types/jquery/index.d.ts" />
///<reference path="./Persona.ts" />
///<reference path="./Proyecto.ts" />
$(document).ready(function () {
    $('.color').css('display', 'none');
    $('.listado-proyectos').css('display', 'none');
});
var arrayPersonas = new Array();
var arrayProyectos = new Array();
var idPersona = "";
var personaLogueada;
function alta() {
    comprobarCampos();
}
function comprobarCampos() {
    var usuario = $('#usuario').val().toString();
    var password = $('#password').val().toString();
    var errores = false;
    var textoErrores = "";
    try {
        if (password != "" || usuario != "") {
            var exRegPassword = new RegExp("^[(A-z)+(0-9)+]{8,}$"); //revisarlp
            if (!exRegPassword.test(password)) {
                errores = true;
                textoErrores += "El password no cumple las características";
            }
        }
        else {
            errores = true;
            textoErrores += "El usuario o/y contraseña están vacíos";
        }
        if (errores) {
            throw textoErrores;
        }
        altaUsuarios(usuario, password);
    }
    catch (e) {
        alert(e);
    }
}
function altaUsuarios(usuario, password) {
    var persona = new Persona(usuario, password);
    arrayPersonas.push(persona);
    //envío datos al servidor
    /*
    let request = $.ajax({
        type: "POST",
        url: "/guardarusuarios",
        data: JSON.stringify(arrayPersonas),
        contentType: 'json'
    });
    request.done(function() {
        console.log('Hecho')
    });
    request.fail(function() {
        console.error("Ha fallado");
    });
    */
    $('.color').css('display', 'block');
    //como vaciar un cuadro de texto
}
function cambioColor() {
    var color = $('#color').val().toString();
    localStorage.clear();
    localStorage.setItem('color', color);
    $('body').css('background-color', color);
    color = "";
    $('.color').css('display', 'none');
}
function consulta() {
    var usuario = $('#usuario').val().toString();
    var password = $('#password').val().toString();
    var encontrado = false;
    for (var i = 0; i < arrayPersonas.length && !encontrado; i++) {
        if (arrayPersonas[i].usuario == usuario && arrayPersonas[i].password == password) {
            encontrado = true;
            idPersona = arrayPersonas[i].usuario;
            personaLogueada = arrayPersonas[i];
        }
    }
    if (!encontrado) {
        alert('No encontrado');
        event.preventDefault();
    }
    //tendría que cambiar el color aquí
    $('.listado-proyectos').css('display', 'block');
    mostrarProyectos();
}
function mostrarProyectos() {
    var proyectos = "";
    for (var i = 0; i < arrayProyectos.length; i++) {
        if (arrayProyectos[i].persona.usuario = idPersona) {
            proyectos += "<li> " + arrayProyectos[i].nombre + "</li>";
        }
    }
    $('.proyectos').html(proyectos);
}
function annadir() {
    var nombreProyecto = $('#proyectonombre').val().toString();
    var proyecto = new Proyecto(nombreProyecto, personaLogueada);
    arrayProyectos.push(proyecto);
    mostrarProyectos();
}
function borrar() {
    for (var i = 0; i < arrayProyectos.length; i++) {
        if (arrayProyectos[i].persona.usuario = idPersona) {
            arrayProyectos.splice(i, 1);
        }
    }
    mostrarProyectos();
}
//    let datosusu = JSON.parse(localStorage.getItem('datos'));
//    localStorage.setItem('datos', JSON.stringify(usuarios));
