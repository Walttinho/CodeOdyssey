/*Os operadores "&&" (AND), "||" (OR) e "!" (NOT) são operadores lógicos utilizados para combinar ou negar expressões Booleano*/

//Operador && (AND)

/*O operador "&&" é utilizado para verificar se duas ou mais expressões booleanas são verdadeiras. Ele retorna "true" somente se todas as expressões forem verdadeiras. Caso contrário, retorna "false".

|Expressão 1 |Expressão 2 | Resultado |
|------------|------------|-----------|
| true       | true       | true      |
| true       | false      | false     |
| false      | true       | false     |
| false      | false      | false     |
 */

const capacete = true;
const joelheira = true;
const idade = 20;

if (capacete && joelheira && idade >= 18) {
  console.log("Entrada Permitida na pista");
} else {
  console.log("Não Permitida a entrada");
}

//Operador || (OR):
/* O operador "||" é utilizado para verificar se pelo menos uma das expressões booleanas é verdadeira. Ele retorna "true" se pelo menos uma das expressões for verdadeira. Apenas se todas as expressões forem falsas, o resultado será "false".

|Expressão 1 |Expressão 2 | Resultado |
|------------|------------|-----------|
| true       | true       | true      |
| true       | false      | true      |
| false      | true       | true      |
| false      | false      | false     |
*/

const notebook = true;
const computador = false;
const celular = false;

if (notebook || computador || celular) {
  console.log("Entrada Permitida no curso");
} else {
  console.log("Não Permitida a entrada no curso");
}

//Operador ! (NOT):
/*O operador "!" é utilizado para negar o valor de uma expressão booleana. Ele inverte o valor da expressão, retornando "true" se a expressão for falsa e "false" se a expressão for verdadeira.

| Expressão | Resultado |
|-----------|-----------|
| true      | false     |
| false     | true      |
*/

const temCarterinha = true;

if (!temCarterinha) {
  console.log("Não Pode entrar");
} else {
  console.log("Pode entrar");
}
