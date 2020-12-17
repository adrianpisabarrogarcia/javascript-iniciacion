var Persona = /** @class */ (function () {
    function Persona(nombre, edad, dni, sexo, peso, altura, estadoCivil) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }
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
    Persona.prototype.calcularIMC = function (peso, altura) {
        var imc = peso / (altura * altura);
        if (imc < 20) {
            return -1;
        }
        else if (imc >= 20 && imc <= 25) {
            return 0;
        }
        return 1;
    };
    Persona.prototype.esMayorDeEdad = function (edad) {
        if (edad > 17) {
            return true;
        }
        return false;
    };
    Persona.prototype.toString = function () {
        var texto = "";
        return texto;
    };
    return Persona;
}());
