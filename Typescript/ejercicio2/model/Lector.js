///<reference path="./Multa.ts"/>
///<reference path="./Prestamo.ts"/>
///<reference path="../controller/ejercicio2.ts"/>
var Lector = /** @class */ (function () {
    //private _multa:Multa
    function Lector(nSocio, nombre, telefono, direccion /*, multa: Multa*/) {
        this._nSocio = nSocio;
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        //this._multa = multa;
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
    /*
    get multa(): Multa {
        return this._multa;
    }

    set multa(value: Multa) {
        this._multa = value;
    }

     */
    //Métodos de la clase lector
    Lector.prototype.devolver = function () {
        var devolucion = new Array;
        devolucion.push(this.nSocio);
        var fechaActual = new Date();
        devolucion.push(fechaActual.getTime());
        return devolucion;
    };
    Lector.prototype.prestar = function () {
        var contador = 0;
        for (var i = 0; i < prestamos.length; i++) {
            if (this.nSocio != prestamos[i]._lector._nSocio) {
                contador++;
            }
        }
        if (!(contador > 0)) {
            this.devolver();
        }
    };
    return Lector;
}());
