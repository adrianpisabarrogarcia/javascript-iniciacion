/*
ATENCIÓN:
Dejo 2 alert puestos para poder saber que estoy escogiendo el
filtro y la cuenta bien y que senote el cambio, aunque perfectamente
se podrían borrar.
 */

//variables globales para compartir en métodos que necesito
var arrayMovimientos = []
var cuenta = 1
var filtro = 1

//creo esta variable para saber cuanto saldo tendría la cuenta e ir mostrándolo con cada movimiento.
//aunque podría ser un atributo de una clase cuenta y cogerlo de ahí sin problemas
var saldoCuenta1 = 200.0
var saldoCuenta2 = 300.5

//Creo los movimientos
function crearMovimientos() {
    for (let i = 0; i < 10; i++) {
        //Inserto fecha
        let date = new Date();
        date.setMonth(date.getMonth() + i)

        //Inserto concepto
        let concepto = "Concepto numero: " + i

        //Inserto importe
        let importe = 100 + (i * 0.5)
            //los elementos pares no van a ser cobros sino pagos
        if (i % 2 == 0){
            importe = importe * -1
        }

        //Inserto cuenta
        let cuenta = 1
        if (i > 5) {
            cuenta = 2
        }

        let m = new Movimientos(date, concepto, importe, cuenta)
        arrayMovimientos.push(m)

    }
}

//Evento cuando cambie de cuenta
$('select').change(function(){
    seleccionarCuenta()
    seleccionFiltro()
})

//Cuando acceda a la página lo utilizaré para directamente marcar la cuenta 1 y filtro 1 ó si actualizo la página y el filtro esta en el 2 mostrar el filtro o la cuenta correspondiente que esta marcada
$( document ).ready(function() {
    seleccionarCuenta()
    seleccionFiltro()
});

//selecciono la cuenta correspondiente del select
function seleccionarCuenta(){
    let valor = $('select').val()
    $(".filtrar").css("display", "block");
    $(".movimientos").css("display", "block");

    cuenta = 1
    if($('select').val() == 2) {
        cuenta = 2
    }
    alert(valor+ " cuenta");
}

//cada vez que cambie de filtro o cuenta tengo que borrar la tabla previa mediante dom y jquery
function borrarTabla(){
    $("tbody").empty();
}

//tengo que seleccionar el filtro de fecha ascendente e importe descendente
function seleccionFiltro(){
    filtro = 1
    if($(".filtrar input[name='ordenado']:checked").val() == 2){
        filtro = 2;
    }
    if(filtro==1){
        ordenarPorFecha()
    }else{
        ordenarPorImporte()
    }
    alert(filtro+" filtro")
    imprimirTabla()
}

//cuando cambie el fitro que también haga las funciones
$("input[name='ordenado']").change(function(){
    seleccionFiltro()
})

//imprimo la tabla según la cuenta que escoja y que me pasa por parámetro (varibale global), la condición debería ir en el for?!¿¿
function imprimirTabla(){
    borrarTabla();
    for (let i = 0; i < arrayMovimientos.length; i++) {
        if (arrayMovimientos[i].numeroCuenta == cuenta) {
            appendTabla(i)
        }
    }
}

//utilizando dom imprimo la tabla
function appendTabla(i){
    let fecha = arrayMovimientos[i].fecha
    fecha = (fecha.getDay()+1)+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()
    let saldo = 0
    if (cuenta == 1){
        saldoCuenta1 = saldoCuenta1 + arrayMovimientos[i].importe
        saldo = saldoCuenta1
    }else{
        saldoCuenta2 = saldoCuenta2 + arrayMovimientos[i].importe
        saldo = saldoCuenta2
    }
    $("tbody").append("<tr>")
    $("tbody tr:last-child").append("<td>"+fecha+"</td>")
    $("tbody tr:last-child").append("<td>"+arrayMovimientos[i].concepto+"</td>")
    $("tbody tr:last-child").append("<td>"+arrayMovimientos[i].importe+"€</td>")
    $("tbody tr:last-child").append("<td>"+saldo+"€</td>")
    $("tbody tr:last-child").append("</tr>")
}

//realizo el filtro por fecha con un sort en el array
function ordenarPorFecha(){
    arrayMovimientos.sort(function (a, b){
        return (a.fecha.getTime() - b.fecha.getTime())
    })

    //si quisieramos hacerlo descendente utilizariamos:
    /*
    arrayMovimientos.sort(function (a, b){
        return (b.fecha.getTime() - a.fecha.getTime())
    })
    */
}

//realizo el filtro por importe con un sort en el array
function ordenarPorImporte(){
    //he querido dejarlo como descendente para poder visualizar el cambio con las fechas
    arrayMovimientos.sort(function (a, b){
        return (b.importe - a.importe)
    })

    //si quisieramos hacerlo ascendente utilizariamos:
    /*
    arrayMovimientos.sort(function (a, b){
        return (a.fecha.getTime() - b.fecha.getTime())
    })
    */
}