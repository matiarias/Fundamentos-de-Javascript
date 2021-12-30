//Variables

//Espacio en memoria

var nombre = "José";

let apellido = "Gonzalez"; //string

const pi = 3.14; //number

//tipos de datos

//string
let cliente = "Alfredo Rodriguez";

//number
let numero1 = 34;
let numero2 = 25.89;
let numero3 = -65;

//boolean
let comprar = true;
let comer = false;

//null
let billetera = null;

//undefined
let caja;

//array o arreglos
// basicamente los array o arreglos son una lista de datos. siempre van entre corchetes y se separan por comas, pueden llevar string, numeros, valores booleanos

let frutas = ["Banana", "Manzana", "Pera", "uva"];

//objetos u object
// cuando definimos un objeto el valor siempre va entre llaves. los objetos son un tipo de dato donde creamos un elemento que tiene propiedades

let persona = {
  nombre: "Matias",
  apellido: "Figueroa",
};

//Operadores

//Aritméticos
let suma = numero1 + numero2;
let resta = numero2 - numero3;
let multiplicacion = numero1 * numero3;
let division = numero1 / numero2;
let resto = numero1 % numero2; 

//unitarios
// el ++ sirve para aumentar un valor extra. le sumamos un valor a lo que ya tiene
++numero1;
// el -- sirve para restar un valor extra. le restamos un valor a lo que ya tiene
--numero1;

//Relacionales

// cuando queramos hacer una comparacion estricta tenemos que utilizar el === ya que no solo estamos comparando el valor, si no tambien el tipo de dato. por ej: si tenemos un num1=10 y un num2="10" y utilizamos el == , el resultado que nos dara sera un true ya que el == solo esta comparando el valor. y num 1 y num 2 tienen un 10 asi que seria true. pero si utilizamos el === nos daria un false, ya que ahi tambien comparamos el tipo de datos y num 1 es un tipo de dato number y num 2 es un tipo de dato string

console.log(numero1 == numero2);
console.log(numero1 >= numero2);
console.log(numero1 <= numero2);
console.log(numero3 != numero2);

//Negacion

// para negar utilizamos el signo de admiracion ! para negar una variable, por ej, si tengo una variable let abierto = false. va a dar de resultado false, para negarla le debemos poner el signo de admiracion delante de la variable por ej: !abierto, y se transformaria en un true, ya que la negaria.

let abierto = false;

//Tarea
// Creamos dos variables: numero1, numero2
// mostramos por consola los resultados de las operaciones
// Sumamos dos números
// Restamos dos números
// multiplicamos dos números
// Dividimos dos npumeros
// comparamos si el numero 1 es mayor o igual que numero 2
// comparamos si numero 1 es distinto de numero 2

let num1 = 20;
let num2 = 82;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

console.log(
  "El resultado si el numero 1 es mayor o igual que numero 2 es",
  num1 >= num2
);

console.log("El resultado si numero 1 es distinto de numero 2", num1 != num2);

// otros ejemplos de como usar el consol.log

console.log("Mi nombre es " + nombre + " " + apellido);

// el metodo prompt sirve para pedirle datos al usuario. y los datos ingresados los podemos asignar a una variable.

let nombrecito = prompt("Escribe tu nombre");
let edad = prompt("Ingresa tu edad");

console.log("=======Datos de usuario============");
console.log("Nombre de usuario: " + nombrecito);
console.log("Edad: " + edad);
console.log("====================================");
