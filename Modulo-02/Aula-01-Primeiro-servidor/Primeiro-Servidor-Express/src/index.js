const express = require("express");

const app = express();

app.get('/',(req,res)=>{
  res.send('Olá... esse é o meu primeiro servidor')
})

app.get('/home',(req,res)=>{
  res.send('Agora voce está em /home')
})

app.get('/array', (req,res)=>{
const array = [1,2,3,5,6,8,4,5]
res.send(array)
})


app.listen(3000)