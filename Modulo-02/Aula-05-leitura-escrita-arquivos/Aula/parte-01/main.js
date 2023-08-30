const fs = require("fs");

const path = require("path");
const file = path.resolve(__dirname, "a.txt");

console.log("Início do programa");


/* const a = fs.readFileSync(file).toString()

console.log(a) */

fs.readFile(file, (erro, b) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log(b.toString());
  }
});
console.log("Fim do programa");
