const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];
let errou = 0
for(let i = 0; i< palavras.length;i++){
  if(palavras[i][0] != letra){
errou++
  }
}
console.log(errou)

//https://www.hackerrank.com/contests/arrays-e-loops/challenges/abc-100