const pessoa = {
  nome: "Walter",
  altura: 1.73,
  peso: 60,
};

pessoa.altura = 1.5;
pessoa["peso"] = 70;

console.log(pessoa);
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}`);
