const people = {
  nome: "Walter",
  idade: 30,
  altura: 1.72,
  cnh: true,
  apelido: ["Walt", "Walttinho"]
};
let temCnh = people.cnh ? "possui CNH" : "não possui CNH";
let temApelido =
  people.apelido.length != 0 ? "tem os seguintes apelidos" : "Não tem apelidos";

console.log(
  `${people.nome} tem ${people.idade} anos, ${people.altura}m de altura,${temCnh} e ${temApelido}:`
);

for (apelido of people.apelido) {
  console.log(`- ${apelido}`);
}
