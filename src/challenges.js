// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, height) {
  let calcAreaTriângulo = (base * height) / 2;
  return calcAreaTriângulo;
}

// Desafio 3
function splitSentence(recebString) {
  let resultado = recebString.split(' ');
  return resultado;
}

// Desafio 4
function concatName(arrayDeString) {
  let primeiroItem = arrayDeString[0].toString();
  let ultimoItem = arrayDeString[arrayDeString.length - 1].toString();
  return `${ultimoItem}, ${primeiroItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosVitorias = wins * 3;
  return pontosVitorias + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let numeroMaior = Math.max(...arrayDeNumeros);
  let quantidadeDeVezes = 0;
  for (let indexQuant = 0; indexQuant < arrayDeNumeros.length; indexQuant += 1) {
    let numeroComp3 = arrayDeNumeros[indexQuant];
    if (numeroMaior === numeroComp3) {
      quantidadeDeVezes += 1;
    }
  }
  return quantidadeDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumero) {
  let arrayDeFizzBuzz = [];
  arrayDeNumero.forEach((element) => {
    switch (element) {
    case (element % 5 === 0 && element % 3 === 0):
      return [...arrayDeFizzBuzz, 'fizzBuzz'];
    case (element % 3 === 0):
      return [...arrayDeFizzBuzz, 'fizz'];
    case (element % 5 === 0):
      return [...arrayDeNumero, 'buzz'];
    default:
      return [...arrayDeNumero, 'bug!'];
    }
  });
  return arrayDeFizzBuzz;
}

// Desafio 9
const codigo = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(stringReceb) {
  let segundaString = '';
  stringReceb.split('').forEach((element) => {
    if (codigo[element]) {
      segundaString += codigo[element];
    } else {
      segundaString += element;
    }
  });
  return segundaString;
}

const codigoNumero = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decode(stringRecebDecode) {
  let stringDecode = '';
  stringRecebDecode.split('').forEach((e) => {
    if (codigoNumero[e]) {
      stringDecode += codigoNumero[e];
    } else {
      stringDecode += e;
    }
  });
  return stringDecode;
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
