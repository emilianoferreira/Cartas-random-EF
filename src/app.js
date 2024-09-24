/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
//   // console.log(genRandom(card_num));
//   // console.log(genRandom(card_suit));
//   // console.log(genRandom(card_suit), genRandom(card_num));
//   // console.log(genRndNumAndSuit());
// };

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

const genRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const genRndNumAndSuit = () => {
  let num = genRandom(card_num);
  let suit = genRandom(card_suit);
  console.log(num);
  return `${num}${suit}`;
};

document.getElementById("genBtn").addEventListener("click", () => {
  genRndNumAndSuit();
  document.getElementById("card_suit_position").innerHTML = `${num}`;
});
