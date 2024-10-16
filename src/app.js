import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["♦", "♥", "♠", "♣"];
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "J", "K", "Q"];

let tiempoRestante = 10;
const temporizadorElement = document.getElementById("temporizador");
let intervalId; // Para almacenar el ID del setInterval

function generadorDeCarta() {
  const paloAleatorio = Math.floor(Math.random() * palos.length);
  const randomNumber = Math.floor(Math.random() * number.length);

  document.getElementById("paloCentral").innerText = palos[paloAleatorio];
  document.getElementById(
    "numeroArriba"
  ).innerHTML = `<p>${number[randomNumber]}</p><p>${palos[paloAleatorio]}</p>`;
  document.getElementById(
    "numeroAbajo"
  ).innerHTML = `<p>${number[randomNumber]}</p><p>${palos[paloAleatorio]}</p>`;

  if (palos[paloAleatorio] === "♥" || palos[paloAleatorio] === "♦") {
    document.getElementById("paloCentral").style.color = "red";
    document.getElementById("numeroArriba").style.color = "red";
    document.getElementById("numeroAbajo").style.color = "red";
  } else {
    document.getElementById("paloCentral").style.color = "black";
    document.getElementById("numeroArriba").style.color = "black";
    document.getElementById("numeroAbajo").style.color = "black";
  }
}

const actualizarCarta = () => {
  if (tiempoRestante > 0) {
    temporizadorElement.innerText = `Tiempo restante: ${tiempoRestante} segundos`;
    tiempoRestante--;
  } else {
    generadorDeCarta();
    tiempoRestante = 10;
  }
};

document.getElementById("generarCarta").onclick = () => {
  generadorDeCarta();
  tiempoRestante = 10;
  temporizadorElement.innerText = `Tiempo restante: ${tiempoRestante} segundos`;

  if (intervalId) {
    clearInterval(intervalId); // Limpiar el intervalo existente
  }
  intervalId = setInterval(actualizarCarta, 1000); // Iniciar un nuevo intervalo
};

document.getElementById("modificarTamaño").onclick = () => {
  const ancho = document.getElementById("anchoCarta").value;
  const alto = document.getElementById("altoCarta").value;
  const cartaElement = document.querySelector(".card");

  cartaElement.style.width = `${ancho}px`;
  cartaElement.style.height = `${alto}px`;
};

intervalId = setInterval(actualizarCarta, 1000);
generadorDeCarta();
