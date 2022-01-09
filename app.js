// const persona = function (nombre, apellido, domicilio, email) {

//     document.write(`Me llamo ${nombre} ${apellido}, vivo en el domicilio ${domicilio}, si deseas contactarme te dejo mi correo electrónico: ${email}. Que tengas un buen día.`);

//   };
//   persona('Matias', 'Arias', 'Brasil 470 oeste', 'matt.arias182@gmail.com');

// let misProductos = [];

// function agregarProducto() {
//   let agregar = prompt('agrega tus productos a tu canasta');

//   while (agregar) {
//     misProductos.push(agregar)

//     agregar = prompt('agrega tus productos a tu canasta')

//   }

//   console.log(misProductos);

// }

// let conserjes = ['matias', 'matias', 'daniela', 'macarena', 'braian']

// let hotel = conserjes.map(function(conserje, index){
//     console.log(`${index + 1} - nombre: ${conserje}`);
// })

// let busqueda = conserjes.filter(function (nombre) {
//     return nombre === 'matias';

// })

/* 

? ------------------ Crear una aplicación con javascript de un carrito de compras -------------------------

La aplicación debe poder hacer lo siguiente:
Agregar productos al carrito (agregarlos hasta que se cancele el prompt)
Eliminar un producto del carrito (recibe el nombre del producto a eliminar)
Filtrar elementos del carrito según una palabra o término ingresado
Listar todos los productos que estén en el carrito en orden alfabético
*/

// * ------------------------------ Supermercado Arias -------------------------------------

// !------------------------ agregar productos al carrito -----------------------------

// let carrito = [];

// const agregarProducto = function () {
//     let agregar = prompt("Elegi el producto");

//     while (agregar) {
//         carrito.push(agregar.toUpperCase());

//         agregar = prompt("Elegi el producto");
//     }

//     listarProductos(carrito)
// };

// // !---------------- eliminar un producto del carrito -----------------------

// const eliminarProducto = function () {
//     let producto = prompt("Ingrese el producto a eliminar");

//     let indice = carrito.indexOf(producto.toUpperCase());

//     if (indice >= 0) {
//         let validar = confirm(
//             `Está seguro que quiere eliminar ${carrito[indice]}`
//         );

//         if (validar) {
//             carrito.splice(indice, 1);
//             alert("Producto eliminado 🤙");
//         }
//     } else {
//         alert("Producto no encontrado 😞");
//     }
// };

// // !------------------------- listar productos --------------------------------

// function listarProductos(arreglo) {

//     if (arreglo.length > 0) {

//         console.log('========= listado de productos =============');

//         arreglo.map(function (item, index) {

//             console.log(`${index + 1} - ${item}`);

//         });

//         console.log('================================');

//     } else {

//         console.log('no hay peliculas para listar');

//     }

// };

// // ! ----------------------------- filtrar elementos del carrito -----------------------------

// function filtrarProductos() {

//     let termino = prompt('ingrese el producto a buscar')

//     let nuevoCarrito = carrito.filter(function (articulo) {

//         return articulo.includes(termino.toUpperCase());

//     });

//     if (nuevoCarrito.length > 0) {

//         listarProductos(nuevoCarrito);

//     } else {
//         console.warn('no hay resultado para tu busqueda');
//     }

// };

// // ! ----------------------- listar los productos en orden alfabetico ----------------------

// function ordenDeLosProductos(articulo) {

//      carrito.sort().map(function (item, index) {

//         console.log(`${index + 1} - ${item}`)

//     });

// };

// let valor1 = parseFloat(prompt("Ingresa tu primer valor"));
// let valor2 = parseFloat(prompt("Ingresa tu segundo valor"));

// function calculadora(num1, num2) {
//     if (!num1 || !num2) {
//         return "falta alguno de los numeros";
//     }

//     let operacion = prompt("Ingresa tu operación");

//     switch (operacion) {
//         case 'suma':
//             return num1 + num2;

//         case 'resta':
//             return num1 - num2;

//         case 'multi':
//             return num1 * num2;

//         case 'division':
//             return num1 / num2;

//         default:
//             return alert("Operación invalida");
//     }
// }

// const resultado = calculadora(valor1, valor2);

// console.log('el resultado es',resultado);


// function tablaDeMulti() {

//     let multiplicar = parseInt(prompt('ingresa la tabla a calcular'))

//     while (multiplicar) {
//         console.log(`------------ Tabla del ${multiplicar} -----------------`);

//         for (let index = 1; index <= 10; index++) {

//             console.log(`${multiplicar} x ${index} ${multiplicar * index}`);

//         }

//         console.log('-------------------------------------');

//         multiplicar = parseInt(prompt('ingresa la tabla a calcular'))



//     }
// }

// tablaDeMulti()

let arreglo = ['matias', 'juan pablo', 'viviana', 'carlos arias', 'evelyn', 'florencia']

console.log(arreglo.indexOf('carlos arias'));

// for (const persona of arreglo) {

//     console.log(`Nosotros somos integrantes de la Familia Arias ${arreglo}`);

// }

const agregarFamiliar = function () {

    let mascotas = prompt('ingresa nuevo integrante de la familia')


    while (mascotas) {

        arreglo.push(mascotas);

        mascotas = prompt('ingresa nuevo integrante de la familia')
    }

}



// *---------------------------------- Tarea de Objetos ------------------------------------

/*
?------------------------------ Objeto Persona ----------------------------------

Crear un objeto llamado persona que contenga los siguientes atributos:
Nombre
Edad
DNI
Domicilio
Hijos (cantidad)
Profesión
Agregar Métodos:
Saludar ( mensaje de presentación en navegador o consola)
Listar (muestra la lista con los datos de la persona)
*/

let persona = {
    Nombre: 'Matias',
    Edad: 33,
    DNI: 34054750,
    Domicilio: 'Brasil 470 Oeste',
    Hijos: 'No',
    Profesion: 'Front End Developer',

    saludar() {
        console.log(`Hola como están, Mi Nombre es: ${this.Nombre}`);
    },

    listar() {

        for (const key in persona) {
            console.log(`${key}: ${persona[key]}`);

        };

    },
};



/*
?---------------------------------------- Arreglo de objetos ------------------------------

Crear un arreglo de objetos que contenga datos de películas como:
Título
Género
Año
sinopsis
Crea una función que permita mostrar en una lista cada película con sus datos.
*/

let movies = [
    { Titulo: 'Cinema Paradiso', Genero: 'Drama', Año: 1988, Sinopsis: 'Salvatore es un niño de un pueblo italiano, donde el único pasatiempo es ir al cine y Salvatore crece creyendo que el cine es magia.' },

    { Titulo: 'Merlí', Genero: 'Drama', Año: 2015, Sinopsis: 'Merlí sigue a un profesor de Filosofía muy peculirar. Merlí Bergeron vive con su madre tras ser desalojado y tiene además que aprender a convivir con su hijo Bruno. Cuando le contratan en el instituto Àngel Guimerà, el profesor invita a reflexionar y a opinar a sus alumnos en unas clases con métodos poco ortodoxos e imprevisibles. Más allá de los autores filosóficos Merlí utiliza la enseñanza para solucionar tanto sus problemas como los de sus alumnos.' },

    { Titulo: 'Gladiador', Genero: 'Drama', Año: 2000, Sinopsis: 'El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él.' },
];



const mostrarPeliculas = function () {

    movies.map(function (movie) {

        console.log(movie);

    });

};


