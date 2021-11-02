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

// Desafio 12
// ajuda do caribé
function checkSidesSumDiff(side1, side2, side3) {
  let sum = side1 + side2;
  let diff = Math.abs(side2 + side3);

  return side1 < sum && side1 > diff;
}

function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  // checking A
  if (!checkSidesSumDiff(lineA, lineB, lineC)) return false;

  if (!checkSidesSumDiff(lineB, lineA, lineC)) return false;

  if (!checkSidesSumDiff(lineC, lineA, lineB)) return false;

  return true;
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let contator = 0;
  string.split('').forEach((e) => {
    if (Number(e)) {
      contator += Number(e);
    }
  });
  if (contator === 1) {
    return '1 copo de água';
  }
  return `${contator} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
