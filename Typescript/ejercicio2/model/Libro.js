///<reference path="./Copia.ts" />
///<reference path="./Autor.ts" />
var TipoLibro;
(function (TipoLibro) {
    TipoLibro[TipoLibro["novela"] = 0] = "novela";
    TipoLibro[TipoLibro["teatro"] = 1] = "teatro";
    TipoLibro[TipoLibro["poesia"] = 2] = "poesia";
    TipoLibro[TipoLibro["ensayo"] = 3] = "ensayo";
})(TipoLibro || (TipoLibro = {}));
var Libro = /** @class */ (function () {
    //private _copias:Array<Copia>
    //private _autores:Array<Autor>
    function Libro(titulo, tipo, editorial, anyo /*, copias: Array<Copia>, autores: Array<Autor>*/) {
        this._titulo = titulo;
        this._tipo = tipo;
        this._editorial = editorial;
        this._anyo = anyo;
        //this._copias = copias;
        //this._autores = autores;
    }
    Object.defineProperty(Libro.prototype, "titulo", {
        get: function () {
            return this._titulo;
        },
        set: function (value) {
            this._titulo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "editorial", {
        get: function () {
            return this._editorial;
        },
        set: function (value) {
            this._editorial = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Libro.prototype, "anyo", {
        get: function () {
            return this._anyo;
        },
        set: function (value) {
            this._anyo = value;
        },
        enumerable: false,
        configurable: true
    });
    return Libro;
}());
