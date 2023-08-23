const express = require('express')
const app = express()
const  { findById, findAll} = require('./controlador/carros.controlador')
const validar = require('./intermediario')

app.use(validar)

app.get('/', findAll)

app.get('/:id', findById)

app.listen(3001)