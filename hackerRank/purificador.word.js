const stringCorrompida = "*Canis %lupus )familiaris"
let palavraLimpa = ""

for (palavra of stringCorrompida){

  if(palavra != "%" &&

     palavra != ")" &&

     palavra != "*" &&

     palavra != "$" &&

     palavra != "&" &&

     palavra != "#" &&

     palavra != "(" &&

     palavra != "!" &&

     palavra != "@"){

    palavraLimpa += palavra

  }

}

console.log (palavraLimpa)


//https://www.hackerrank.com/contests/arrays-e-loops/challenges/purificacao