//valor do produto comprado. 
const valorDoProduto = 100000; 
  
//quantidade de parcelas 
const quantidadeDoParcelamento = 10; 
 
//valor pago 
const valorPago = 300;

let a = (valorDoProduto/100) / quantidadeDoParcelamento //100

let b = (valorDoProduto/100) - valorPago //700

let c = b/a //7 

console.log(a, b ,c)

console.log (`Restam ${c} parcelas de R$${a}`)