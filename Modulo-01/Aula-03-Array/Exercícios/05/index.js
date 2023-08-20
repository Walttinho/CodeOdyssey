let original = [];

while (original.length <= 10){
  original.push(Math.floor(Math.random()*100))
}
console.log(original)
const pares = []

for (num of original){
  if(num % 2 == 0){
    pares.push(num)
  }
}
console.log(pares)
