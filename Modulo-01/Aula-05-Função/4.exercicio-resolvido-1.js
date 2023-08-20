const pessoaObj = {
    nome: "Walter",
    idade: 34,
    profissao: "Dev",
    altura: 1.72
}


function apresentar(pessoa){
   
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
}

apresentar(pessoaObj)

// 