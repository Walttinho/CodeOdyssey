
/*O operador ternário é uma forma concisa de escrever uma estrutura condicional com três partes: uma expressão condicional, um resultado para o caso verdadeiro e um resultado para o caso falso. 

condição ? valorSeVerdadeiro : valorSeFalso;

*/


const saldo = 1;
const unidade = saldo === 1 ? "real": "reais"

console.log(`Você tem ${saldo} ${unidade}`)


/* if (saldo <= 1) {
  console.log(`Você tem ${saldo} real`);
} else {
  console.log(`Você tem ${saldo} reais`);
} */
