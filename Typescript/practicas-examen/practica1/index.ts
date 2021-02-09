///<reference path="node_modules/@types/jquery/index.d.ts" />
///<reference path="./Persona.ts" />
///<reference path="./Proyecto.ts" />

$(document).ready(function () {
    $('.color').css('display', 'none');
    $('.listado-proyectos').css('display', 'none');

})
var arrayPersonas: Persona[] = new Array()
var arrayProyectos: Proyecto[] = new Array()
var idPersona:string = ""
var personaLogueada: Persona


function alta():void {
    comprobarCampos();
}

function comprobarCampos(): void {
    let usuario: string = $('#usuario').val().toString()
    let password: string = $('#password').val().toString()

    let errores: boolean = false
    let textoErrores: string = ""
    try {
        if (password != "" || usuario != "") {
            let exRegPassword = new RegExp("^[(A-z)+(0-9)+]{8,}$") //revisarlp

            if (!exRegPassword.test(password)) {
                errores = true
                textoErrores += "El password no cumple las características"
            }
        } else {
            errores = true
            textoErrores += "El usuario o/y contraseña están vacíos"
        }

        if (errores) {
            throw textoErrores
        }

        altaUsuarios(usuario, password)

    } catch (e) {
        alert(e)
    }
}

function altaUsuarios(usuario: string, password: string): void {
    let persona: Persona = new Persona(usuario, password)
    arrayPersonas.push(persona)
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

    $('.color').css('display', 'block')
    //como vaciar un cuadro de texto
}

function cambioColor():void{
    let color = $('#color').val().toString()
    localStorage.clear();
    localStorage.setItem('color', color)
    $('body').css('background-color', color)
    color = ""
    $('.color').css('display', 'none')
}

function consulta():void {
    let usuario:string = $('#usuario').val().toString()
    let password = $('#password').val().toString()

    let encontrado:boolean = false
    for (let i = 0; i < arrayPersonas.length && !encontrado ; i++) {
        if(arrayPersonas[i].usuario == usuario && arrayPersonas[i].password == password){
            encontrado = true
            idPersona = arrayPersonas[i].usuario
            personaLogueada = arrayPersonas[i]
        }
    }
    if(!encontrado){
        alert('No encontrado')
        event.preventDefault();
    }

    //tendría que cambiar el color aquí



    $('.listado-proyectos').css('display', 'block');
    mostrarProyectos()
}


function mostrarProyectos():void {
    let proyectos: string = ""
    for (let i = 0; i < arrayProyectos.length; i++) {
        if(arrayProyectos[i].persona.usuario = idPersona){
            proyectos += "<li> " + arrayProyectos[i].nombre + "</li>"
        }
    }
    $('.proyectos').html(proyectos);
}

function annadir():void {
    let nombreProyecto:string = $('#proyectonombre').val().toString();
    let proyecto:Proyecto = new Proyecto(nombreProyecto,personaLogueada)

    arrayProyectos.push(proyecto)
    mostrarProyectos()
}

function borrar():void{
    for (let i = 0; i < arrayProyectos.length; i++) {
        if(arrayProyectos[i].persona.usuario = idPersona){
            arrayProyectos.splice(i,1)
        }
    }
    mostrarProyectos()

}

//    let datosusu = JSON.parse(localStorage.getItem('datos'));
//    localStorage.setItem('datos', JSON.stringify(usuarios));