//quantas letras "a" existem em uma determinada palavra
const palavra = "abracadabra"
let soma = 0
const letra = "a"

for (let i of palavra) {
  if(i === letra){
    ++soma
  }
  }
  const plural = soma<2?"letra":"letras"
  console.log(`Existem ${soma} ${plural} "${letra}" na palavra ${palavra}`)