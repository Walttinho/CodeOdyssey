const bancodedados = require("../data/db");

const findAll = (req, res) => {
  res.status(200).json(bancodedados.instrutores);
};

const findById = (req, res) => {
  const id = req.params.id;
  const instrutor = bancodedados.instrutores.find(
    (instrutor) => instrutor.id == id
  );
  if (instrutor) {
    res.status(200).json(instrutor);
  } else {
    res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
};

const create = (req, res) => {
  const { nome, email } = req.body;
  const novoInstrutor = {
    id: bancodedados.identificadorInstrutor++,
    nome,
    email,
    status: true,
  };
  bancodedados.instrutores.push(novoInstrutor);
  res.status(201).json(novoInstrutor);
};

const update = (req, res) => {
  const id = req.params.id;
  const instrutor = bancodedados.instrutores.find(
    (instrutor) => instrutor.id == id
  );
  if (instrutor) {
    const { nome, email } = req.body;
    instrutor.nome = nome;
    instrutor.email = email;
    res.status(200).json(instrutor);
  } else {
    res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
};

const updateStatus = (req, res) => {
  const id = req.params.id;
  const instrutor = bancodedados.instrutores.find(
    (instrutor) => instrutor.id == id
  );
  if (instrutor) {
    const { status } = req.body;
    instrutor.status = status;
    res.status(200).json(instrutor);
  } else {
    res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
};

const remove = (req, res) => {
  const id = req.params.id;
  const instrutor = bancodedados.instrutores.find(
    (instrutor) => instrutor.id == id
  );
  if (instrutor) {
    instrutor.status = false;
    res.status(204).end();
  } else {
    res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
};

module.exports = { findAll, findById, create, update, remove, updateStatus };
