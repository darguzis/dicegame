var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

var image1 = document
  .querySelector(".imgtadas")
  .setAttribute("src", randomDiceImage1);
var image2 = document
  .querySelector(".imgula")
  .setAttribute("src", randomDiceImage2);

var pavadinimas = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  pavadinimas.textContent = "Laimejo Tadas";
} else if (randomNumber1 < randomNumber2) {
  pavadinimas.textContent = "Laimejo Ula";
} else if (randomNumber1 === randomNumber2) {
  pavadinimas.textContent = "Lygiosios";
}
