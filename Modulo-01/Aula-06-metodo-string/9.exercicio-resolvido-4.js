const nome = "walter pires fernandes netto"

function newNome(nome){
let array = nome.split(" ")
let newArray=[]
for(palavra of array){
newArray += palavra.replace(palavra.charAt(),(palavra.charAt().toUpperCase()))+" "
}

return newArray.trim()
}


console.log(`-${newNome(nome)}-`)