class Persona{
    private _usuario:string;
    private _password:string;


    constructor(usuario: string, password: string) {
        this._usuario = usuario;
        this._password = password;
    }


    get usuario(): string {
        return this._usuario;
    }

    set usuario(value: string) {
        this._usuario = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }
}