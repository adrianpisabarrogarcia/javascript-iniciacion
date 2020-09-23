"use sctrict"
var fechaNavidad = new Date("2020/12/25")
var fechaActual = new Date()

var fechaResta = fechaNavidad.getTime() - fechaActual.getTime()

alert("Quedan: "+Math.round(fechaResta/(1000*60*60*24))+" días para navidad.")
