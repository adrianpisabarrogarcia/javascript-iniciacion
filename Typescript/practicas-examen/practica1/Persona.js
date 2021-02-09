var Persona = /** @class */ (function () {
    function Persona(usuario, password) {
        this._usuario = usuario;
        this._password = password;
    }
    Object.defineProperty(Persona.prototype, "usuario", {
        get: function () {
            return this._usuario;
        },
        set: function (value) {
            this._usuario = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
