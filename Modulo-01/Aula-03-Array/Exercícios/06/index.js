const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let saldo = 0
for (i of numeros){
if(i % 2 == 0){
  saldo+=i
}
i++
}
console.log(saldo)