"use strict"
var sueldo = [[12,10,0],[1,19,0],[34,20,0]]

for (let i = 0; i < sueldo.length; i++) {
    let suma = 0
    let texto = ""
    suma = sueldo[i][0]
    texto += sueldo[i][0] + " + "
    suma = suma + sueldo[i][1]
    texto += sueldo[i][1] + " = "
    sueldo[i][2] = suma
    texto += sueldo[i][2]+" <br>"
    document.write(texto)
}