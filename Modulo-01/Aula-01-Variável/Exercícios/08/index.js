/* comprimento é igual duas vezes pi vezes o raio
area é igual pi vezes o raio elevado ao quadrado*/
let comprimento 
let area
let raio = 1

comprimento= 2*Math.PI*raio
area = Math.PI*Math.pow(raio,2)
console.log(`Sabendo que o raio é R: ${raio.toFixed(2)}, então temos o comprimento C: ${comprimento.toFixed(2)} seguido da área A: ${area.toFixed(2)}`)