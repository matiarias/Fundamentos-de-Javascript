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

let carrito = [];

const agregarProducto = function () {
    let agregar = prompt("Elegi el producto");

    while (agregar) {
        carrito.push(agregar.toUpperCase());

        agregar = prompt("Elegi el producto");
    }

    listarProductos(carrito)
};

// !---------------- eliminar un producto del carrito -----------------------

const eliminarProducto = function () {
    let producto = prompt("Ingrese el producto a eliminar");

    let indice = carrito.indexOf(producto.toUpperCase());

    if (indice >= 0) {
        let validar = confirm(
            `Está seguro que quiere eliminar ${carrito[indice]}`
        );

        if (validar) {
            carrito.splice(indice, 1);
            alert("Producto eliminado 🤙");
        }
    } else {
        alert("Producto no encontrado 😞");
    }
};

// !------------------------- listar productos --------------------------------

function listarProductos(arreglo) {

    if (arreglo.length > 0) {

        console.log('========= listado de productos =============');

        arreglo.map(function (item, index) {

            console.log(`${index + 1} - ${item}`);

        });

        console.log('================================');

    } else {

        console.log('no hay peliculas para listar');

    }

};

// ! ----------------------------- filtrar elementos del carrito -----------------------------

function filtrarProductos() {

    let termino = prompt('ingrese el producto a buscar')

    let nuevoCarrito = carrito.filter(function (articulo) {

        return articulo.includes(termino.toUpperCase());

    });

    if (nuevoCarrito.length > 0) {

        listarProductos(nuevoCarrito);

    } else {
        console.warn('no hay resultado para tu busqueda');
    }

};

// ! ----------------------- listar los productos en orden alfabetico ----------------------

function ordenDeLosProductos(articulo) {

     carrito.sort().map(function (item, index) {

        console.log(`${index + 1} - ${item}`)
        
    });
    
};




