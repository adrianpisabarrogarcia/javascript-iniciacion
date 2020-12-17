$( "#password" ).click(function() {
    try {
        $(".password-banca-online").css( "display","block")
        let arrayNumerosAcceso = numAleatorios()
        let numeros = ordenarConTablas(arrayNumerosAcceso)
        $(".password-banca-online").html(numeros)
        let passwordEntered = ""
        $(".password-banca-online button").click(function() {
            passwordEntered = passwordEntered + $(this).val()
            $("#password").attr("placeholder", passwordEntered)
        })
    }catch(e){
        alert(e)
    }

});
var usuarios = []

function insertarUsuario(){
    let u = new User("12345678A","12345")
    usuarios.push(u)
}


function numAleatorios(){
    let numerosAcceso = [0,1,2,3,4,5,6,7,8,9]
    numerosAcceso = shuffle(numerosAcceso)
    return numerosAcceso
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
}

function ordenarConTablas(array){
    let texto = ""
    for (let i = 0; i < array.length; i++) {
        texto += "<button type='button' value='"+array[i]+"'>"+array[i]+"</button>"
    }
    return texto
}

function entrar(){
    try{
        /* ********************************************************
         Como solo hay un usuario no voy a hacer un for y quedarme
         con el i para comprobar si existe o no directamente voy a
         acceder a la posición del array que tiene los datos de acceso.
           ********************************************************
         */
        if($("#dni").val() == usuarios[0].usuario && ($("#password").attr("placeholder") == usuarios[0].password || $("#password").val() == usuarios[0].password)){
            location.href = "./cuenta.html"

        }else{
            throw "Usuario o contraseña incorrecto."
        }
    }catch(e){
        alert(e);
    }

}