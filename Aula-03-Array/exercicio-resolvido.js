/*crie um array com 5 paises - ok
adicione um pais ao fim da lista - ok
imprima a lista - ok
remova o pais do fim da lista - ok
imprima a lista - ok
adicione um pais ao inicio da lista - ok
imprima a lista - ok
imprima o ultimo pais da lista - ok
imprima o segundo pais da lista - ok
imprimao pais de indice 2 da lista - ok
*/


const paises = ["Brasil", "Dinamarca", "França", "USA", "Alemanha"]
console.log(paises)

//paises[paises.length] = "Argentina"
paises.push("Bolivia")

console.log(paises)

paises.pop()

console.log(paises)

paises.unshift("Argentina")

console.log(paises)

paises.shift()

console.log(paises)

console.log(paises[paises.length-1])
console.log(paises[1])
console.log(paises[2])