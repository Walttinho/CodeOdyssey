const preco = [100, 500, 100, 200, 50];

let menor = preco[0];
let soma = 0;
let total = 0;
for (m of preco) {
  if (m < menor) {
    menor = m;
  }
}

for (let i = 0; i < preco.length; i++) {
  soma += preco[i];
}

if (preco.length >= 5) {
  total = soma - menor;
} else {
  total = soma;
}
console.log(total);

//https://www.hackerrank.com/contests/arrays-e-loops/challenges/cinco-ou-mais-um-e-gratis