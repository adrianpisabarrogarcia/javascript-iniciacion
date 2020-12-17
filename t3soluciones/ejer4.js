function validar() {
    try {
        //textos
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let poblacion = document.getElementById("poblacion").value;
        let provincia = document.getElementById("provincia").value;

        //expresiones
        let exReg = new RegExp(/^[A-Z]{1}[a-z]+$/)
        let exRegEmail = new RegExp('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$')

        //validaciones de texto
        if (!exReg.test(nombre)){
            document.getElementById("nombre").focus();
            throw "En el formulario hay datos incorrectos";
        }

        if (!exReg.test(apellido)){
            document.getElementById("apellido").focus();
            throw "En el formulario hay datos incorrectos";
        }

        if (!exRegEmail.test(correo)){
            document.getElementById("correo").focus();
            throw "En el formulario hay datos incorrectos";
        }

        if (!exReg.test(poblacion)){
            document.getElementById("poblacion").focus();
            throw "En el formulario hay datos incorrectos";
        }

        if (!exReg.test(provincia)){
            document.getElementById("provincia").focus();
            throw "En el formulario hay datos incorrectos";
        }

        //radios y ckeckbox
        let edades = document.getElementsByName("edad");
        let i;
        for (i = 0; i < edades.length && !edades[i].checked  ; i++);
        if (i == edades.length)
            throw "La edad es obligatoria";
        let edad = edades[i].value;


        let conocidos = document.getElementsByName("razon");
        let conocido = "";
        for (i = 0; i < conocidos.length; i++) {
            if (conocidos[i].checked) {
                conocido += conocidos[i].value + " ";
            }
        }
        // Crear objeto
        let objeto={nombre:nombre, apellido:apellido,correo:correo,poblacion:poblacion,provincia:provincia,edad:edad,conocido:conocido};

        alert("Tu nombre es: " + objeto.nombre
            + "\n Tu apellido es: " + objeto.apellido
            + "\n Tu correo es: " + objeto.correo
            + "\n Tu poblacion es: " + objeto.poblacion
            + "\n Tu provincia es: " + objeto.provincia
            + "\n Tu edad es entre: " + objeto.edad
            + "\n Nos conoces mediante: " + objeto.conocido);
    }
    catch(err)
    {
        alert(err);
    }

}

//funcion borrar datos
function borrar() {
    // boton de reset
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("poblacion").value = "";
    document.getElementById("provincia").value = "";
    let edades = document.getElementsByName("edad");
    let i;
    for (i = 0; i < edades.length && !edades[i].checked  ; i++);
    if (i != edades.length)
        edades[i].checked = false;
    let conocidos = document.getElementsByName("razon");
    let conocido = "";
    for (i = 0; i < conocidos.length; i++) {
        if (conocidos[i].checked) {
            conocidos[i].checked = false;
        }
    }
}