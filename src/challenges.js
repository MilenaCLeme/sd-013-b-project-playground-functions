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
  let numeroMaior = -1000;
  let quantidadeDeVezes = 0;
  for(let index = 0; index < arrayDeNumeros.length;index += 1){
    let numeroComp = arrayDeNumeros[index];
    for(let indexCom = 0; indexCom < arrayDeNumeros.length; indexCom += 1){
      let numeroComp2 = arrayDeNumeros[indexCom]
      if(numeroComp >= numeroComp2){
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
  return quantidadeDeVezes;
}

highestCount([0,0,0]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if(mouse > 0){
    let resultadoCat1 = cat1 - mouse;
    let resultadoCat2 = cat2 - mouse;
    let distanciaDoCat1 = Math.abs(resultadoCat1);
    let distanciaDoCat2 = Math.abs(resultadoCat2);
    if(distanciaDoCat1 === distanciaDoCat2) {
      return "os gatos trombam e o rato foge";
    } else if(distanciaDoCat2 < distanciaDoCat1) {
      return "cat2";
    } else if(distanciaDoCat1 < distanciaDoCat2) {
      return "cat1";
    } else {

    }
  } else {
    if(cat1 < cat2){
      return "cat1";
    } else if (cat2 < cat1){
      return "cat2";
    } else if (cat1 === cat2){
      return "os gatos trombam e o rato foge";
    }
  }
}

// Desafio 8
function fizzBuzz(arrayDeNumero) {
  let arrayDeFizzBuzz =[];
  for(let index = 0; index < arrayDeNumero.length; index += 1){
    let numeroSeparados = arrayDeNumero[index];
    if(numeroSeparados % 2 === 0 || numeroSeparados % 7 === 0 || numeroSeparados % 4 === 0){
      arrayDeFizzBuzz.push("bug!");
    } else if(numeroSeparados % 5 === 0 && numeroSeparados % 3 === 0){
      arrayDeFizzBuzz.push("fizzBuzz");
    } else if(numeroSeparados % 3 === 0){
      arrayDeFizzBuzz.push("fizz");
    } else if(numeroSeparados % 5 === 0) {
      arrayDeFizzBuzz.push("buzz");
    } else {

    }
  }
  return arrayDeFizzBuzz;
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
