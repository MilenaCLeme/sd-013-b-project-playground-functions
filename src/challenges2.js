// Desafio 10
function techList(arr, name) {
  if (arr.length === 0) {
    return 'Vazio!'
  }
  const newArr = [];
  arr.sort().forEach(element => {
    const obj = {
      tech: element,
      name: name,
    };
    newArr.push(obj);
  });
  return newArr;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
