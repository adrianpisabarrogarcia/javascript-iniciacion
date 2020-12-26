///<reference path="./Lector.ts"/>
var Multa = /** @class */ (function () {
    function Multa(fInicio, gFin, lector) {
        this._fInicio = fInicio;
        this._gFin = gFin;
        this._lector = lector;
    }
    Object.defineProperty(Multa.prototype, "fInicio", {
        get: function () {
            return this._fInicio;
        },
        set: function (value) {
            this._fInicio = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Multa.prototype, "gFin", {
        get: function () {
            return this._gFin;
        },
        set: function (value) {
            this._gFin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Multa.prototype, "lector", {
        get: function () {
            return this._lector;
        },
        set: function (value) {
            this._lector = value;
        },
        enumerable: false,
        configurable: true
    });
    return Multa;
}());
