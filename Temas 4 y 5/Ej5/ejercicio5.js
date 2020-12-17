var productos = []

function annadirCesta() {
    let producto = document.getElementById('producto').value
    productos.push(producto)
    mostrarProductoLista(producto)
    document.getElementById('producto').value = ""
}

function mostrarProductoLista(producto) {
    let lista = document.getElementsByTagName("ul")[0]

    let elemento = document.createElement("li")
    elemento.innerText = producto
    lista.appendChild(elemento)
    elemento.addEventListener('dblclick', function (e) {
        lista.removeChild(this)

        let j
        for (j = 0; j < productos.length && this.innerHTML != productos[j]; j++) {
        }
        if (j != productos.length) {
            productos.splice(j, 1)
            //alert(productos)
            insertarCookies()
        }
    })
    insertarCookies()
}

function insertarCookies() {
    let text = "productos= "
    text += productos.toString()
    document.cookie = text
}

function resetearCookies() {
    document.cookie = "productos=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    productos.length = 0
    let list = document.getElementById("lista")
    list.innerHTML = ""

}

window.onload = function cargarCookies() {
    let cookies = document.cookie
    if (cookies.length != 0){
        cookies = cookies.slice(10, cookies.length)
        productos = cookies.split( ",")
        mostrarProductos()

    }

}

function mostrarProductos() {
    let lista = document.getElementsByTagName("ul")[0]


    for (let i = 0; i < productos.length; i++) {
        let elemento = document.createElement("li")
        elemento.innerText = productos[i]
        lista.appendChild(elemento)
        elemento.addEventListener('dblclick', function (e) {
            lista.removeChild(this)

            let j
            for (j = 0; j < productos.length && this.innerHTML != productos[j]; j++) {
            }
            if (j != productos.length) {
                productos.splice(j, 1)
                //alert(productos)
                insertarCookies()
            }
        })

    }

}

