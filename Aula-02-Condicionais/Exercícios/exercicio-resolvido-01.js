/* se cliente pagar a vista tem 10% de desconto, caso contrario imprimir o valor das parcelas */

const valorDaCompra = 100
const numeroDeParcelas = 1
const pagamento = numeroDeParcelas==1 ? "à vista":`parcelado em ${numeroDeParcelas} vezes de`
const conta = numeroDeParcelas==1 ? valorDaCompra-(valorDaCompra*0.1):valorDaCompra/numeroDeParcelas

console.log(`Você deve pagar ${pagamento} ${conta.toFixed(2)} reais `)
