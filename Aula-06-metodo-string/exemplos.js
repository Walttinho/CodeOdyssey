// Exemplo de método de string

// String de exemplo
const frase = "Olá, como vai você?";

// 1. toUpperCase() - Converte toda a string para letras maiúsculas
const fraseMaiuscula = frase.toUpperCase();
console.log("Frase em maiúsculas:", fraseMaiuscula);

// 2. toLowerCase() - Converte toda a string para letras minúsculas
const fraseMinuscula = frase.toLowerCase();
console.log("Frase em minúsculas:", fraseMinuscula);

// 3. length - Retorna o número de caracteres na string
const tamanhoFrase = frase.length;
console.log("Tamanho da frase:", tamanhoFrase);

// 4. indexOf() - Retorna o índice da primeira ocorrência de um caractere ou substring
const indice = frase.indexOf("vai");
console.log("Índice da primeira ocorrência de 'vai':", indice);

// 5. lastIndexOf() - Retorna o índice da última ocorrência de um caractere ou substring
const ultimoIndice = frase.lastIndexOf("v");
console.log("Último índice da letra 'v':", ultimoIndice);

// 6. slice() - Retorna uma parte da string com base nos índices fornecidos
const parteDaFrase = frase.slice(5, 10);
console.log("Parte da frase:", parteDaFrase);

// 7. replace() - Substitui uma substring por outra
const novaFrase = frase.replace("como vai", "tudo bem");
console.log("Nova frase:", novaFrase);

// 8. split() - Divide a string em um array de substrings com base em um separador
const palavras = frase.split(" ");
console.log("Palavras separadas:", palavras);

// 9. trim() - Remove espaços em branco do início e do fim da string
const fraseComEspacos = "   Olá, eu tenho espaços em excesso!   ";
const fraseSemEspacos = fraseComEspacos.trim();
console.log("Frase sem espaços em branco:", fraseSemEspacos);

// Exemplo de outros métodos de string

const texto = "   Olá, eu sou uma string de exemplo!   ";

// 1. charAt() - Retorna o caractere na posição especificada
const primeiroCaractere = texto.charAt(0);
console.log("Primeiro caractere:", primeiroCaractere);

// 2. substring() - Retorna uma parte da string com base em índices de início e fim
const parteSubstring = texto.substring(8, 17);
console.log("Substring:", parteSubstring);

// 3. startsWith() - Verifica se a string começa com o texto fornecido
const comecaComOla = texto.startsWith("Olá");
console.log("Começa com 'Olá'?", comecaComOla);

// 4. endsWith() - Verifica se a string termina com o texto fornecido
const terminaComExemplo = texto.endsWith("exemplo!");
console.log("Termina com 'exemplo!'?", terminaComExemplo);

// 5. includes() - Verifica se a string contém o texto fornecido
const contemSou = texto.includes("sou");
console.log("Contém 'sou'?", contemSou);

// 6. repeat() - Repete a string um determinado número de vezes
const repeticao = "abc".repeat(3);
console.log("Repetição:", repeticao);

// 7. concat() - Concatena duas ou mais strings
const string1 = "Olá, ";
const string2 = "mundo!";
const concatenacao = string1.concat(string2);
console.log("Concatenação:", concatenacao);

// 8. match() - Encontra correspondências usando uma expressão regular
const regex = /\d+/g; // Expressão regular para encontrar números
const numerosEncontrados = texto.match(regex);
console.log("Números encontrados:", numerosEncontrados);

// 9. padStart() - Preenche a string com um determinado caractere até um tamanho específico no início
const numero = "42";
const numeroComZeros = numero.padStart(6, "0");
console.log("Número com zeros à esquerda:", numeroComZeros);

// 10. padEnd() - Preenche a string com um determinado caractere até um tamanho específico no final
const textoComPreenchimento = texto.padEnd(50, ".");
console.log("Texto com preenchimento:", textoComPreenchimento);
