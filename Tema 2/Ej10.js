"use strict"
var nota = prompt("Inserta una nota")
//Una posibilidad
if (nota> 10 || nota < 0){
    alert("Inserta una nota correcta")
}else{
    if (nota<5){
        if (nota<3){
            alert("Muy deficiente")
        }else {
            alert("Insuficiente")
        }
    }else{
        if (nota<7){
            if (nota<6){
                alert("Suficiente")
            }else{
                alert("Bien")
            }
        }else{
            if (nota<9){
                alert("Notable")
            }else{
                alert("Sobresaliente")
            }
        }

    }
}
