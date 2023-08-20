/* um programa que calcula e imprime na tela  a soma dos itens de um array*/

const numero = [2, 8, 15, 6, 12];

let soma=0;
let i = 0;
while ( i < numero.length) {
  soma += numero[i];
  i++
}
console.log(soma);
