const numeros = [];

let i = 10
while(!i == 0){
  numeros.push(Math.floor(Math.random()*100))
--i
}
console.log(numeros)

let soma=0;
 i = 0;
while ( i < numeros.length) {
  soma += numeros[i];
  i++
}
console.log(soma)