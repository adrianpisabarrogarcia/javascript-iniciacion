///<reference path="./Libro.ts"/>
var EstadoCopia;
(function (EstadoCopia) {
    EstadoCopia[EstadoCopia["prestdo"] = 0] = "prestdo";
    EstadoCopia[EstadoCopia["retraso"] = 1] = "retraso";
    EstadoCopia[EstadoCopia["biblioteca"] = 2] = "biblioteca";
    EstadoCopia[EstadoCopia["reparacion"] = 3] = "reparacion";
})(EstadoCopia || (EstadoCopia = {}));
var Copia = /** @class */ (function () {
    function Copia(id, estado, libro) {
        this._id = id;
        this._estado = estado;
        this._libro = libro;
    }
    Object.defineProperty(Copia.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Copia.prototype, "estado", {
        get: function () {
            return this._estado;
        },
        set: function (value) {
            this._estado = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Copia.prototype, "libro", {
        get: function () {
            return this._libro;
        },
        set: function (value) {
            this._libro = value;
        },
        enumerable: false,
        configurable: true
    });
    return Copia;
}());
