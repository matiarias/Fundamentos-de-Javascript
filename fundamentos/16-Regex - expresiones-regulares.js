// expresiones regulares - Regex 

// Basicamente se usan para validar textos, en la mayoria de los casos se usa para validar imputs de email y password! 

/*
 *en el caso del email para validarlo, lo que le pedimos con la expresion regular en este caso es que contenga letras minusculas, un arroba seguido de minusculas, un punto (.) seguido de letras entre 2 y 5 caracteres.
*/

const validarEmail = function () {

    let email = document.querySelector('#texto_email')

    if (email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {

        console.log('correo electronico valido');

    } else {

        console.error('No cumple el formato de email');

    }

};

/*
*en el caso para validar el imput del password, lo que le pedimos con la expresion regular en este caso, es que la contraseña debe tener entre 8 y 16 caracteres, al menos 1 digito, al menos una minuscula y una mayuscula. No puede tener otros simbolos.
*/

const validarPassword = function () {

    let pass = document.querySelector('#texto_password')

    if (pass.match(/^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/)) {

        console.log('password correcta');

    } else {

        console.error('password incorrecta');

    }

};