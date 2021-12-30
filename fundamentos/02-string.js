//  typeof : es un metodo que sirve para saber que tipo de dato es una variable o algo.

//string

let nombre = "Josefina";
let apellido = "Perez";

let frase = "             El futuro es hoy                ";

console.log("Mi nombre es:", nombre, apellido);
console.log("Mi nombre es: " + nombre + " " + apellido);

//template string
// alt gr + }
// tiene que estar si o si dentro de las comilas `` para que funcione el template string. es template string es un metodo que se usa mucho para que se lea ordenado el codigo. concatenando variables dentro de strings. como buena practica vamos a usar este metodo siempre.

console.log(`Mi nombre es ${nombre} ${apellido}`);

//métodos de los string
// recordatorio: los metodos siempre terminan con parentesis
console.log(nombre.toUpperCase());
console.log(nombre.toLowerCase());

//la cantidad de caracteres de un string
console.log(apellido.length);

//obtener un caracter en particular
console.log(nombre.charAt(5));

//obtener caracteres desde una posicion
console.log(nombre.substr(1, 3));

//quitar espacios en blanco adelante y atras de un string
console.log(frase.trim());

//obtener el último caracter
console.log(nombre.charAt(nombre.length - 1));

//como saber si un caracter esta dentro del string
// el metodo includes nos permite buscar dentro de un string si existe ese cararter o palabra dentro del string. nos devuelve con un valor true o false
console.log(nombre.includes('f'));
console.log(frase.includes("mundo"));

//reemplazar caracteres
console.log(frase.replace("futuro", "presente"));
let nuevaFrase = frase.replace("El futuro", "La cena").trim();

// el metodo slice extrae una seccion de una cadena y devuelve una cadena nueva. este metodo sirve basicamente para decir desde donde empieza a contar el metodo y donde termina y a partir de eso crea un nuevo string. por ej: tenemos la palabra josefina. tiene 8 caracteres, pero se empieza a contar a partir del 0. por ende con slice, podemos usarlo de esta manera. le damos un 2 y empezaremos a contar desde el caracter s. y le damos un 5 tenemos el caracter f, y el nuevo string que creamos con el metodo slice seria 'sefi'

console.log(apellido.slice(0, 4));

//split
// el metodo split transforma el string deletreado como en una lista o arreglo. sirve para obtener todas las letras de un string. separa el caracter como le ordenamos. de acuerdo al espacio adentro de las comillas de split
let letras = frase.split(" ");

//join
// este metodo agarra cada palabra o caracter de una lista y lo vuelve a unir. y si dentro de los parentesis le ponemos un guion - . por ej. lo que sucede es que le agrega el guion en vez de los espacios vacios entre cada palabra
let palabritas = letras.join(" ");

/*
Tarea 1:

Dado el siguiente texto:
"React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien."

Reemplazar la palabra React por "Esta librería" en un nuevo texto.
Devuelve en consola si el texto contiene la palabra "eficiente"
Devuelve en consola si el texto contiene la palabra "elementos"

Tarea 2:
 indexOf()
 
Dada la frase: "Hoy es un buen día para aprender"
Separa en un arreglo cada palabra
Crea una nueva frase basandote en la anterior que diga: "Hoy es un buen día"

Tarea 3:

Capitaliza la siguiente palabra: "marmota"
*/

// ejercicios: 

// tarea 1

let textoReact = 'React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.';

let nuevotexto = (textoReact.replace('React', 'Esta libreria'));

console.log(textoReact.includes('eficiente'));
console.log(textoReact.includes('elementos'));

// tarea 2

let frasecopada = 'Hoy es un buen día para aprender'

console.log(frasecopada.split(' '));

let corte = frasecopada.indexOf('para');
console.log(frasecopada.slice(0,corte));

// tarea 3

let animal = 'marmota';
let primeraletramayus = animal.charAt(0).toUpperCase() + animal.slice(1);


