///<reference path="./Persona.ts"/>
class Proyecto{

    private _nombre:string;
    private _persona:Persona;


    constructor(nombre: string, persona: Persona) {
        this._nombre = nombre;
        this._persona = persona;
    }


    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get persona(): Persona {
        return this._persona;
    }

    set persona(value: Persona) {
        this._persona = value;
    }
}