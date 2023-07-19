const caractere = "E";
const vogalMaiuscula = "A E I O U";
const vogalMinuscula = "a e i o u";
const numero = "1 2 3 4 5 6 7 9 0";

if (vogalMaiuscula.includes(caractere)) {
  console.log("Vogal maiúscula");
} else if (vogalMinuscula.includes(caractere)) {
  console.log("Vogal minúscula");
} else if (numero.includes(caractere)) {
  console.log("Número");
} else {
  console.log("Consoante");
}
