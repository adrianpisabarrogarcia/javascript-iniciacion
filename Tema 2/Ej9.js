"use strict"
var char = prompt("Inserta una letra")
if(char.length == 1){
    let arrayVocales = ["A","E","I","O","U"]
    let vocal = false
    for(var i=0; i<arrayVocales.length && vocal == false; i++){
        if(char.charAt(0).toUpperCase() == arrayVocales[i]){
            vocal = true
        }  
    }
    if (vocal){
        alert("El carácter es una vocal")
    }else{
        alert("El carácter NO es una vocal")
    }
}else{
    alert("No has insertado una letra")
}