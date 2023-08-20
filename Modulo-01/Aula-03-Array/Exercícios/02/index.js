const letras = ["A", "e", "B", "C", "E", "z"];
let x = 0;
let y = 0;
const acharLetra1 = "E";
const acharLetra2 = "e";

for (let letra of letras) {
  if (letra == acharLetra1) {
    ++x;
  } else if (letra == acharLetra2) {
    ++y;
  }
}

const msg =
  x == 0 || y == 0
    ? `Nenhuma letra "${acharLetra1}" ou "${acharLetra2}" foi encontrada.`
    : `Foram encontradas ${x + y} letras "${acharLetra1}" ou "${acharLetra2}".`;

console.log(msg);
