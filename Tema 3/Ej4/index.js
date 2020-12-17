var personas = []
alert("hola")
console.log("hola")


function introducirPersona() {
    try {
        //input text by ids
        let nombre = document.getElementById("nombre").value
        let apellido = document.getElementById("apellidos").value
        let correo = document.getElementById("correo").value

        //regular expressions
        let exRegNombre = new RegExp("([A-z]{1}([a-z]+)([ ]?))+")
        let exRegCorreo = new RegExp("[a-z._0-9]+[@][a-z]+[.]([a-z]{1,3})")

        //validation of reg ex
        let erroresTexto = "Los siguientes campos no son correctos: "
        let errores = false
        if (!exRegNombre.test(nombre)){
            errores += " nombre "
            errores = true
        }
        if (!exRegNombre.test(apellido)){
            erroresTexto += " apellido "
            errores = true
        }
        if (!exRegCorreo.test(correo)){
            erroresTexto += " correo electrónico "
            errores = true
        }

        let poblacion = document.getElementById("poblacion").value
        let poblacion2 = poblacion.to
        alert(typeof poblacion2)






        //radio
        let edades = document.getElementsByName("edad")
        let i
        for (i = 0; i < edades.length && !edades[i].checked; i++) {
        }
        if (i == edades.length){
            erroresTexto += " edades "
            errores = true
        }
        let edad = edades[i].value

        //checkbox
        let conocidos = document.getElementsByName("conocido")
        let conocido = ""
        for (let j = 0; j < conocidos.length; j++) {
            if (conocidos[j].checked){
                conocido = conocido + conocidos[j].value + " "
            }
        }
        if(conocido == ""){
            erroresTexto = " y como nos has conocido.  "
            errores = true
        }


        if (errores){
            throw erroresTexto
        }else {
            let poblacion = "undefined"
            let objetoPersona = {
                nombre2:nombre,
                apellido2:apellido,
                correo2:correo,
                poblacion2:poblacion2,
                edad2:edad,
                conocido2:conocido}
            alert("La persona tiene:" +
                "\nNombre: "+objetoPersona.nombre2+"" +
                "\nApellidos: "+objetoPersona.apellido2+"" +
                "\nCorreo Electrónico: "+objetoPersona.correo2+"" +
                "\nEdad: "+objetoPersona.edad2+"" +
                "\nPoblación: "+objetoPersona.poblacion2+"" +
                "\nNos has conocido a través de : "+objetoPersona.conocido2+"" )
            personas.push(objetoPersona)
        }


    }catch (err) {
        alert(err)
    }
}

function mostrarPersonas() {
    let texto = ""
    for (let i = 0; i < personas.length; i++) {

        texto += "Persona "+(i+1) +":"
            "\nNombre: "+personas[i].nombre2+"" +
            "\nApellidos: "+personas[i].apellido2+"" +
            "\nCorreo Electrónico: "+personas[i].correo2+"" +
            "\nEdad: "+personas[i].edad2+"" +
            "\nNos has conocido a través de : "+personas[i].conocido2+"\n--------------------\n"
    }
    document.getElementById("todaspersonas").innerText = texto

}

function borrarDatos() {


}