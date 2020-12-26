///<reference path="./Copia.ts"/>
///<reference path="./Lector.ts"/>
var Prestamo = /** @class */ (function () {
    function Prestamo(inicio, fin, copia, lector) {
        this._inicio = inicio;
        this._fin = fin;
        this._copia = copia;
        this._lector = lector;
    }
    Object.defineProperty(Prestamo.prototype, "inicio", {
        get: function () {
            return this._inicio;
        },
        set: function (value) {
            this._inicio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prestamo.prototype, "fin", {
        get: function () {
            return this._fin;
        },
        set: function (value) {
            this._fin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prestamo.prototype, "copia", {
        get: function () {
            return this._copia;
        },
        set: function (value) {
            this._copia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Prestamo.prototype, "lector", {
        get: function () {
            return this._lector;
        },
        set: function (value) {
            this._lector = value;
        },
        enumerable: false,
        configurable: true
    });
    return Prestamo;
}());
