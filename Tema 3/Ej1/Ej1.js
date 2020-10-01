function salir(){
    alert("Saliendo del login")
}

function enviar(){
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value

    usuario = usuario.toString()
    password = password.toString()

    let usuarios = ["a","b"]
    let contrasenas = ["12345","123456"]
    //alert(usuario+" "+password)
    try {
        if (usuario == "" || password == ""){
            throw "El usuario o contraseña esta vacío"
        }
        let encontrado = false
        for (let i = 0; i < usuarios.length && encontrado == false; i++) {
            if (usuarios[i] == usuario && contrasenas[i] == password){
                alert("Bienvenido/a "+usuario)
                encontrado = true
            }
        }
        if (!encontrado){
            throw "Usuario y contraseñas incorrectos"
        }
    }catch (e){
        alert(e)
    }





}