//Tipo Number

/* As variáveis do tipo number armazenam valores numéricos, sejam eles inteiros ou números decimais
números não têm limitações de tamanho e podem ser tanto positivos quanto negativos. Além disso, as operações matemáticas básicas, como adição, subtração, multiplicação e divisão, podem ser realizadas com variáveis do tipo number. devemos usar o . para separação decimal*/

let idade = 30; // Número inteiro

let altura = 1.75; // Número decimal

let distancia = -10.25; // Número decimal negativo

let populacao = 7.9e9; // Notação exponencial (7.9 bilhões)

let pi = 3.14159; // Número decimal representando o valor de pi

let numeroGrande = 12345678901234567890; // Número grande (JavaScript não tem limite de tamanho para números)
let numeroMilhares = 1_000_000_000; // colocar _ faz separação de milhares no número o que trona mais legível na escrita do código e não aparece no resultado

console.log(idade); //30
console.log(altura); //1.75
console.log(populacao); //7900000000
console.log(pi); //3.14159
console.log(numeroGrande); //12345678901234567000
console.log(numeroMilhares); //1000000000

//String template
//em string template deve-se usar crase para poder inserir variáveis dentro do texto com ${}

console.log(`Minha idade é ${idade} anos, e minha altura é ${altura} metros.`);

//Tipo String

/* As variáveis do tipo string são usadas para armazenar sequências de caracteres, como palavras, frases ou até mesmo texto mais longo. As strings são delimitadas por aspas simples (') ou aspas duplas ("). */

let nome = "João"; // Uma string delimitada por aspas simples

let mensagem = "Olá, mundo!"; // Uma string delimitada por aspas duplas

const frase = "JavaScript é uma linguagem de programação poderosa."; // Uma string constante delimitada por aspas simples

//Tipo Boleano

/* as variáveis do tipo booleano só podem ter dois valores possíveis: true (verdadeiro) ou false (falso). Esses valores são usados para representar estados lógicos ou condições verdadeiras ou falsas. */

let isAdmin = true; // Variável que indica se o usuário é um administrador (verdadeiro)
let isLoggedIn = false; // Variável que indica se o usuário está logado (falso)
const hasPermission = true; // Variável constante que indica se o usuário tem permissão (verdadeiro)

//Tipo Objeto

/* Variáveis do tipo objeto podem armazenar valores complexos, como estruturas de dados mais elaboradas. É possível criar um objeto diretamente na variável usando a sintaxe de objeto literal. Um objeto literal é definido entre chaves {} e pode conter pares de chave-valor */

let pessoa = {
  nome: "João",
  idade: 25,
  cidade: "São Paulo",
};

console.log(pessoa); //{ nome: 'João', idade: 25, cidade: 'São Paulo' }

//Tipo Array

/* uma variável do tipo array pode armazenar uma coleção de valores, sejam eles números, strings, objetos ou até mesmo outros arrays. Isso proporciona flexibilidade na criação e manipulação de estruturas de dados. */

// Declaração de uma variável 'numeros' que armazena um array de números
let numeros = [1, 2, 3, 4, 5];

// Declaração de uma variável 'nomes' que armazena um array de strings
const nomes = ["João", "Maria", "José"];

// Declaração de uma variável 'pessoas' que armazena um array de objetos
let pessoas = [
  { nome: "João", idade: 30 },
  { nome: "Maria", idade: 25 },
  { nome: "José", idade: 35 },
];

// Declaração de uma variável 'matriz' que armazena um array de arrays (matriz)
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Um array pode conter números, strings e objetos simultaneamente
let misturado = [1, "dois", { nome: "Maria", idade: 25 }];


//null and undefined

/* O valor null é um tipo especial que representa a ausência intencional de qualquer objeto ou valor. Quando uma variável é atribuída com o valor null, isso significa que ela não possui nenhum valor válido.É importante observar que o valor null é diferente de undefined. Enquanto o null é usado para indicar a ausência intencional de valor, undefined é usado quando uma variável foi declarada, mas não foi atribuído nenhum valor a ela. */

let planeta; // A variável 'planeta' é declarada, mas nenhum valor é atribuído, portanto seu valor é undefined
console.log(planeta); // Saída: undefined
