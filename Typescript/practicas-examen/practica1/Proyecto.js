///<reference path="./Persona.ts"/>
var Proyecto = /** @class */ (function () {
    function Proyecto(nombre, persona) {
        this._nombre = nombre;
        this._persona = persona;
    }
    Object.defineProperty(Proyecto.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Proyecto.prototype, "persona", {
        get: function () {
            return this._persona;
        },
        set: function (value) {
            this._persona = value;
        },
        enumerable: false,
        configurable: true
    });
    return Proyecto;
}());
