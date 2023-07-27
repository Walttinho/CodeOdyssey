const pessoaObj = {
    nome:"Walter",
    idade:34 ,
    altura:1.72,
    profissao:"Dev"
}

function apresentar(pessoa){
    return `Olá! Meu nome é ${pessoa.nome}, sou um ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`
}
function faixaEtaria(idade){
    if(idade<= 21){
        return "Jovem"
    }else if(idade<66){
        return "Adulto"
    }else{
        return "Idoso"
    }
}

console.log(apresentar(pessoaObj))