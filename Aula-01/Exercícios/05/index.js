/* distância e igual raiz de x2 menos x1 ao quadrado mais y2 menos y1 elevado ao quadrado.*/
let distancia
let x1 = 2
let y1 = 1
let x2 = 6
let y2 = 4

distancia = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2))

console.log(`A distancia entre o ponto (${x1}, ${y1}) e ponto (${x2}, ${y2}) e de ${distancia}`)
