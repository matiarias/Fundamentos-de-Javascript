//-------objetos-----------------

let persona = {
  nombre: "Fabrizio",
  apellido: "Tonin",
  domicilio: "Gral Paz 576",
  ciudad: "Tucumán",
  saludar() {
    console.log(`Hola, soy ${this.nombre} ${this.apellido}`);
  },
};

console.log(persona.nombre);

//Cambiar el valor de una propiedad
persona.nombre = "Alfredo";

persona.edad = 25;

delete persona.saludar;

for (const key in persona) {
  console.log(`${key}: ${persona[key]}`);
}


/*
* Recordatorio: Para agregar o remplazar propiedades dentro de un objeto podemos usar por ej: persona.nombre, persona.apellido tanto para remplazar o crear nuevas propiedas, siempre poniendo el nombre del objeto seguido de un punto y el nombre de la propiedad a crear o remplazar, y otra forma es con corchetes, por ej: persona['nombre'] persona['ciudad], con corchetes sirve cuando iteramos con un for in. y en el console log usamos los corchetes. por ej: console.log(`${persona[key]}`). Key haria referencia a cada objeto dentro de un for in.
*/

//arreglos de objetos
let cursos = [
  { id: 1, titulo: "Javascript para principiantes", precio: 2500 },
  { id: 2, titulo: "HTML introducción", precio: 1500 },
  { id: 3, titulo: "CSS diseño responsive", precio: 2000 },
  { id: 4, titulo: "Bootstrap 5 grillas responsive", precio: 2100 },
];

cursos.map(function (curso) {
  console.log(curso.titulo);
});


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
  { Titulo: 'Cinema Paradiso', Genero: 'Drama', Year: 1988, Sinopsis: 'Salvatore es un niño de un pueblo italiano, donde el único pasatiempo es ir al cine y Salvatore crece creyendo que el cine es magia.' },

  { Titulo: 'Merlí', Genero: 'Drama', Year: 2015, Sinopsis: 'Merlí sigue a un profesor de Filosofía muy peculirar. Merlí Bergeron vive con su madre tras ser desalojado y tiene además que aprender a convivir con su hijo Bruno. Cuando le contratan en el instituto Àngel Guimerà, el profesor invita a reflexionar y a opinar a sus alumnos en unas clases con métodos poco ortodoxos e imprevisibles. Más allá de los autores filosóficos Merlí utiliza la enseñanza para solucionar tanto sus problemas como los de sus alumnos.' },

  { Titulo: 'Gladiador', Genero: 'Drama', Year: 2000, Sinopsis: 'El general romano Máximo es el soporte más leal del emperador Marco Aurelio, que lo ha conducido de victoria en victoria. Sin embargo, Cómodo, el hijo de Marco Aurelio, está celoso del prestigio de Máximo y aún más del amor que su padre siente por él.' },
];



const mostrarPeliculas = function () {

  movies.map(function (movie) {

    console.log(movie);

  });

};
