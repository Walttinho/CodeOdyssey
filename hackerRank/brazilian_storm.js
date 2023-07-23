const notas = [100 ,100, 100,20 ,50,30 ,14 ,100 ,100, 100];

let notaMenor = notas[0];
let notaMaior = notas[0];
let countNotas = notas.length -2;
let somaNotas = 0;
for (item of notas) {
  if (item > notaMaior) {
    notaMaior = item;
  } else if (item < notaMenor) {
    notaMenor = item;
  } 
    somaNotas += item;
}
somaNotas=somaNotas-notaMaior-notaMenor
const notaFinal = somaNotas / countNotas;

console.log(notaFinal);


//https://www.hackerrank.com/contests/arrays-e-loops/challenges/brazilian-storm/