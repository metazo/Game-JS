//Elememnts du DOM

const divVies = document.querySelector('.vies');
const message = document.getElementById('message');
const formulaire = document.getElementById('inputBox');
const input = document.getElementById('number');
const essayerBtn = document.getElementById('essayerBtn');
const rejouerBtn = document.getElementById("rejouerBtn");
const body = document.getElementsByTagName('body')[0];

//Modele des coeurs

const coeurVide = '<ion-icon name="heart-outline"></ion-icon>';
const coeurPlein = '<ion-icon name="heart"></ion-icon>';

//Fonds

const bgFroid = "linear-gradient(120deg, #07712e 0%, #a4e47b 100%)";
const bgTiede = "linear-gradient(120deg, #ffd365 0%, #fda085 100%)";
const bgChaud = "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";
const bgBrulant = "linear-gradient(to top, #ff0844 0%, #ffb199 100%)";

const bgWin =
  "linear-gradient(-225deg, #231557 0%, #44107A 29%, #ff1361 67%, #fff800 100%)";
const bgLoose = "linear-gradient(60deg, #29323c 0%, #485563 100%)"; 