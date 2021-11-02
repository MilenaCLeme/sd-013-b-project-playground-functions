// Desafio 10
function techList(arr, nome) {
  if (arr.length === 0) {
    return 'Vazio!';
  }
  const newArr = [];
  arr.sort().forEach((element) => {
    const obj = {
      tech: element,
      name: nome,
    };
    newArr.push(obj);
  });
  return newArr;
}

// Desafio 11
function verificarNumero(arrDeNumeros) {
  let numero = 0;
  arrDeNumeros.forEach((e) => {
    const verificar = arrDeNumeros.filter((elemento) => elemento === e);
    if (verificar.length > 2) {
      numero += 1;
    }
  });
  if (numero > 0) {
    return false;
  }
  const verificou = arrDeNumeros.filter((e) => e < 0 || e > 9);
  if (verificou.length > 0) {
    return false;
  }

  return true;
}

function fazerTelefone(arrDeNumeros) {
  let stringDeTelefone = '(__) _____-____';
  let espaço = '';

  for (let espaços of stringDeTelefone) {
    if (espaços === '_') {
      espaço += arrDeNumeros.shift();
    } else {
      espaço += espaços;
    }
  }
  return espaço;
}

function generatePhoneNumber(arr) {
  const string = 'não é possível gerar um número de telefone com esses valores';
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (verificarNumero(arr) === false) {
    return string;
  }

  return fazerTelefone(arr);
}

console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]));

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
