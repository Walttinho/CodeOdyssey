const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

 for(let a = 0; a<original.length;a++){
  if((original[a] % 2) == 0 ){
    pares.push(original[a])
  }else{
    impares.push(original[a])
  }
}
console.log(pares)
console.log(impares) 

/*  for(n of original){
  if((n % 2) == 0 ){
    pares.push(original[n-1])
  }else{
    impares.push(original[n-1])
  }
}
console.log(pares)
console.log(impares)  */

/* let i = original[0];
while (i <= original.length) {
  if (i % 2 == 0) {
    pares.push(original[i - 1]);
  } else {
    impares.push(original[i - 1]);
  }
  i++
}
console.log(pares);
console.log(impares); */
