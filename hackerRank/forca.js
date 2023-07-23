const palpite = "a";
const palavra = "abelha";
let acertos = 0
for(let i=0; i<palavra.length; i++){
  if(palpite==palavra[i]){
acertos++
  }
}
console.log(acertos)