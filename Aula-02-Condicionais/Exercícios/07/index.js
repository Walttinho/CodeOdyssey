const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos
const isento =  2855970

//seu código aqui
if(portadoraDeDoenca || aposentada && totalDeRendimentos<= isento){ 
console.log("ISENTA")
}else if(totalDeRendimentos<= isento){
  console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE")
}else{
  console.log("PEGA LEAO")
}