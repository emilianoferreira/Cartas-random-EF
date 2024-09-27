/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// TO DO
/*

+1 Add a button that generates a new card when clicked.
+1 Add a timer that generates a new card every 10 seconds.
+1 Allow the user to specify the card width and height using text inputs.

*/

const card_num = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

const card_suit = ["♦", "♥", "♠", "♣"];

let number;
let suit;

const genRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const genRndNumAndSuit = () => {
  number = genRandom(card_num);
  suit = genRandom(card_suit).toString();
};

const genCard = () => {
  genRndNumAndSuit();
  let cardNums = document.getElementsByClassName("card_num");
  for (let num of cardNums) {
    num.innerHTML = number;
  }

  let cardSuits = document.getElementsByClassName("card_suit");
  for (let card of cardSuits) {
    if (suit == "♦" || suit == "♥") {
      card.style.color = "red";
      card.innerHTML = suit;
    } else {
      card.style.color = "black";
      card.innerHTML = suit;
    }
  }
};

document.getElementById("genBtn").addEventListener("click", () => {
  genCard();
});

//ELIMINAR VALORES DE NUMBER Y SUIT
document.getElementById("deleteBtn").addEventListener("click", () => {
  // Eliminar valores de number y suit
  document.getElementById("deleteBtn").addEventListener("click", () => {
    // Limpiar los valores
    number = "";
    suit = "";

    // Limpiar el contenido de la carta en el DOM
    let cardNums = document.getElementsByClassName("card_num");
    for (let num of cardNums) {
      num.innerHTML = "?"; // Dejar vacío
    }

    let cardSuits = document.getElementsByClassName("card_suit");
    for (let card of cardSuits) {
      card.style.color = ""; // Restablecer el color
      card.innerHTML = "?"; // Dejar vacío
    }
  });
});
