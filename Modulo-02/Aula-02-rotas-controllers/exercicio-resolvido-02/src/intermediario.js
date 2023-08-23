const validar = (req,res,next)=>{
  const {senha } = req.query
  if(!senha){
    return res.send('A senha não foi informada')
  }
if(senha !== "carro123"){
  return res.send('A senha está incorreta')
}

next()
}

module.exports = validar