///<reference path="../model/Autor.ts"/>
///<reference path="../model/Copia.ts"/>
///<reference path="../model/Lector.ts"/>
///<reference path="../model/Libro.ts"/>
///<reference path="../model/Multa.ts"/>
///<reference path="../model/Prestamo.ts"/>
//inserciones
var DateTimeFormat = Intl.DateTimeFormat;
var autores = new Array();
var copias = new Array();
var lectores = new Array();
var libros = new Array();
var multas = new Array();
var prestamos = new Array();
function inserciones() {
    //insertar libro
    var libro = new Libro("Viaje al centro de la Tierra", 0, "Pierre-Jules Hetzel", 1864);
    libros.push(libro);
    //insertar autor
    var fechaNacimientoAutor = new Date("1828-02-08");
    var autor = new Autor("Julio Verne", "Francesa", fechaNacimientoAutor, libro);
    autores.push(autor);
    //insertar una copia
    var copia = new Copia("1", 2, libro);
    copias.push(copia);
    //insertar lector
    var lector = new Lector(1, "Adrián Pisabarro García", "666005577", "San Viator, 15");
    lectores.push(lector);
}
$(document).ready(function () {
    inserciones();
    insertarCopias();
    insertarLectores();
    visualizarPrestamos();
});
$("#realizar-prestamo").click(function () {
    //Recogida de datos
    var fechaInicio = $("#fecha-inicio-prestamo").val();
    var fechaFin = $("#fecha-fin-prestamo").val();
    var copiaLibro = $("#seleccion-copia-libro").val();
    var lector = $("#seleccion-lector").val();
    //Fechas en formato Date
    var fechaInicioConvertida = new Date(fechaInicio);
    var fechaFinConvertida = new Date(fechaFin);
    //Comprobaciones del préstamo
    var error = false;
    try {
        var errorTexto = "";
        if (fechaInicio == "" || fechaFin == "" || copiaLibro == "" || lector == "") {
            errorTexto += "Uno de los campos esta vacío";
            error = true;
        }
        if (fechaFinConvertida.getUTCMilliseconds() - fechaInicioConvertida.getUTCSeconds() < 0) {
            errorTexto += "Las fechas no son correctas";
            error = true;
        }
        if (error)
            throw errorTexto;
    }
    catch (err) {
        alert(err);
    }
    if (!error) {
        var i = 0;
        for (i; i < copias.length && copias[i].id != copiaLibro; i++) {
        }
        alert(lector);
        var e = 0;
        for (e; e < lectores.length && lectores[e]._nSocio != lector; e++) {
        }
        var prestamo = new Prestamo(fechaInicioConvertida, fechaFinConvertida, copias[i], lectores[e]);
        prestamos.push(prestamo);
        visualizarPrestamos();
    }
});
function visualizarPrestamos() {
    var textoPrestamos = "";
    for (var i = 0; i < prestamos.length; i++) {
        textoPrestamos += "Fecha inicio: " + prestamos[i]._inicio.getDate() + "/" + prestamos[i]._inicio.getMonth() + 1 + "/" + prestamos[i]._inicio.getFullYear() + "<br>";
        textoPrestamos += "Fecha fin: " + prestamos[i]._fin.getDate() + "/" + prestamos[i]._fin.getMonth() + 1 + "/" + prestamos[i]._fin.getFullYear() + "<br>";
        textoPrestamos += "Libro escogido: " + prestamos[i]._copia._libro._titulo + "<br>";
        textoPrestamos += "Nombre del lector: " + prestamos[i]._lector._nombre + "<br>";
        textoPrestamos += "<br><br>";
    }
    $(".prestamos").html(textoPrestamos);
}
function insertarCopias() {
    var textoInsertarCopias = "<select class=\"form-control\" id=\"seleccion-copia-libro\" required>";
    for (var i = 0; i < copias.length; i++) {
        textoInsertarCopias += "<option value='" + copias[i]._id + "'>";
        textoInsertarCopias += copias[i]._libro._titulo;
        textoInsertarCopias += "</option>";
    }
    textoInsertarCopias += "</select>";
    $("#insercionCopia").html(textoInsertarCopias);
}
function insertarLectores() {
    var textoInsertarLectores = "<select class=\"form-control\" id=\"seleccion-lector\" required>";
    for (var i = 0; i < lectores.length; i++) {
        textoInsertarLectores += "<option value='" + lectores[i]._nSocio + "'>";
        textoInsertarLectores += lectores[i]._nombre;
        textoInsertarLectores += "</option>";
    }
    textoInsertarLectores += "</select>";
    $("#insercionLector").html(textoInsertarLectores);
}
