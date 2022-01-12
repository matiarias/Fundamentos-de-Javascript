class Usuario {
  constructor(nombre, username, password) {
    this.nombre = nombre;
    this.username = username;
    this.password = password;
  }
  presentacion() {
    console.log("======Tarjeta de presentación======");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`UserName: ${this.username}`);
  }
}

const user1 = new Usuario("Pablo", "pmarino", "123456");
const user2 = new Usuario("Gonzalo", "gwinner", "ABC123");

class Administrador extends Usuario {
  constructor(nombre, username, password, puesto, activo = true) {
    super(nombre, username, password);
    this.puesto = puesto;
    this.activo = activo;
  }

  cambiarActivo() {
    this.activo = !this.activo;
  }

  saludarAdmin() {
    super.presentacion();
    console.log(`Puesto: ${this.puesto}`);
  }
}

const admin1 = new Administrador(
  "Miqueas",
  "miqueas2021",
  "12345678",
  "Gerente regional"
);

/*
    
    Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
    Una propiedad titular.
    Una propiedad saldo, teniendo como valor inicial 0.
    Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
    Un método extraer() que permita retirar la cantidad pasada como parámetro.
    Un método informar() que retorne la información del estado de la cuenta. 
    
    Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
    Rectángulos
    
    */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor) {
    this.saldo += valor;
  }
  extraer(valor) {
    this.saldo -= valor;
  }
  informar() {
    console.log("====Datos de la cuenta====");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
  }
}

/*
?------------------------------------ Tarea ---------------------------------------------

Escribe una clase Producto para crear objetos.
Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/

class Producto {

  constructor(codigo, nombre, precio) {

    this.codigo = codigo
    this.nombre = nombre
    this.precio = precio

  }

  imprimeDatos() {

    console.log('===================');
    console.log(`codigo: ${this.codigo}`);
    console.log(`nombre: ${this.nombre}`);
    console.log(`codigo: ${this.precio}`);

  }

}

const cocaCola = new Producto(32, 'Coca Cola', '150 pesos')
const sprite = new Producto(55, 'Sprite', '160 pesos')
const Fanta = new Producto(37, 'Fanta', '140 pesos')