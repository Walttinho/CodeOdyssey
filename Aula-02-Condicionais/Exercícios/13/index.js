//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto = 0

if(tipoDePagamento == "cheque"){
  desconto = 0.03
}else if(tipoDePagamento == "credito"){
  desconto = 0.05
}else{
  desconto = 0.1
}

const valorFinal = (valorDoProduto - (valorDoProduto * desconto))/100


console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)