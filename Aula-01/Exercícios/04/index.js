// montante igual capital vezes 1 mais juros elevado ao tempo
let montante
let capital = 2345
let juros = 0.136
let meses = 9

montante = capital * ((1+juros)**meses)

console.log(`Invenstindo R$${capital} a taxa de ${juros}% pelo periodo se ${meses} meses, teremos um total de R$${montante}`)