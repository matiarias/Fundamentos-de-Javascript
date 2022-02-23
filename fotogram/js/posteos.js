class publicacion {

  constructor(id, usuario, detalle, imagen, like = 0, userLike = []) {

    this.id = id
    this.usuario = usuario
    this.detalle = detalle
    this.img = imagen
    this.like = like
    this.userLike = userLike

  };
};

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

// Modal de bootstrap via javascript

let myModal = new bootstrap.Modal(document.getElementById('nuevaPublic'), {
  keyboard: false
});

let imgRota = true

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

//Funcion me gusta cuando hacemos clic en el corazon

const meGusta = function (id) {

  //obtengo posicion de la foto en el arreglo de datos

  let indice = datos.findIndex(function (item) {
    return item.id === id;
  });

  //chequeo que el usuario logueado no exista en el arreglo de usuarios que dieron me gusta

  let validarUsuario = datos[indice].userLike.find(function (item) {
    return item === usuario.username;
  });

  console.log(validarUsuario);

  //Si el usuario no le dio Like

  console.log(datos[indice].userLike.indexOf(validarUsuario));

  if (!validarUsuario) {
    datos[indice].like += 1;
    datos[indice].userLike.push(usuario.username);
  } else {
    datos[indice].like -= 1;


    //----borrar usuario del arreglo userLike-----

    //buscar el indice del usuaario en el arreglo

    let indiceUser = datos[indice].userLike.findIndex(function (user) {
      return user === usuario.username;
    });
    //borrar el usuario con su indice

    datos[indice].userLike.splice(indiceUser, 1);
  }

  //guardar cambios en localstorage y recargar tarjetas

  localStorage.setItem("posteos", JSON.stringify(datos));

  crearCards(datos);
};

// ----------------------------------------------------------------------------------------------

// funcion para agregar imagen al modal

const agregarImagen = function (e) {

  let campo = document.querySelector('#text_modal').value

  if (e.keyCode === 13) {

    // console.log(e);
    document.querySelector('#img_modal').src = campo

    // if (imgRota) {

    //   alert('La imagen no es valida')
    //   campo.value = ''
    //   document.querySelector('#img_modal').src = '../img/error_imagen.png'
    //   imgRota = false

    // }

  }

};

// -------------------------- funcion para guardar la publicacion en el feed ---------------------------

const guardarPublicacion = function () {

  let id = new Date().getTime()
  let user = usuario.username
  let detalle = document.querySelector('#modal_textarea').value
  let imagen = document.querySelector('#img_modal').src

  if (detalle.length < 10) {

    return alert('la descripción debe tener un minimo de 10 caracteres')

  }

  datos.unshift(new publicacion(id, user, detalle, imagen))
  localStorage.setItem('posteos', JSON.stringify(datos))

  crearCards();
  limpiarModal();
}

//----------------------------------------- Limpiar Modal -----------------------------------------

const limpiarModal = function () {

  document.querySelector("#text_modal").value = "";
  document.querySelector("#img_modal").src = "../img/error_img.png";

  document.querySelector("#modal_textarea").value = "";
  imgRota = false;
  myModal.hide();
};

// -------------- evento para darle click al boton del modal para añadir imagenes -------------------

document.querySelector('#addPublic').addEventListener('click', function () {

  myModal.show()

});

// ------------------------------------------------------------------------------------------------

document.querySelector('#text_modal').addEventListener('keydown', agregarImagen);

// ------------------------------------------------------------------------------------------------

document.querySelector('#img_modal').addEventListener('onerror', function () {

  imgRota = true

});

// ------------------------------------------------------------------------------------------------

crearCards();

// -------------------------------------------------------------------------------------------------

/*
* aqui comentamos la declaración de la funcion inicializarDatos ya que la funcion lo que hace, es enviar el arreglo de objetos datos al localstorage, por ende al declararla una sola vez a la función ya se guardaria todo en el local storage y quedaria persistente. es por eso  que la función al activarla una sola vez ya envia todo al localstorage y la podemos comentar porque ya cumplio su proposito.
*/

// inicializarDatos(datos);


