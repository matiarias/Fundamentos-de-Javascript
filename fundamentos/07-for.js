//Bucles

//for

// for (let i = 1; i <= 10; i++) {
//   console.log(`El valor de i es ${i}`);
//   acciones
// }

//tarea
//ingresar la tabla que queremos calcular
//mostrar por consola la tabla

const tabla = parseFloat(prompt("Ingrese la tabla a calcular"));

if (isNaN(tabla)) {
  console.log('Por favor ingresa un número del 1 al 10');

} else {

  console.log(`====== Tabla del ${tabla} ======`);

  for (let i = 1; i <= 10; i++) {
    // 2 x 1 = 2
    //2 x 2 = 4

    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }

  console.log("=========================");

}

