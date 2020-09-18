"use strict"
for (var i = 1; i<51; i++){
    document.write(i)
    if (i % 4 == 0){
        document.write(" Mútiplo de 4")
    }
    if (i % 9 == 0){
        document.write(" Mútiplo de 9")
    }
    if (i % 5 == 0){
        document.write("<br>")
        document.write("<hr>")
    }
    document.write("<br>")
}