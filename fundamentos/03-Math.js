//Math

let numero = 25.2;

//redondeo al valor minimo. floor siempre redondea hacia abajo. no importa si el numero es 25.9 y este mas cerca del 26. con floor siempre va a redondear hacia abajo. y en este caso seria 25
console.log(Math.floor(numero));

//redondeo segun valor decimal. lo que hace round es que se fija siempre en el valor decima. si el decimal es menor de 5. redondea hacia abajo. si el decimal es mayor de 5. redondea hacia arriba.
console.log(Math.round(numero));

//redondeo para arriba. lo que hace ceil es redondear siempre hacia arriba. no importa el valor decimal. siempre va a redondear hacia arriba.
console.log(Math.ceil(numero));

//obtengo máximo de una lista
console.log(
  `El número máximo de la lista es ${Math.max(23, 89, 1500, 20000, 1000, 89)}`
);

// obtengo el mínimo de una lista
console.log(Math.min(23, 89, 1500, 20000, 1000, 89));

let num = "42.5689";

//convierto numero string a entero
console.log(parseInt(num));

//convierto numero string a decimal
console.log(parseFloat(num));

let base = numero;
let exponente = 2;

//elevo un valor a la potencia
console.log(Math.pow(base, exponente));

//raiz cuadrada de un numero
console.log(Math.sqrt(64));

//obtener un numero aleatorio. lo que hace random es que siempre va a devolver valores aleatorios entre 0 y 1. siempre entre 0 y 1.. aleatoriamente. y si a ramdon lo multiplicamos por algun valor vamos a obtener un valor del 0 al numero que multiplicamos. por ej. si multiplicamos por 10. los valores  que nos va a dar es entte el 0 al 10
console.log(Math.ceil(Math.random() * 10));

//obtener numero con dos decimales
num = parseFloat(num);
console.log(Math.round(num * 100) / 100);

//obtener numero con dos decimales. el toFixed cuando le ponemos un valor o parametro dentro de los parentesis significa la cantidad de decimales que nos va a dar. pero el tofixed nos convierte el numero en un string. por ende si queremos que sea un numero. tenemos que usar de vuelta el parsefloat para convertirlo en un numero decimal
let decimal = parseFloat(num).toFixed(2);
console.log(parseFloat(decimal));
