const temIngresso = true
const censura = 16
const idade = 16

//ter ingresso e ter idade maior ou igual a censura

if(temIngresso){
  if(idade>=censura){
    console.log("Entrada Permitida")
  }else{
    console.log("Entrada nao Permitida, Idade abaixo da censura")
  }

}else{
  console.log("Entrada não permitida, Compre o Ingresso")
}