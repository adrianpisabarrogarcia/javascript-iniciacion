///<reference path="./Multa.ts"/>
var Lector = /** @class */ (function () {
    function Lector(nSocio, nombre, telefono, direccion, multa) {
        this._nSocio = nSocio;
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._multa = multa;
    }
    Object.defineProperty(Lector.prototype, "nSocio", {
        get: function () {
            return this._nSocio;
        },
        set: function (value) {
            this._nSocio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lector.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lector.prototype, "telefono", {
        get: function () {
            return this._telefono;
        },
        set: function (value) {
            this._telefono = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lector.prototype, "direccion", {
        get: function () {
            return this._direccion;
        },
        set: function (value) {
            this._direccion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Lector.prototype, "multa", {
        get: function () {
            return this._multa;
        },
        set: function (value) {
            this._multa = value;
        },
        enumerable: false,
        configurable: true
    });
    return Lector;
}());
