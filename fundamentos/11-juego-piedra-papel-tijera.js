//-------------------------------- Juego de piedra, papel o tijera --------------------------------
  
let opciones = ["PIEDRA", "PAPEL", "TIJERA"];
let jugador = null;
let bot = null;

function numeroRandom() {
  return Math.round(Math.random() * 2);
}

function playGame() {
  //Determinar el valor elegido por el bot
  bot = numeroRandom();

  jugador = parseInt(
    prompt("Ingrese la opción (PIEDRA=0 | PAPEL=1 | TIJERA=2")
  );

  if (isNaN(jugador)) {
    return alert("Debe ingresar una opción válida");
  }

  if (jugador >= 0 && jugador <= 2) {
    switch (true) {
      case jugador === 0 && bot === 2:
        mensajeJuego("Ganaste");
        break;
      case jugador === 1 && bot === 0:
        mensajeJuego("Ganaste");
        break;
      case jugador === 2 && bot === 1:
        mensajeJuego("Ganaste");
        break;
      case jugador === bot:
        mensajeJuego("Empate");
        break;
      default:
        mensajeJuego("Perdiste");
        break;
    }
  } else {
    alert("Debe ingresar un valor entre 0 y 2");
  }

  // console.log(`Jugador: ${opciones[jugador]} | bot: ${opciones[bot]}`);
}

const mensajeJuego = function (mensaje) {
  switch (mensaje) {
    case "Ganaste":
      Swal.fire({
        icon: "success",
        title: "GANASTE 🤩",
        text: `${opciones[jugador]} vence a ${opciones[bot]}`,
      });
      break;
    case "Empate":
      Swal.fire({
        icon: "info",
        title: "EMPATE 😐",
        text: `${opciones[jugador]} es igual a ${opciones[bot]}`,
      });
      break;
    case "Perdiste":
      Swal.fire({
        icon: "error",
        title: "PERDISTE 😞",
        text: `${opciones[bot]} vence a ${opciones[jugador]}`,
      });
      break;
  }
};