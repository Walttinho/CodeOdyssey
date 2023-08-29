const fs = require('fs');

console.log('Início do programa');

const a = fs.readFileSync('a.txt').toString()

console.log(a)

 fs.readFile('a.txt', (erro, b) => {
  if(erro){
    console.log(erro)
  }else{
    console.log(b.toString())
  }
}) 
console.log('Fim do programa')