"use strict"
var nums = []
var numsIntroducidos = []
inicializarVariables();
menu()

function inicializarVariables() {
    nums = [1,2,3,4,5]
    pedirValores()
}
function pedirValores() {
    for (let i = 0; i<5; i++){
        let num = parseInt(prompt("Introduce un numero: "))
        numsIntroducidos.push(num)
        //numsIntroducidos[i] = num
    }
}
function menu() {
    // Este metodo se podría hacer en dos: 1.- mostrar el Menú 2.- Seleccionar Opción
    let finalizar = true
    while (finalizar){
        var menu = "" +
            "a)Mostrar los números pares del primer array. \n" +
            "b)Buscar un valor tecleado por el usuario en el segundo array. Si se encuentra hay que indicar la posició́n. Ten en cuenta que el mismo valor se puede repetir y si esto ocurre hay que indicar todas las posiciones. \n" +
            "c)Mostrar todos los nú́meros mayores de 10 del primer array. \n" +
            "d)Crear un string a partir de todos los datos del primer array. \n" +
            "e)Borrar el primer elemento, el ú́ltimo y un elemento intermedio del array dos. \n" +
            "f)Unir los dos arrays formando sólo uno. Visualiza el contenido de este tercer array. \n" +
            "g)Crear un nuevo array con todos los nú́meros impares del array uno. \n" +
            "h)Sumar un dos a cada uno de los elementos del array dos. \n" +
            "i)Duplicar los dos primeros elementos del primer array a partir de la posición cuatro. \n" +
            "j)Guardar un 6 en cada una de las posiciones del array dos. \n" +
            "k)Mostrar el contenido de un array empezando por la última posició́n y acabando por la primera. \n" +
            "l)Ordenar de mayor a menor el contenido de un array. \n" +
            "m)Salir. \n"

        var seleccion = prompt("Introduce la letra que corresponda con el sigueinte menu: \n \n "+menu)
        switch (seleccion.toUpperCase()){
            case "A":
                a()
                break;
            case "B":
                b()
                break;
            case "C":
                c()
                break;
            case "D":
                d()
                break;
            case "E":
                e()
                break;
            case "F":
                f()
                break;
            case "G":
                g()
                break;
            case "H":
                h()
                break;
            case "I":
                i()
                break;
            case "J":
                j()
                break;
            case "K":
                k()
                break;
            case "L":
                l()
                break;
            case "M":
                finalizar = false
                break;
        }

    }

    function a(){
        let numerospares = []
        for (let i = 0; i< nums.length; i++){
            if (nums[i] % 2 == 0){
                numerospares.push(nums[i])
            }
        }
        alert("Los numeros pares de "+nums+" son: "+numerospares)
    }
    function b(){
        let numeroIntroducido = parseInt(prompt("Introduce el numero que quieres buscar en el array introducido: "))
        let posiciones = []
        for (let i = 0; i<numsIntroducidos.length; i++) {
            if (numsIntroducidos[i] == numeroIntroducido) {
                posiciones.push(i+1)
            }
        }
        if (posiciones.length == 0 ){
            alert("No se ha encontrado el numero introducido en el array.")
        }else {
            alert(numsIntroducidos+" El numero "+numeroIntroducido+" se ha ecnontrado en las posiciones: "+posiciones)
        }
    }
    function c() {
        let numerosMayores10 = []
        for (let i = 0; i<nums.length; i++){
            if (nums[i] > 10){
                numerosMayores10.push(nums[i])
            }
        }
        if (numerosMayores10.length == 0){
            alert("No se han encontrado numeros mayores de 10")
        }else{
            alert(nums+" Los numeros mayores de 10 son: "+numerosMayores10)
        }


    }
    function d() {
        let numsStrings = ""
        for (let i = 0; i<nums.length; i++){
            let auxNumerosATexto
            auxNumerosATexto = nums[i]
            numsStrings += auxNumerosATexto.toString() +" "
        }
        alert("Los numeros del array: "+nums+ "La cadena de caracteres con los numeros del array es: "+numsStrings+ "Son del tipo: "+typeof numsStrings)


    }
    function e() {
        let arrayAuxiliar = nums.slice()
        arrayAuxiliar.splice(0,1)
        let medio = (nums.length-1)/2
        medio = parseInt(medio)
        medio = Math.round(medio-1)
        arrayAuxiliar.splice(medio,1)
        let ultimo = nums.length-3
        arrayAuxiliar.splice(ultimo,1)
        alert(nums+" El array queda asi: "+arrayAuxiliar)
    }
    function f() {
        let arrayAuxiliar = nums.concat(numsIntroducidos)
        alert("El array concatenado es: "+arrayAuxiliar)
    }
    function g() {
        let arrayAuxiliar = []
        for (let i = 0; i<nums.length; i++){
            if (nums[i] % 2 != 0){
                arrayAuxiliar.push(nums[i])
            }
        }
        alert(nums+" Los numeros impares son: "+arrayAuxiliar)
    }
    function h() {
        let arrayAuxiliar = numsIntroducidos.slice()
        for (let i = 0; i<arrayAuxiliar.length; i++){
            arrayAuxiliar[i] = arrayAuxiliar[i] +2
        }
        alert(numsIntroducidos+" El array queda asi: "+arrayAuxiliar)
    }
    function i() { // Sin terminar
        let arrayAuxiliar = numsIntroducidos.slice()
        for (let i = 4-1; i<arrayAuxiliar.length; i++){
            arrayAuxiliar[i] = 6
        }
        alert(numsIntroducidos+" El array queda asi: "+arrayAuxiliar)
    }
    function j() {
        let arrayAuxiliar = numsIntroducidos.slice()
        for (let i = 0; i<arrayAuxiliar.length; i++){
            arrayAuxiliar[i] = 6
        }
        alert(numsIntroducidos+" El array queda asi: "+arrayAuxiliar)
    }




}