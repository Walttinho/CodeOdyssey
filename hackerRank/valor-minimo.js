const precos = [30, 10, 54, 76, 1, 4, 35];

let menorPrejuizo = Infinity;

for (let i = 0; i < precos.length; i++) {
  for (let j = i + 1; j < precos.length; j++) {
    if (precos[i] > precos[j]) {
      const prejuizo = precos[i] - precos[j];

      if (prejuizo < menorPrejuizo) {
        menorPrejuizo = prejuizo;
      }
    }
  }
}
console.log(menorPrejuizo);

//https://www.hackerrank.com/contests/arrays-e-loops/challenges/perda-minima
