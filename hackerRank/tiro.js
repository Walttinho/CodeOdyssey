const disparos = [0 ,50 ,90 ,80 ,100 ,80,40]
let saldoTiros = 0
let tiros = []
for(let i = 0; i<disparos.length; i++){
if(disparos[i]>=70){
  saldoTiros++
  tiros.push(disparos[i])
}}
if(saldoTiros>=3){
  console.log(saldoTiros)
}else{
  console.log("ELIMINADO")
}



//https://www.hackerrank.com/contests/arrays-e-loops/challenges/tiro-ao-alvo/