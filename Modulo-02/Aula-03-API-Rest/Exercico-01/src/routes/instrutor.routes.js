const express = require("express");
const instrutores = require("../controller/instrutor.controller");

const rotas = express();

rotas.get("/instrutores", instrutores.findAll);
rotas.get("/instrutores/:id", instrutores.findById);
rotas.post("/instrutores", instrutores.create);
rotas.put("/instrutores/:id", instrutores.update);
rotas.patch("/instrutores/:id", instrutores.updateStatus);
rotas.delete("/instrutores/:id", instrutores.remove);
rotas.post("/instrutores/:id/aulas", instrutores.createAula);
rotas.get("/instrutores/aulas", instrutores.findAllAulas);
rotas.get("/aulas/;id", instrutores.aulaById);
rotas.get("/instrutores/:id/aulas", instrutores.listAllAulas);

module.exports = rotas;
