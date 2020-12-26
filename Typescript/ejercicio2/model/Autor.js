///<reference path="./Libro.ts"/>
var Autor = /** @class */ (function () {
    function Autor(nombre, nacionalidad, fechaNacimiento, libro) {
        this._nombre = nombre;
        this._nacionalidad = nacionalidad;
        this._fechaNacimiento = fechaNacimiento;
        this._libro = libro;
    }
    Object.defineProperty(Autor.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "nacionalidad", {
        get: function () {
            return this._nacionalidad;
        },
        set: function (value) {
            this._nacionalidad = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "fechaNacimiento", {
        get: function () {
            return this._fechaNacimiento;
        },
        set: function (value) {
            this._fechaNacimiento = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autor.prototype, "libro", {
        get: function () {
            return this._libro;
        },
        set: function (value) {
            this._libro = value;
        },
        enumerable: false,
        configurable: true
    });
    return Autor;
}());
