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

const createAula = (req, res) => {
  const id = req.params.id;
  const instrutor = bancodedados.instrutores.find(
    (instrutor) => instrutor.id == id
  );
  if (!titulo || !descricao) {
    res.status(400).json({ mensagem: "Titulo e descrição são obrigatórios" });
    return;
  }

  if (instrutor) {
    const { titulo, descricao } = req.body;
    const novaAula = {
      id: bancodedados.identificadorAula++,
      instrutor_id: id,
      titulo,
      descricao,
    };
    bancodedados.aulas.push(novaAula);
    res.status(201).json(novaAula);
  } else {
    res.status(404).json({ mensagem: "Instrutor não encontrado" });
  }
};

const findAllAulas = (req, res) => {
  res.status(200).json(bancodedados.aulas);
};
const aulaById = (req, res) => {
  const id = req.params.id;
  const aula = bancodedados.aulas.find((aula) => aula.id == id);
  if (aula) {
    res.status(200).json(aula);
  } else {
    res.status(404).json({ mensagem: "Aula não encontrada" });
  }
};

const listAllAulas = (req, res) => {
  const id = req.params.id;
  const aulas = bancodedados.aulas.filter(
    (aula) => aula.instrutor_id == id && aula.status == true
  );
  res.status(200).json(aulas);
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
  updateStatus,
  createAula,
  findAllAulas,
  aulaById,
  listAllAulas
};
