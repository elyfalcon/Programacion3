var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Clase Persona:
Clase Persona
Atributos (todos privados)
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (abstracto). Retorna un string.
 ToString. Retorna un string mostrando todos los datos de la persona, separados por
un guión medio (-).
 getters para cada uno de los atributos.
*/
var Empleados;
(function (Empleados) {
    var Persona = /** @class */ (function () {
        //Constructor
        function Persona(nombre, apellido, dni, sexo) {
            this._apellido = apellido;
            this._nombre = nombre;
            this._dni = dni;
            this._sexo = sexo;
        }
        //--------Get-------
        //metodo
        Persona.prototype.GetApellido = function () {
            return this._apellido;
        };
        Object.defineProperty(Persona.prototype, "Dni", {
            //propiedad
            get: function () {
                return this._dni;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Nombre", {
            get: function () {
                return this._nombre;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Persona.prototype, "Sexo", {
            get: function () {
                return this._sexo;
            },
            enumerable: true,
            configurable: true
        });
        //Metodos instancia
        Persona.prototype.ToString = function () {
            return "Nombre:" + this._nombre + "\nApellido:" + this._apellido + "\nDNI:" + this._dni + "\nSexo:" + this._sexo;
            //return "Nombre:"+this._nombre+"\nApellido:"+this._apellido+"\nDNI:"+this._dni+"\nSexo:"+this._sexo;
        };
        return Persona;
    }());
    Empleados.Persona = Persona;
})(Empleados || (Empleados = {}));
/*Clase Empleado:
Atributos (todos protegidos)
Maximiliano Neiner TypeScript - POO Página 4
Constructor (inicializa los atributos de la clase)
Métodos (de instancia)
 Hablar (polimorfismo). Retorna un string con el formato “El empleado habla Español ”,
siendo Español, el valor recibido por parámetro.
 ToString (polimorfismo). Retorna un string mostrando todos los datos del empleado,
separados por un guión medio (-).
 getters para cada uno de los atributos.
*/
///<reference path="Persona.ts"/>
var Empleados;
(function (Empleados) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        //Constructor
        function Empleado(nombre, apellido, dni, sexo, legajo, sueldo) {
            var _this = 
            //inicializo atributos en el constructor de la clase padre
            _super.call(this, nombre, apellido, dni, sexo) || this;
            _this._legajo = legajo;
            _this._sueldo = sueldo;
            return _this;
        }
        Object.defineProperty(Empleado.prototype, "Legajo", {
            //Propiedades
            get: function () {
                return this._legajo;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Empleado.prototype, "Sueldo", {
            get: function () {
                return this._sueldo;
            },
            enumerable: true,
            configurable: true
        });
        Empleado.prototype.Hablar = function (idioma) {
            return "El empleado habla " + idioma + "\n";
        };
        Empleado.prototype.ToString = function () {
            return _super.prototype.ToString.call(this) + "\nLegajo:" + this._legajo + "\nSueldo:" + this._sueldo;
        };
        return Empleado;
    }(Empleados.Persona));
    Empleados.Empleado = Empleado;
})(Empleados || (Empleados = {}));
/*Ejercicio 3:
Testear la jerarquía de clases
Para probar el buen funcionamiento de la jerarquía anteriormente descrita, en la consola
integrada, se deberá instanciar y probar todos los métodos.
Nota: Recordar incluir las referencias a los archivos a ser utilizados desde el main.ts.
*/
//ACA VOY  A ESCRIBIR 
///<reference path ="./Clases/Empleado.ts"/>
var empleado = new Empleados.Empleado("emanuel", "villamayor", 42395106, "M", 107435, 20000);
console.log(empleado.ToString());
console.log(empleado.Hablar("español"));
