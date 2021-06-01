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
  for (let index = 0; index < arrayDeNumero.length; index += 1) {
    if (arrayDeNumero[index] % 5 === 0 && arrayDeNumero[index] % 3 === 0) {
      arrayDeFizzBuzz.push('fizzBuzz');
    } else if (arrayDeNumero[index] % 3 === 0) {
      arrayDeFizzBuzz.push('fizz');
    } else if (arrayDeNumero[index] % 5 === 0) {
      arrayDeFizzBuzz.push('buzz');
    } else {
      arrayDeFizzBuzz.push('bug!');
    }
  }
  return arrayDeFizzBuzz;
}

// Desafio 9
function encode(stringReceb) {
  let segundaString = '';
  for (let index = 0; index < stringReceb.length; index += 1) {
    let posicao = stringReceb[index];
    if (posicao === 'a') {
      segundaString += '1';
    } else if (posicao === 'e') {
      segundaString += '2';
    } else if (posicao === 'i') {
      segundaString += '3';
    } else if (posicao === 'o') {
      segundaString += '4';
    } else if (posicao === 'u') {
      segundaString += '5';
    } else {
      segundaString += stringReceb[index];
    }
  }
  return segundaString;
}

function decode(stringRecebDecode) {
  let stringDecode = '';
  for (let index = 0; index < stringRecebDecode.length; index += 1) {
    let posicaos = stringRecebDecode[index];
    if (posicaos === '1') {
      stringDecode += 'a';
    } else if (posicaos === '2') {
      stringDecode += 'e';
    } else if (posicaos === '3') {
      stringDecode += 'i';
    } else if (posicaos === '4') {
      stringDecode += 'o';
    } else if (posicaos === '5') {
      stringDecode += 'u';
    } else {
      stringDecode += stringRecebDecode[index];
    }
  }
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
