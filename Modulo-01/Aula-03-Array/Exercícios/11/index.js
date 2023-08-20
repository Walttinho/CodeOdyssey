const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];
const numero = [];
for (i of original) {
  if ((i >= 10 && i <= 20) || i > 100) {
    numero.push(i);
  }
}

console.log(numero);
