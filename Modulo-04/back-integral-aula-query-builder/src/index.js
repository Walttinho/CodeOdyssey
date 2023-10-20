const express = require("express");
const knex = require("./database");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const usuario = {
    nome: "Marta",
    email: "marta@email.com",
    telefone: "(99) 9999-9999",
  };
  const resultado = await knex("usuarios").insert(usuario).returning("*");
  return res.json(resultado);
});

app.put("/:id", async (req, res) => {
  const { nome, email, telefone } = req.body;
  const { id } = req.params;

  const resultado = await knex("agenda")
    .update({ nome, email, telefone })
    .where({ id })
    .returning("*")
    .debug();

  return res.json(resultado);
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const resultado = await knex("agenda")
    .delete()
    .where({ id })
    .returning("*")
    .debug();

  return res.json(resultado);
});

const port = 3000;

app
  .listen(port, () => {
    console.log(`O Servidor está rodando na porta: ${port}`);
  })
  .on("error", (err) => {
    process.once("SIGUSR2", () => {
      process.kill(process.pid, "SIGUSR2");
    });
  });
