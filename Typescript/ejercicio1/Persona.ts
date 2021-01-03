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
        this._dni = this.generarDNI(dni);
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._estadoCivil = estadoCivil;
    }

    generarDNI(dni:string):string{
        let dniSinLetra = Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
        let letra:number = dniSinLetra % 23
        let letrasDNI:string = "TRWAGMYFPDXBNJZSQVHLCKE"
        let letraDNIFijo:string = letrasDNI.charAt(letra)
        dni = dniSinLetra + letraDNIFijo
        return dni
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
    calcularIMC():number{
        let imc:number = this.peso / (this.altura * this.altura)
        if(imc<20){
            return -1
        }
        else if(imc>20 && imc<=25){
            return 0
        }
        return 1
    }

    esMayorDeEdad():boolean {
        if(this.edad>17){
            return true
        }
        return false
    }

    toString():string {
        let texto:string = ""
        texto += "Nombre: "+this.nombre+"<br>"
        texto += "Edad: "+this.edad+"<br>"
        texto += "DNI: "+this.dni+"<br>"
        texto += "Sexo: "+this.sexo+"<br>"
        texto += "Peso: "+this.peso+"<br>"
        texto += "Altura: "+this.altura+"<br>"
        texto += "Estado Civil: "+this.estadoCivil+"<br>"
        if (this.calcularIMC() == -1){
            texto += "Cálculo de ICM: Peso bajo"+"<br>"
        }
        else if(this.calcularIMC() == 0){
            texto += "Cálculo de ICM: Peso ideal"+"<br>"
        }else{
            texto += "Cálculo de ICM: Sobrepeso"+"<br>"
        }

        if (this.esMayorDeEdad()){
            texto += "Es mayor de edad"+"<br>"
        }else{
            texto += "No es mayor de edad"+"<br>"
        }

        return texto
    }


    comprobarSexo(sexo:string){
        if (sexo != "H" && sexo != "M") {
            sexo = "H"
        }
    }


}