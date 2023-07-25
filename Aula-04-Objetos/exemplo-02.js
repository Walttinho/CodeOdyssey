const compra = [
  {
    nome: "Produto A",
    precoUnit: 1099,
    quantidade: 3,
  },
  {
    nome: "Produto B",
    precoUnit: 549,
    quantidade: 7,
  },
  {
    nome: "Produto C",
    precoUnit: 200,
    quantidade: 1,
  }
];

const cliente = 
  {
    nome: "Walter",
    idade: 33,
    compra
  }
 

/* console.log(cliente)
console.log(cliente.nome);
console.log(cliente.idade)
console.log(cliente.compra[0].nome)
console.log(cliente.compra[2].precoUnit) */

//exemplo 3
let soma = 0
for(valor of compra){
  soma += valor.precoUnit*valor.quantidade
}

console.log(`${cliente.nome} você deve pagar R$ ${(soma/100).toFixed(2)}.`)