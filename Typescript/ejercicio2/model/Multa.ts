///<reference path="./Lector.ts"/>

class Multa{
    private _fInicio:Date
    private _gFin:Date
    private _lector:Lector


    constructor(fInicio: Date, gFin: Date, lector: Lector) {
        this._fInicio = fInicio;
        this._gFin = gFin;
        this._lector = lector;
    }


    get fInicio(): Date {
        return this._fInicio;
    }

    set fInicio(value: Date) {
        this._fInicio = value;
    }

    get gFin(): Date {
        return this._gFin;
    }

    set gFin(value: Date) {
        this._gFin = value;
    }

    get lector(): Lector {
        return this._lector;
    }

    set lector(value: Lector) {
        this._lector = value;
    }
}