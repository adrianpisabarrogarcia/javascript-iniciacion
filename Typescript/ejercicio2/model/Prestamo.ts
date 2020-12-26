///<reference path="./Copia.ts"/>
///<reference path="./Lector.ts"/>

class Prestamo{

    private _inicio:Date
    private _fin:Date
    private _copia:Copia
    private _lector:Lector


    constructor(inicio: Date, fin: Date, copia: Copia, lector: Lector) {
        this._inicio = inicio;
        this._fin = fin;
        this._copia = copia;
        this._lector = lector;
    }


    get inicio(): Date {
        return this._inicio;
    }

    set inicio(value: Date) {
        this._inicio = value;
    }

    get fin(): Date {
        return this._fin;
    }

    set fin(value: Date) {
        this._fin = value;
    }

    get copia(): Copia {
        return this._copia;
    }

    set copia(value: Copia) {
        this._copia = value;
    }

    get lector(): Lector {
        return this._lector;
    }

    set lector(value: Lector) {
        this._lector = value;
    }
}