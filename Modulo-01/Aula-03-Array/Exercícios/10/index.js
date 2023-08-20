const numero = [];

 while (numero.length <= 5){
  numero.push(Math.floor(Math.random()*100))
} 

let maior = numero[0];
let menor = numero[0];
for (let i of numero) {
  if (i < menor) {
    menor = i;
  } else if (i > maior) {
    maior = i;
  }
}
console.log(maior)
console.log(menor)
console.log(maior - menor); 

