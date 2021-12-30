
//funciones


// *-------------------------- funciones declarativas --------------------------------

function saludar(nombre) {
  // console.log('hola', nombre);

  return `hola mi nombre es ${nombre}`

}

// * --------------------------- funciones anonimas ------------------------------------

// ! nota importante: las funciones anonimas siempre van declaradas con una variable, como el ej de abajo

const saludar2 = function (nombre, apellido) {

  // console.log(`hola mi nombre es ${nombre} y mi apellido es ${apellido}`);

  return `hola mi nombre es ${nombre} y mi apellido es ${apellido}`;

}

const tareaFuncion = function (num1, num2) {

  return `el resultado de la suma de num1 y num2 es de: ${num1 + num2}`

}

// ----------------------------------------- Declarativas -------------------------------------
function saludar(nombre) {
  //acciones
  console.log("Hola como va?", nombre);
}

let persona = "Alejandro";

saludar(persona);

// ---------------------------------------- Anónimas ------------------------------------------

const saludar2 = function (pepito) {
  console.log(`Bienvenido ${pepito}`);
  //acciones
};

saludar2(persona);

//---------------------------------------------------------------------------------------------

let num1 = 45;
let num2 = 26;
let num3 = -14;

// function suma(a,b){

//   console.log(a+b)

// }

// suma(34,56)

// ------------------------------------ scope --------------------------------------------

function suma() {
  // let num1=12
  // let num2=20

  num3 = 789;

  console.log(num1 + num2);
}

suma();

// -------------------------------------------- return -------------------------------------

function obtenerPar(num) {
  if (num % 2 === 0) {
    return "El número es par";
  } else {
    return "El número no es par";
  }
}

let mensaje = obtenerPar(20);

//-----------------------------------------------------------------------------------------

let valor1 = parseFloat(prompt("Ingrese el primer valor"));
let valor2 = parseFloat(prompt("Ingrese el segundo valor"));

function calculadora(num1, num2) {
  if (!num1 || !num2) {
    return "Falta alguno de los números";
  }

  let operacion = prompt("Ingrese la operación");

  switch (operacion) {
    case "suma":
      return num1 + num2;

    case "resta":
      return num1 - num2;
    case "multi":
      return num1 * num2;
    case "division":
      return num1 / num2;

    default:
      return "Operación inválida";
  }
}
let resultado = calculadora(valor1, valor2);
console.log("El resultado es", resultado);

//----------------------------------------------------------------------------------------

function calcularTabla() {
  let tabla = parseInt(prompt("Ingrese la tabla a calcular"));

  while (tabla) {
    console.log(`======Tabla del ${tabla}======`);

    for (let i = 1; i <= 10; i++) {
      console.log(`${tabla} x ${i} = ${tabla * i}`);
    }

    console.log("============================");

    tabla = parseInt(prompt("Ingrese la tabla a calcular"));
  }

  // if(isNaN(tabla)){
  //   console.log('El valor ingresado no es un número')
  // }
}



// ? ------------------------------------ tarea funciones -------------------------------------
/*
?Crear una función llamada agregarProducto que pida al usuario ingresar un producto y lo guarde en un arreglo.

Se puede hacer que la función pida ingresar productos una y otra vez hasta que se presione cancelar en el prompt o se deje vacio el campo y se presione aceptar.
Al final la función debe mostrar por consola la lista de los productos ingresados.
*/

let misProductos = [];

function agregarProducto() {
  let agregar = prompt('agrega tus productos a tu canasta');
  
  while (agregar) {
    misProductos.push(agregar)

    agregar = prompt('agrega tus productos a tu canasta')

  }

  console.log(misProductos);

}

/*
?Crear una función anónima que reciba como parámetros nombre, apellido, domicilio y correo electrónico.

La función debe recibir los parámetros y mostrar en el navegador el siguiente mensaje: 'Me llamo <nombre> <apellido> vivo en <domicilio>, si deseas contactarme te dejo mi correo electrónico <email>. Que tengas un buen día.
Para mostrar texto en el navegador debemos usar document.write()
*/

const persona = function (nombre, apellido, domicilio, email) {

  document.write(`Me llamo ${nombre} ${apellido}, vivo en el domicilio ${domicilio}, si deseas contactarme te dejo mi correo electrónico ${email}. Que tengas un buen día.`);

};
persona('Matias', 'Arias', 'Brasil 470 oeste', 'matt.arias182@gmail.com');


