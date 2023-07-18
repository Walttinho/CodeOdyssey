/* Escopo de variável
Quando você declara uma variável fora de qualquer função, ela é chamada de variável global, porque está disponível para qualquer outro código no documento atual. Quando você declara uma variável dentro de uma função, é chamada de variável local, pois ela está disponível somente dentro dessa função. */


function saudacao() {
  let nome = "Walter"; // Variável local

  console.log("Olá, " + nome); // Acesso à variável local dentro da função
}

saudacao(); // Output: "Olá, Walter"

console.log(nome); // Erro: nome is not defined (nome não está definido)


