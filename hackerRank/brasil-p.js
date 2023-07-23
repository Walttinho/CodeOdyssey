const primeiraLetra = "a";
const segundaLetra = "mb";
const palavras = ["amor", "amigo", "sol", "sofá", "banana", "bala", "gato"];

let arrayPalavras = [];
for (let i = 0; i < palavras.length; i++) {
  if (primeiraLetra == palavras[i][0]) {
    if (segundaLetra == palavras[i][1]) {
      arrayPalavras.push(palavras[i]);
      console.log(palavras[i]);
    }
  }
}
if (arrayPalavras.length == 0) {
  console.log("Nenhuma");
}


//https://www.hackerrank.com/contests/arrays-e-loops/challenges/brasil-com-p