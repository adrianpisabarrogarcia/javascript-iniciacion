var Persona = /** @class */ (function () {
    function Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = this.generarDNI(dni);
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }
    Persona.prototype.generarDNI = function (dni) {
        var dniSinLetra = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        var letra = dniSinLetra % 23;
        var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        var letraDNIFijo = letrasDNI.charAt(letra);
        dni = dniSinLetra + letraDNIFijo;
        return dni;
    };
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (value) {
            this._edad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (value) {
            this._sexo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "peso", {
        get: function () {
            return this._peso;
        },
        set: function (value) {
            this._peso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "altura", {
        get: function () {
            return this._altura;
        },
        set: function (value) {
            this._altura = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "estadoCivil", {
        get: function () {
            return this._estadoCivil;
        },
        set: function (value) {
            this._estadoCivil = value;
        },
        enumerable: false,
        configurable: true
    });
    //funciones
    Persona.prototype.calcularIMC = function () {
        var imc = this.peso / (this.altura * this.altura);
        if (imc < 20) {
            return -1;
        }
        else if (imc > 20 && imc <= 25) {
            return 0;
        }
        return 1;
    };
    Persona.prototype.esMayorDeEdad = function () {
        if (this.edad > 17) {
            return true;
        }
        return false;
    };
    Persona.prototype.toString = function () {
        var texto = "";
        texto += "Nombre: " + this.nombre + "<br>";
        texto += "Edad: " + this.edad + "<br>";
        texto += "DNI: " + this.dni + "<br>";
        texto += "Sexo: " + this.sexo + "<br>";
        texto += "Peso: " + this.peso + "<br>";
        texto += "Altura: " + this.altura + "<br>";
        texto += "Estado Civil: " + this.estadoCivil + "<br>";
        if (this.calcularIMC() == -1) {
            texto += "Cálculo de ICM: Peso bajo" + "<br>";
        }
        else if (this.calcularIMC() == 0) {
            texto += "Cálculo de ICM: Peso ideal" + "<br>";
        }
        else {
            texto += "Cálculo de ICM: Sobrepeso" + "<br>";
        }
        if (this.esMayorDeEdad()) {
            texto += "Es mayor de edad" + "<br>";
        }
        else {
            texto += "No es mayor de edad" + "<br>";
        }
        return texto;
    };
    Persona.prototype.comprobarSexo = function (sexo) {
        if (sexo != "H" && sexo != "M") {
            sexo = "H";
        }
    };
    return Persona;
}());
