// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// Desafio 2
function calcArea(base, height) {
  let calcAreaTriângulo = (base * height) / 2;
  console.log(calcAreaTriângulo);
}

calcArea(5,2);

// Desafio 3
function splitSentence(recebString) {
  let resultado = [];
  resultado = recebString.split(" ");
  console.log(resultado);
}
console.log("Go Trybe");

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
