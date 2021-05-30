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
  return calcAreaTriângulo;
}

// Desafio 3
function splitSentence(recebString) {
  let resultado = recebString.split(" ");
  return resultado;
}

// Desafio 4
function concatName(arrayDeString) {
  let primeiroItem = arrayDeString[0].toString();
  let ultimoItem = arrayDeString[arrayDeString.length - 1].toString(); 
  return ultimoItem + ", " + primeiroItem;
}

// Desafio 5
function footballPoints(wins,ties) {
  let pontosVitorias = wins * 3;
  return pontosVitorias + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let numeroMaior = 0;
  let quantidadeDeVezes = 0;
  for(let index = 0; index < arrayDeNumeros.length;index += 1){
    let numeroComp = arrayDeNumeros[index];
    for(let indexCom = 0; indexCom < arrayDeNumeros.length; indexCom += 1){
      let numeroComp2 = arrayDeNumeros[indexCom]
      if(numeroComp > numeroComp2){
        if(numeroMaior < numeroComp){
          numeroMaior = numeroComp;
        } else {

        }
      } else {
        
      }
    }
  }
  for(let indexQuant = 0; indexQuant < arrayDeNumeros.length; indexQuant += 1){
    let numeroComp3 = arrayDeNumeros[indexQuant];
    if(numeroMaior === numeroComp3){
      quantidadeDeVezes += 1
    } else {

    }
  }
  console.log(quantidadeDeVezes);
}

highestCount([0,0,0]); // Por que dois não vai ?

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
