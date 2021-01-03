///<reference path="./Libro.ts"/>

class Autor{

    private _nombre:string
    private _nacionalidad:string;
    private _fechaNacimiento:Date;
    private _libro:Libro   //he decidido no meter finalmente el libro


    constructor(nombre: string, nacionalidad: string, fechaNacimiento: Date, libro: Libro) {
        this._nombre = nombre;
        this._nacionalidad = nacionalidad;
        this._fechaNacimiento = fechaNacimiento;
        this._libro = libro;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get nacionalidad(): string {
        return this._nacionalidad;
    }

    set nacionalidad(value: string) {
        this._nacionalidad = value;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }

    get libro(): Libro {
        return this._libro;
    }

    set libro(value: Libro) {
        this._libro = value;
    }


}