// Desafio 1
function compareTrue(param1, param2) {
  if(param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let calcAreaTriângulo = (base * height) / 2;
  console.log(calcAreaTriângulo);
}

// Desafio 3
function splitSentence(recebString) {
  let resultado = recebString.split(" ");
  console.log(resultado);
}

// Desafio 4
function concatName(arrayDeString) {
  let primeiroItem = arrayDeString[0];
  let ultimoItem = arrayDeString[arrayDeString.length - 1];
  let resultado = [];
  resultado.push(ultimoItem, primeiroItem); 
  let juntaTudo = resultado.toString();
  console.log(juntaTudo);
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontosVitorias = wins * 3;
  console.log(pontosVitorias + ties);
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
