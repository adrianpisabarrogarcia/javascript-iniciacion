class Persona {
    private _nombre:string;
    private _edad:number;
    private _dni:string;
    private _sexo:string;
    private _peso:number;
    private _altura:number;
    private _estadoCivil:string;


    constructor(nombre: string, edad: number, dni: string, sexo: string, peso: number, altura: number, estadoCivil: string) {
        this._nombre = nombre;
        this._edad = edad;
        this._dni = dni;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }


    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        this._nombre = value;
    }

    get edad(): number {
        return this._edad;
    }

    set edad(value: number) {
        this._edad = value;
    }

    get dni(): string {
        return this._dni;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get peso(): number {
        return this._peso;
    }

    set peso(value: number) {
        this._peso = value;
    }

    get altura(): number {
        return this._altura;
    }

    set altura(value: number) {
        this._altura = value;
    }

    get estadoCivil(): string {
        return this._estadoCivil;
    }

    set estadoCivil(value: string) {
        this._estadoCivil = value;
    }

    //funciones
    calcularIMC(peso:number, altura:number):number{
        let imc:number = peso / (altura * altura)
        if(imc<20){
            return -1
        }
        else if(imc>=20 && imc<=25){
            return 0
        }
        return 1
    }

    esMayorDeEdad(edad:number):boolean {
        if(edad>17){
            return true
        }
        return false
    }

    toString():string {
        let texto:string = ""



        return texto

    }



}