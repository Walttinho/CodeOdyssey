const express = require('express')
const app = express()
const  { findById, findAll} = require('./controlador/carros.controlador')


app.get('/', findAll)

app.get('/:id', findById)

app.listen(3000)