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

    movies.map(function (movie,) {

        console.log(movie);

    });

};


const usuarios = [
    {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496",
            },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
        },
    },

    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618",
            },
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains",
        },
    },

    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653",
            },
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications",
        },
    },

    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990",
            },
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services",
        },
    },

    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342",
            },
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems",
        },
    },

];

const userList = function (arreglo) {

    console.log('--------------- Lista de usuarios --------------------');

    arreglo.map(function (usuario) {

        console.log(`Nombre: ${usuario.name}`);
        console.log(`Username: ${usuario.username}`);
        console.log(`Email: ${usuario.email}`);
        console.log(`Ciudad: ${usuario.address.city}`);
        console.log(`Cel: ${usuario.phone}`);
        console.log(`Lugar de trabajo: ${usuario.company.name}`);

        console.log('----------------------------------------------');

    });

    console.log(`Registros de usuarios: ${arreglo.length}`);

};

// userList(usuarios);

const filtrarUsers = function (termino) {
    const encontrados = usuarios.filter(function (user) {
        return user.name.toUpperCase().includes(termino.toUpperCase());
    });

    if (encontrados.length > 0) {
        return userList(encontrados);
    } else {
        console.warn("No hay resultados de la búsqueda");
    };
};

// filtrarUsers('g');

class Familia {

    constructor(nombre, apellido, sexo, ciudad) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
        this.ciudad = ciudad;
    }

    presentacion() {

        console.log('--- tarjeta de presentación ---');
        console.log(`Hola mi nombre es ${this.nombre} ${this.apellido}`);
        console.log(`Somos una gran familia de ${this.ciudad} criados por el mejor papá del mundo`);
    }
}

const integrante1 = new Familia('Carlos', 'Arias', 'Masculino', 'San Juan');
const integrante2 = new Familia('Viviana', 'Arias', 'Femenino', 'San Juan');
const integrante3 = new Familia('Matias', 'Arias', 'Masculino', 'San Juan');
const integrante4 = new Familia('Evelyn', 'Arias', 'Femenino', 'San Juan');
const integrante5 = new Familia('Florencia', 'Arias', 'Femenino', 'San Juan');
const integrante6 = new Familia('Juan Pablo', 'Arias', 'Masculino', 'San Juan');

class Mascota extends Familia {

    constructor(nombre, apellido, sexo, ciudad, raza,) {
        super(nombre, apellido, sexo, ciudad)
        this.raza = raza

    };

    jugar() {
        console.log(`Hola yo soy una mascota de la flia Arias que se llama ${this.nombre}`);
    };
};

const perro1 = new Mascota('Benito', 'Arias', 'Macho', 'San Juan', 'Caniche')
const perro2 = new Mascota('Felipe', 'Arias', 'Macho', 'San Juan', 'Caniche')

let misProductos = [];

class Producto {

    constructor(codigo, nombre, precio) {

        this.codigo = codigo
        this.nombre = nombre
        this.precio = precio

    };

    imprimeDatos() {

        console.log('====================');
        console.log(`codigo: ${this.codigo}`);
        console.log(`nombre: ${this.nombre}`);
        console.log(`precio: ${this.precio}`);

    };

};

let cocaCola = new Producto(32, 'Coca Cola', '150 pesos');
let sprite = new Producto(55, 'Sprite', '160 pesos');
let fanta = new Producto(37, 'Fanta', '140 pesos');

misProductos.push(cocaCola);
misProductos.push(sprite);
misProductos.push(fanta);
