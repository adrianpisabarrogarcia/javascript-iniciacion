///<reference path="./Copia.ts" />
///<reference path="./Autor.ts" />
enum TipoLibro{
    novela,
    teatro,
    poesia,
    ensayo
}

class Libro{

    private _titulo:string
    private _tipo:TipoLibro
    private _editorial:string
    private _anyo:number
    private _copias:Array<Copia>
    private _autores:Array<Autor>


    constructor(titulo: string, tipo: TipoLibro, editorial: string, anyo: number, copias: Array<Copia>, autores: Array<Autor>) {
        this._titulo = titulo;
        this._tipo = tipo;
        this._editorial = editorial;
        this._anyo = anyo;
        this._copias = copias;
        this._autores = autores;
    }


    get titulo(): string {
        return this._titulo;
    }

    set titulo(value: string) {
        this._titulo = value;
    }

    get tipo(): TipoLibro {
        return this._tipo;
    }

    set tipo(value: TipoLibro) {
        this._tipo = value;
    }

    get editorial(): string {
        return this._editorial;
    }

    set editorial(value: string) {
        this._editorial = value;
    }

    get anyo(): number {
        return this._anyo;
    }

    set anyo(value: number) {
        this._anyo = value;
    }

    get copias(): Array<Copia> {
        return this._copias;
    }

    set copias(value: Array<Copia>) {
        this._copias = value;
    }

    get autores(): Array<Autor> {
        return this._autores;
    }

    set autores(value: Array<Autor>) {
        this._autores = value;
    }
}