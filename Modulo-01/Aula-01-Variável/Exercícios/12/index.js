/* juros é igual montante sobre capital elevado a 1 sobre meses -1 */
let juros;
let montante = 90000
let capital = 60000;
let meses = 24;

juros = ((montante/capital)**(1/meses)-1)*100

console.log(
  `O seu financiamento de R$${capital.toLocaleString()} reais teve uma taxa de juros de ${juros.toFixed(3)}% , pois após ${meses} meses você teve que pagar R$ ${montante.toLocaleString()} reais`,
);
