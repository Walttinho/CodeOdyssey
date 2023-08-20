/*pessoasInfectadas e igual casosConfirmados vezes pessoas  elevado a tempo sobre 7 */
let pessoasInfectadas
let casosConfirmados = 1000
let pessoas = 4
let tempo = 100

pessoasInfectadas = casosConfirmados*Math.pow(pessoas,(tempo/7))

console.log (`O número de pessoas infectadas ao decorre de ${tempo} dias é de ${pessoasInfectadas.toLocaleString()} pessoas.`)