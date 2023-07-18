//Varáveis let
//Ao contrário das variáveis declaradas com const, as variáveis let podem ter seus valores alterados posteriormente. 

//tipo de valores aceitos em let
let idade = 25; // Número variável
let nome = "Maria"; // String variável
let isAtivo = true; // Booleano variável
let pessoa = { // Objeto literal variável
  nome: "João",
  idade: 30
};
let numeros = [1, 2, 3, 4, 5]; // Array variável

console.log(idade); // Saída: 25
console.log(nome); // Saída: Maria
console.log(isAtivo); // Saída: true
console.log(pessoa); // Saída: { nome: 'João', idade: 30 }
console.log(numeros); // Saída: [ 1, 2, 3, 4, 5 ]

idade = 26; // Atribuição de um novo valor à variável idade
nome = "Pedro"; // Atribuição de um novo valor à variável nome
isAtivo = false; // Atribuição de um novo valor à variável isAtivo
pessoa.nome = "Ana"; // Modificação da propriedade nome do objeto pessoa
numeros.push(6); // Adição de um elemento ao array números

console.log(idade); // Saída: 26
console.log(nome); // Saída: Pedro
console.log(isAtivo); // Saída: false
console.log(pessoa); // Saída: { nome: 'Ana', idade: 30 }
console.log(numeros); // Saída: [ 1, 2, 3, 4, 5, 6 ]
