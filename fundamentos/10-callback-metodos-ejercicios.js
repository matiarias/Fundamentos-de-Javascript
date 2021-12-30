//callback
function cualquiera(rrr) {
    //acciones
  }
  
  function otracosa() {
    //acciones
  }
  
  cualquiera(otracosa());
  
  //metodos de los arreglos
  
  let alumnos = ["Fabrizio", "Daniel", "José", "Miqueas"];
  
  let numeros = [50, 78, 100, 1500, 2000];
  
  //find. nos devuelve un solo elemento con el nombre que buscamos

  let busqueda = alumnos.find(function (alumno) {
    return alumno === "José";
  });
  
  //filter nos devuelve todos los elementos que coincidan con el nombre que buscamos.
  // *nota importante: para hacerlo menos estricto podemos usar el metodo includes

  let alumnosJose = alumnos.filter(function (alumno) {
    // return alumno==='Jose'
    return alumno.includes("el");
  });
  
  //map

  let numerosCuadrados = numeros.map(function (numero) {
    return Math.pow(numero, 2);
  });
  
  // alumnos.map(function (persona, index) {
  //   console.log(`${index + 1} - Nombre: ${persona}`);
  // });
  
  //---------------------------------------- ejercicio -----------------------------------------

  let peliculas = [
    "EL HOMBRE DE LA MÁSCARA DE HIERRO",
    "EL HOMBRE DE ACERO",
    "SPIDERMAN 2",
    "AVENGERS END GAME",
  ];
  
  //----------------------------- agregar peliculas --------------------------------

  function agregarPelicula() {
    let titulo = prompt("Ingrese el título de la película 🎞️");
  
    while (titulo) {
      if (buscarPelicula(titulo)) {
        alert("La película ya existe");
      } else {
        peliculas.push(titulo.toUpperCase());
      }
      //verificar que la película no exista
      titulo = prompt("Ingrese el título de la película 🎞️");
    }
    listarPeliculas(peliculas);
  }
  
  //--------------------------------- listar peliculas ----------------------------------

  function listarPeliculas(arreglo) {
    if (arreglo.length > 0) {
      console.log("======Listado de películas======");
      arreglo.sort().map(function (item, index) {
        console.log(`${index + 1} - ${item}`);
      });
      console.log("=============================");
    } else {
      console.log("No hay películas para listar");
    }
  }
  
  //----------------------------- filtrar peliculas -------------------------------------

  function filtrarPeliculas(termino = prompt("Ingrese el término a buscar")) {
    let newPeliculas = peliculas.filter(function (pelicula) {
      return pelicula.includes(termino.toUpperCase());
    });
  
    if (newPeliculas.length > 0) {
      listarPeliculas(newPeliculas);
    } else {
      console.warn("No hay resultados para la búsqueda");
    }
  }
  
  //----------------------- Función que evalua si una película existe ------------------------

  const buscarPelicula = function (titulo) {
    let existePelicula = peliculas.find(function (pelicula) {
      return pelicula === titulo.toUpperCase();
    });
  
    if (existePelicula) {
      return true;
    } else {
      return false;
    }
  };
  
  //---------------------------- Borrar una película ----------------------------------
  
  const borrarPelicula = function () {
    let titulo = prompt("Ingrese la película a eliminar");
  
    let indice = peliculas.indexOf(titulo.toUpperCase());
  
    if (indice >= 0) {
      let validar = confirm(
        `Está seguro que quiere eliminar ${peliculas[indice]}`
      );
  
      if (validar) {
        peliculas.splice(indice, 1);
        alert("Película eliminada 🤙");
      }
    } else {
      alert("Película no encontrada 😞");
    }
  };
  


// * ---------------------------------------- TAREA ------------------------------------------------
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

