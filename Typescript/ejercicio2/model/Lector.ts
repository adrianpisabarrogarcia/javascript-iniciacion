///<reference path="./Multa.ts"/>
///<reference path="./Prestamo.ts"/>
///<reference path="../controller/ejercicio2.ts"/>

class Lector{
    private _nSocio:number
    private _nombre:string
    private _telefono:string
    private _direccion:string
    //private _multa:Multa

    constructor(nSocio: number, nombre: string, telefono: string, direccion: string/*, multa: Multa*/) {
        this._nSocio = nSocio;
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        //this._multa = multa;
    }


    get nSocio(): number {
        return this._nSocio;
    }

    set nSocio(value: number) {
        this._nSocio = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get telefono(): string {
        return this._telefono;
    }

    set telefono(value: string) {
        this._telefono = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }
    /*
    get multa(): Multa {
        return this._multa;
    }

    set multa(value: Multa) {
        this._multa = value;
    }

     */



    //Métodos de la clase lector
    devolver(){
        let devolucion = new Array;
        devolucion.push(this.nSocio)
        let fechaActual:Date = new Date();
        devolucion.push(fechaActual.getTime())

        return devolucion
    }

    prestar(){
        let contador:number = 0;
        for (let i = 0 ; i < prestamos.length; i++) {
            if (this.nSocio != prestamos[i]._lector._nSocio){
                contador ++
            }
        }
        if (!(contador > 0)){
            this.devolver()
        }
    }

    /*
    multar():number{
        let dias:number;
        dias = (this.multa._gFin - this.multa._fInicio) * -1 //para saber cuantos dias de multa tengo.


        return dias;
    }

     */


}

