const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];
const tamanho = arrayA.length>arrayB.length ? arrayA.length:arrayB.length

for(let i = 0;(i<tamanho);i++){
if(arrayA[i]<arrayB[i]){
console.log(arrayA[i])
}else{
  console.log(arrayB[i])
}}