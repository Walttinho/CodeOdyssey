const nomes = ["Ana", "Joana", "Carlos", "amanda"]
let letraMinuscula = "a"
let letraMaiuscula = "A" 
let nomeComLetra = []

for(let i =0 ;i < nomes.length; i++){
   if((nomes[i][0]) == letraMaiuscula || (nomes[i][0]) == letraMinuscula){
    nomeComLetra.push(nomes[i])
  }
}
console.log(nomeComLetra)