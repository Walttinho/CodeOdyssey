/* existem três operadores condicionais principais: "if", "else if" e "else". Eles são usados para executar diferentes blocos de código com base em condições específicas. */

//IF

/* o operador "if" permite que você execute um bloco de código se uma condição for verdadeira.*/

const idade = 9;

if (idade >= 18) {
  // é executado caso a condição retorna true
  console.log("É maior de idade");
}

console.log("Fim do Código");

// ELSE IF

/*O "else if" é usado para verificar condições adicionais se a primeira condição for falsa.*/

const anos = 20

if(anos <18){
  console.log("Menor de Idade")
}else if(anos <= 60) {
  console.log("Adulta")
}else{
  console.log("Idosa")
}

//ELSE

/*O "else" é usado para executar um bloco de código se todas as condições anteriores forem falsas.*/

const age = 9;

if (age >= 18) {
  // é executado caso a condição retorna true
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}

console.log("Fim do Código");
