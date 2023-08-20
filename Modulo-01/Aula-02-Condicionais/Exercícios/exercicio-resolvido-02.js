//M=C*(1-i)^n

const valorDaCompra = 100;
const numeroDeParcelas = 13;
const pagamento =
  numeroDeParcelas == 1
    ? "à vista"
    : `parcelado em ${numeroDeParcelas} vezes de`;
const juros = numeroDeParcelas >= 7 && numeroDeParcelas <= 12 ? 0.01 : 0;

let conta = 0;
if (numeroDeParcelas >= 13) {
  console.log("Este valor de parcela é invalido");
} else {
  if (numeroDeParcelas === 1) {
    conta = valorDaCompra - valorDaCompra * 0.1;
  } else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    conta = valorDaCompra / numeroDeParcelas;
  } else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    conta = valorDaCompra * (1 + juros) ** numeroDeParcelas;
  }
  console.log(`Você deve pagar ${pagamento} ${conta.toFixed(2)} reais `);
}
