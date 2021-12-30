//bucles

//while

// while (condition) {

//     acciones

// }

//ejemplo

let vecesSumar = 0;
let totalSuma = 0;

// do {
//   totalSuma++;
//   vecesSumar--;

//   console.log(
//     `Total de la suma: ${totalSuma} | Veces que faltan sumar: ${vecesSumar}`
//   );
// } while (vecesSumar > 0);

while (vecesSumar > 0) {
  totalSuma++;
  vecesSumar--;

  console.log(
    `Total de la suma: ${totalSuma} | Veces que faltan sumar: ${vecesSumar}`
  );
}

console.log(`Total: ${totalSuma}`);

// do {
//    acciones

// } while (condition);

/* 
!nota importante sobre el do while: lo que hace es que al menos una vez ejecuta las acciones por mas que la condicion no se cumpla. eso es a diferencia del while. que si la condicion no se cumple, el programa simplemente no arranca. no hace nada.
*/ 