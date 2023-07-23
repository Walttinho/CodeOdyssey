const numeros = [3, 4, 1, 8, 11, 7, 5];

let numeroMaior = 0

for(let i = 0; i<numeros.length; i++){
 if(numeroMaior< numeros[i]){
  numeroMaior = numeros[i]
 }
}

console.log(numeroMaior)