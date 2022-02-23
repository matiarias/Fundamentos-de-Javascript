class Usuario {
  constructor(nombre, username, email, password, imagen) {
    this.nombre = nombre;
    this.username = username;
    this.email = email;
    this.password = password;
    this.imagen = imagen;
  }
}

let usuarios = [];

let user1 = new Usuario(
  "Carlos",
  "carlosarias",
  "carlosarias2424@gmail.com",
  "boca10",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUOYJFCyscTiw8XnKBScJgYtOLAVmXTlDFg&usqp=CAU"
);

let user2 = new Usuario(
  "Matias",
  "matiarias",
  "matt.arias182@gmail.com",
  "carlosarias24",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-1OElMfXxTgs4_U8nxxsYMMdwxgyitr7nbw&usqp=CAU"
);

const agregarUsuario = function (user) {
  usuarios.push(user);
};

agregarUsuario(user1);
agregarUsuario(user2);

const validarDatos = function () {
  let inputEmail = document.querySelector("#input_email").value;
  let inputPassword = document.querySelector("#input_password").value;

  let validar_email = usuarios.find(function (usuario) {
    return usuario.email === inputEmail;
  });

  //   console.log(validar_email);
  if (validar_email) {
    if (validar_email.password === inputPassword) {
      console.log("Usuario encontrado");

      let datos = {
        email: validar_email.email,
        username: validar_email.username,
        avatar: validar_email.imagen,
      };

      localStorage.setItem("usuario", JSON.stringify(datos));

      location.replace("./pages/home.html");
    } else {
      alert("Email o contraseña incorrecto");
    }
  } else {
    alert("Email o contraseña incorrecto");
  }
};

// ----------------------------------- formulario de validación -----------------------------------------

let forms = document.querySelectorAll('.needs-validation')
console.log(forms);

Array.prototype.slice.call(forms).forEach(function (form) {

  form.addEventListener('submit', function (event) {


  })
})


document.querySelector("#formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  validarDatos();
});



