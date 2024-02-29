import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function randomSuits() {
  let suits = ["♦", "♥", "♠", "♣"];
  let ram = randomInteger(0, 3);
  return suits[ram];
}
function randomNum() {
  let randomNum = [
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
  let num = randomInteger(0, 12);
  return randomNum[num];
}

window.onload = function() {
  //write your code here
  let suit = randomSuits();
  let num = randomNum();
  let number = document.getElementById("number");
  number.innerHTML = num;
  let upSuit = document.getElementById("upSuit");
  let downSuit = document.getElementById("downSuit");
  upSuit.innerHTML = suit;
  downSuit.innerHTML = suit;
  document.getElementById("downSuit").innerHTML = suit;
  if (suit === "♥" || suit === "♦") {
    upSuit.style.color = "red";
    downSuit.style.color = "red";
  }
};
