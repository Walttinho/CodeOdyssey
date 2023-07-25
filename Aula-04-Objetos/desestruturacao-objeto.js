const pessoa={
  nome: "Walter",
  idade: 34,
  cidade: "São Paulo",
  profissão: "Dev"
}
 // (...)spread
 //ele pega o resto do objeto em outro objeto

const {nome, idade,...outros}= pessoa

console.log(nome, idade,outros)

const endereco = {
  rua: "Antonio de Barros",
  numero: 1000,
  bairro: "Tatuape"
}

const novoObjeto={
  ...pessoa,
  ...endereco,
  novaPropiedade: 500}

  console.log(novoObjeto)