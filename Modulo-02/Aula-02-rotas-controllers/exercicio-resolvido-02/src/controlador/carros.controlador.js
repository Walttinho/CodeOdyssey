const carros = require("../databese/carros.databse.js");

const findAll = (req, res) => {
  let resultado = carros;
  const { cor, ano, marca } = req.query;

  if (cor) {
    resultado = carros.filter((carro) => {
      return carro.cor === cor;
    });
  }

  if (ano) {
    resultado = carros.filter((carro) => {
      return carro.ano === ano;
    });
  }
  if (marca) {
    resultado = carros.filter((carro) => {
      return carro.marca === marca;
    });
  }

  res.send(resultado);
};

const findById = (req, res) => {
const id = req.params.id
  
if(id){
  res.send(carros.find((carro)=> carro.id === Number(id)));
}
};

module.exports = { findAll, findById };
