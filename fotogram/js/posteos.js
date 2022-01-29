// let datos = [
//   {
//     id: 1,
//     usuario: "suzukigame",
//     detalle: "Imagen de paisaje bonito",
//     img: "https://www.nationalgeographic.com.es/medio/2021/05/05/lago-wanakanueva-zelanda_3bca218b_800x800.jpg",
//     like: 0,
//     userLike: [],
//   },

//   {
//     id: 2,
//     usuario: "miraflores",
//     detalle: "Paisaje exótico",
//     img: "http://2.bp.blogspot.com/-8KuSaGEYEMs/UPSuL75AdoI/AAAAAAAAOLI/8Bb7HfkOQXU/s1600/nuevos+paisajes+floridos+con+carretera.jpg",
//     like: 0,
//     userLike: [],
//   },

//   {
//     id: 3,
//     usuario: "pmarino",
//     detalle: "Paisaje vistoso",
//     img: "https://www.jardineriaon.com/wp-content/uploads/2020/11/paisajes-naturales.jpg",
//     like: 0,
//     userLike: [],
//   },
// ];

// -----------------------------------------------------------------------------------------------------

// const inicializarDatos = function (datos) {
//   localStorage.setItem("posteos", JSON.stringify(datos));
// };

let usuario = JSON.parse(localStorage.getItem("usuario"));

/*
*con esta linea de localstorage.getItem posteos lo que estoy haciendo es traer de vuelta el arreglo de objetos datos que ya estaba guardado en local storage mediante la funcion inicializarDatos. esto sirve para hacer mas dinamico el codigo y poder cargar todas las cards con el arreglo datos que ya esta guardado en local storage y ya podemos comentar el arreglo datos uqe esta al principip, ya que nos estamos manejando con el mismo arreglo pero ya guardado en localstorage.
*/
let datos = JSON.parse(localStorage.getItem("posteos")) || [];

// console.log(usuario);

let contenedor_avatar = document.querySelector("#card_avatar");

// let div = document.createElement("div");
let estructura_avatar = `
<div>
<img
class="avatar"
src=${usuario.avatar}
/>
</div>
<div>
<span class="fw-bold">${usuario.username}</span>
<p class="text-muted">${usuario.email}</p>
</div>
`;

// div.innerHTML = estructura_avatar;
// contenedor_avatar.appendChild(div);
contenedor_avatar.innerHTML = estructura_avatar;

// -----------------------------------------------------------------------------------------------------

let contenedor_cards = document.querySelector("#contenedor_cards");

/*
* en esta funcion llamada 'crearcards' lo que estamos haciendo es usar el metodo map para crear dinamicamente la cantidad que cards mientras el map va iterando por cada item del arreglo de objetos datos.
*/

const crearCards = function () {

  contenedor_cards.innerHTML = '';


  datos.map(function (item) {

    let card = document.createElement("div");
    card.classList = "card mb-3";

    let contenido_card = `
        <div class="card-header">${item.usuario}</div>
              <img
                src=${item.img}
                class="card-img-top"
                alt=${item.detalle}
              />
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                 <div>
                  <span onclick= 'meGusta(${item.id})'>

                  ${corazonRojo(item.userLike)

        ? '<i class="fa fa-heart text-danger icon-like" aria-hidden="true"></i>'
        : '<i class="fa fa-heart-o icon-like" aria-hidden="true"></i>'


      }
                  
                  </span>
                 </div>
                 <div>
                  ${item.detalle}
                 </div>
              </div>
                 <p class="mt-2">${item.like} Me Gusta</p>
            </div>
        `;

    card.innerHTML = contenido_card;
    contenedor_cards.appendChild(card);
  });
};

// -----------------------------------------------------------------------------------------------------

// funcion para poner el corazon en color rojo cuando damos un  like

function corazonRojo(item) {

  let encontrarUsuario = item.find(function (user) {

    return user === usuario.username

  });

  return encontrarUsuario;
};

// ----------------------------------------------------------------------------------------------------

// función cuando hacemos click en el icono del corazón de me gusta

const meGusta = function (id) {

  // traer los datos de la foto

  let foto = datos.find(function (item) {

    return item.id === id

  });

  console.log(foto);

  // obtener el usuario para saber si dio like a la foto

  let validarUsuario = foto.userLike.find(function (user) {

    return user === usuario.username

  });

  // si el usuario no dio like

  if (!validarUsuario) {

    foto.like += 1
    foto.userLike.push(usuario.username)

  };

  // obtener la posicion de la foto en el arreglo de fotos

  let indice = datos.findIndex(function (item) {

    return item.id === id

  });

  datos[indice].like = foto.like
  datos[indice].userLike = foto.userLike

  localStorage.setItem('posteos', JSON.stringify(datos))

  crearCards();

};

crearCards();

// -------------------------------------------------------------------------------------------------

/*
* aqui comentamos la declaración de la funcion inicializarDatos ya que la funcion lo que hace, es enviar el arreglo de objetos datos al localstorage, por ende al declararla una sola vez a la función ya se guardaria todo en el local storage y quedaria persistente. es por eso  que la función al activarla una sola vez ya envia todo al localstorage y la podemos comentar porque ya cumplio su proposito.
*/

// inicializarDatos(datos);
