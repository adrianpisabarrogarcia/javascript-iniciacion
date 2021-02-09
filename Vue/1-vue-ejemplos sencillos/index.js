new Vue({
    el: "#div-1",
    data: {
        saludo: "Hola mundo"
    }
});
new Vue({
    el: "#div-2",
    data: {
        showIF: true,
        showSHOW: true
    },
    methods: {
        estado: function() {
            this.showIF = !this.showIF;
            this.showSHOW = !this.showSHOW;
        }
    }
});
new Vue({
    el: "#div-3",
    data: {
        semana: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
        semanaComplex: [{
            dia: "Lunes",
            abrv: "L"
        }, {
            dia: "Martes",
            abrv: "M"
        }, {
            dia: "Miercoles",
            abrv: "X"
        }, {
            dia: "Jueves",
            abrv: "J"
        }, {
            dia: "Viernes",
            abrv: "V"
        }, {
            dia: "Sabado",
            abrv: "S"
        }, {
            dia: "Domingo",
            abrv: "D"
        }]
    }
});
new Vue({
    el: "#div-4",
    data: {
        tareas: [],
        newTarea: null
    },
    methods: {
        addTarea: function() {
            if (this.newTarea !== null) {
                this.tareas.unshift(this.newTarea);
                this.newTarea = null;
            }
        }
    }
});
new Vue({
    el: "#div-5",
    data: {
        mensaje: "",
        offsetCesar: 3,
        encriptadoCesar: "",
        frutas: [{
            nombre: "Manzana",
            precio: 1.4,
            peso: 300
        }, {
            nombre: "Naranja",
            precio: 0.9,
            peso: 280
        }, {
            nombre: "Platano",
            precio: 1.9,
            peso: 350
        }, {
            nombre: "Piña",
            precio: 2.6,
            peso: 780
        }],
        orden: "desc",
        columna: "precio"
    },
    computed: {
        reverse: function() {
            return this.mensaje.split("").reverse().join("");
        },
        mayusculas: function() {
            return this.mensaje.toUpperCase();
        },
        cifradoCesar: function() {
            var _texto = "";
            var _off = parseInt(this.offsetCesar);
            for (var cont = 0; cont < this.mensaje.length; cont++)
                _texto += String.fromCharCode(this.mensaje.charCodeAt(cont) + _off);

            this.encriptadoCesar = _texto;
        },
        precioFruta: function() {
            var _this = this;
            return this.frutas.sort(function(a, b) {
                if (_this.orden === "asc")
                    return a[_this.columna] > b[_this.columna];
                else
                    return b[_this.columna] > a[_this.columna];
            })
        },

    },
    methods: {
        orderBy: function(ord, col) {
            this.columna = col;
            if (ord == "+") {
                this.orden = "asc";
            } else {
                this.orden = "desc";
            }
        }
    }
});
Vue.filter("Reverse", function(valor) {
    return valor.split("").reverse().join("");
});
Vue.filter("Mayusculas", function(valor) {
    return valor.toUpperCase();
})
new Vue({
    el: "#div-6",
    data: {
        puntuacion: 0,
        peliculas: [{
            titulo: "Indiana Jones y el templo maldito",
            genero: "Aventuras",
            puntuacion: 5
        }, {
            titulo: "Indiana Jones y el arca perdida",
            genero: "Aventuras",
            puntuacion: 6
        }, {
            titulo: "Indiana Jones y la última cruzada",
            genero: "Aventuras",
            puntuacion: 8
        }, {
            titulo: "Indiana Jones y la calavera de cristal",
            genero: "Aventuras",
            puntuacion: 9
        }, {
            titulo: "Los goonies",
            genero: "Aventuras",
            puntuacion: 10
        }],
        buscarComunidad: "",
        comunidades: [
            "Andalucía",
            "Aragón",
            "Principado de Asturias",
            "Baleares",
            "Canarias",
            "Cantabria",
            "Castilla-La Mancha",
            "Castilla y León",
            "Cataluña",
            "Extremadura",
            "Galicia",
            "La Rioja",
            "Comunidad de Madrid",
            "Región de Murcia",
            "Comunidad Foral de Navarra",
            "País Vasco",
            "Comunidad Valenciana"
        ]
    },
    computed: {
        mostrarMinimaPuntuacion: function() {
            var _this = this;
            return this.peliculas.filter(function(pelicula) {
                return pelicula.puntuacion >= _this.puntuacion;
            })
        },
        filtroComunidades: function() {
            var _this = this;
            return this.comunidades.filter(function(com) {
                return com.indexOf(_this.buscarComunidad) >= 0;
            })
        }
    }
});
new Vue({
    el: "#div-7",
    beforeCreate: function() {
        var _temp = "BEFORE CREATE: Inicialización de eventos e inicio del ciclo de vida de VUE.";
        console.log(_temp);
    },
    created: function() {
        var _temp = "CREATED: Inicialización de las injecciones y la reactividad.";
        console.log(_temp);
    },
    beforeMount: function() {
        var _temp = "BEFORE MOUNT: Asigna un elemento (el) a la instancia de VUE y se compila el template dentro de la función render";
        console.log(_temp);
    },
    mounted: function() {
        var _temp = "MOUNTED: Se crea el vm.$el y se sustituye por el elemento indicado en 'el'";
        console.log(_temp);
    },
    beforeUpdate: function() {
        var _temp = "BEFORE UPDATE: Antes de actualizar el data";
        console.log(_temp);
    },
    updated: function() {
        var _temp = "UPDATED: Renderizado y parcheado";
        console.log(_temp);
    },
    beforeDestroy: function() {
        var _temp = "BEDORE DESTROY: Antes de destruir todo (watchers, child, components y event listeners)";
        console.log(_temp);
    },
    destroyed: function() {
        var _temp = "DESTROYED: Destruido";
        console.log(_temp);
    }
});
new Vue({
    el: "#div-8",
    data: {
        usuarios: [{
            "id": 1,
            "contraer": false,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }, {
            "id": 2,
            "contraer": false,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
            "address": {
                "street": "Victor Plains",
                "suite": "Suite 879",
                "city": "Wisokyburgh",
                "zipcode": "90566-7771",
                "geo": {
                    "lat": "-43.9509",
                    "lng": "-34.4618"
                }
            },
            "phone": "010-692-6593 x09125",
            "website": "anastasia.net",
            "company": {
                "name": "Deckow-Crist",
                "catchPhrase": "Proactive didactic contingency",
                "bs": "synergize scalable supply-chains"
            }
        }, {
            "id": 3,
            "contraer": false,
            "name": "Clementine Bauch",
            "username": "Samantha",
            "email": "Nathan@yesenia.net",
            "address": {
                "street": "Douglas Extension",
                "suite": "Suite 847",
                "city": "McKenziehaven",
                "zipcode": "59590-4157",
                "geo": {
                    "lat": "-68.6102",
                    "lng": "-47.0653"
                }
            },
            "phone": "1-463-123-4447",
            "website": "ramiro.info",
            "company": {
                "name": "Romaguera-Jacobson",
                "catchPhrase": "Face to face bifurcated interface",
                "bs": "e-enable strategic applications"
            }
        }, {
            "id": 4,
            "contraer": false,
            "name": "Patricia Lebsack",
            "username": "Karianne",
            "email": "Julianne.OConner@kory.org",
            "address": {
                "street": "Hoeger Mall",
                "suite": "Apt. 692",
                "city": "South Elvis",
                "zipcode": "53919-4257",
                "geo": {
                    "lat": "29.4572",
                    "lng": "-164.2990"
                }
            },
            "phone": "493-170-9623 x156",
            "website": "kale.biz",
            "company": {
                "name": "Robel-Corkery",
                "catchPhrase": "Multi-tiered zero tolerance productivity",
                "bs": "transition cutting-edge web services"
            }
        }, {
            "id": 5,
            "contraer": false,
            "name": "Chelsey Dietrich",
            "username": "Kamren",
            "email": "Lucio_Hettinger@annie.ca",
            "address": {
                "street": "Skiles Walks",
                "suite": "Suite 351",
                "city": "Roscoeview",
                "zipcode": "33263",
                "geo": {
                    "lat": "-31.8129",
                    "lng": "62.5342"
                }
            },
            "phone": "(254)954-1289",
            "website": "demarco.info",
            "company": {
                "name": "Keebler LLC",
                "catchPhrase": "User-centric fault-tolerant solution",
                "bs": "revolutionize end-to-end systems"
            }
        }, {
            "id": 6,
            "contraer": false,
            "name": "Mrs. Dennis Schulist",
            "username": "Leopoldo_Corkery",
            "email": "Karley_Dach@jasper.info",
            "address": {
                "street": "Norberto Crossing",
                "suite": "Apt. 950",
                "city": "South Christy",
                "zipcode": "23505-1337",
                "geo": {
                    "lat": "-71.4197",
                    "lng": "71.7478"
                }
            },
            "phone": "1-477-935-8478 x6430",
            "website": "ola.org",
            "company": {
                "name": "Considine-Lockman",
                "catchPhrase": "Synchronised bottom-line interface",
                "bs": "e-enable innovative applications"
            }
        }, {
            "id": 7,
            "contraer": false,
            "name": "Kurtis Weissnat",
            "username": "Elwyn.Skiles",
            "email": "Telly.Hoeger@billy.biz",
            "address": {
                "street": "Rex Trail",
                "suite": "Suite 280",
                "city": "Howemouth",
                "zipcode": "58804-1099",
                "geo": {
                    "lat": "24.8918",
                    "lng": "21.8984"
                }
            },
            "phone": "210.067.6132",
            "website": "elvis.io",
            "company": {
                "name": "Johns Group",
                "catchPhrase": "Configurable multimedia task-force",
                "bs": "generate enterprise e-tailers"
            }
        }, {
            "id": 8,
            "contraer": false,
            "name": "Nicholas Runolfsdottir V",
            "username": "Maxime_Nienow",
            "email": "Sherwood@rosamond.me",
            "address": {
                "street": "Ellsworth Summit",
                "suite": "Suite 729",
                "city": "Aliyaview",
                "zipcode": "45169",
                "geo": {
                    "lat": "-14.3990",
                    "lng": "-120.7677"
                }
            },
            "phone": "586.493.6943 x140",
            "website": "jacynthe.com",
            "company": {
                "name": "Abernathy Group",
                "catchPhrase": "Implemented secondary concept",
                "bs": "e-enable extensible e-tailers"
            }
        }, {
            "id": 9,
            "contraer": false,
            "name": "Glenna Reichert",
            "username": "Delphine",
            "email": "Chaim_McDermott@dana.io",
            "address": {
                "street": "Dayna Park",
                "suite": "Suite 449",
                "city": "Bartholomebury",
                "zipcode": "76495-3109",
                "geo": {
                    "lat": "24.6463",
                    "lng": "-168.8889"
                }
            },
            "phone": "(775)976-6794 x41206",
            "website": "conrad.com",
            "company": {
                "name": "Yost and Sons",
                "catchPhrase": "Switchable contextually-based project",
                "bs": "aggregate real-time technologies"
            }
        }, {
            "id": 10,
            "contraer": false,
            "name": "Clementina DuBuque",
            "username": "Moriah.Stanton",
            "email": "Rey.Padberg@karina.biz",
            "address": {
                "street": "Kattie Turnpike",
                "suite": "Suite 198",
                "city": "Lebsackbury",
                "zipcode": "31428-2261",
                "geo": {
                    "lat": "-38.2386",
                    "lng": "57.2232"
                }
            },
            "phone": "024-648-3804",
            "website": "ambrose.net",
            "company": {
                "name": "Hoeger LLC",
                "catchPhrase": "Centralized empowering task-force",
                "bs": "target end-to-end models"
            }
        }]
    },
    methods: {
        contraer: function(user) {
            user.contraer = !user.contraer;
            console.log(user.contraer);
        }
    },
    computed: {
        usuariosContraidos: function() {
            return this.usuarios.filter(function(user) {
                return user.contraer;
            })
        }
    }
});
new Vue({
    el: "#div-9",
    data: {
        mostrar: true
    },
    methods: {
        show: function() {
            this.mostrar = !this.mostrar;
        }
    }
});
new Vue({
    el: "#div-10",
    data: {
        url: "https://randomuser.me/api/?results=",
        totalRegistros: 500,
        personas: []
    },
    mounted: function() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas: function() {
            this.$http.get(this.url + this.totalRegistros)
                .then(function(response) {
                    this.personas = response.body.results;
                });
        }
    }
});
new Vue({
    el: "#div-11",
    data: {
        url: "https://randomuser.me/api/?results=",
        totalRegistros: 500,
        personas: []
    },
    mounted: function() {
        this.cargarPersonas();
    },
    methods: {
        cargarPersonas: function() {
            var _this = this;
            axios.get(this.url + this.totalRegistros)
                .then(function(response) {
                    _this.personas = response.data.results;
                });
        }
    }
});