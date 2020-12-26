///<reference path="./Libro.ts"/>
enum EstadoCopia {
    prestdo,
    retraso,
    biblioteca,
    reparacion
}

class Copia{

    private _id:string
    private _estado:EstadoCopia
    private _libro:Libro


    constructor(id: string, estado: EstadoCopia, libro: Libro) {
        this._id = id;
        this._estado = estado;
        this._libro = libro;
    }


    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get estado(): EstadoCopia {
        return this._estado;
    }

    set estado(value: EstadoCopia) {
        this._estado = value;
    }

    get libro(): Libro {
        return this._libro;
    }

    set libro(value: Libro) {
        this._libro = value;
    }
}