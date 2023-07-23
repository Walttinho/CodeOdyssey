const sequencia = "<";
let posicao = 0;

for (p of sequencia) {

  if (p == ">") {
    posicao++;
  } else {
    posicao--;
  }

  if (posicao > 6) {
    posicao = 0;
  } else if (posicao < 0) {
    posicao = 6;
  }
}

console.log(posicao);

//https://www.hackerrank.com/contests/arrays-e-loops/challenges/carrossel
