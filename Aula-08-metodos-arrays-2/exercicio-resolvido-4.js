const professores = [
  { nome: "Guido", stack: "backend" },
  { nome: "Vidal", stack: "backend" },
  { nome: "Dani", stack: "frontend" },
  { nome: "Diego", stack: "frontend" },
  { nome: "Léo", stack: "backend" },
  { nome: "Ruli", stack: "frontend" },
];

const verificarStack = (array, stack) => {
  const resultado = array.filter((area) => {
    return stack.toLowerCase() === area.stack.toLowerCase();
  });

  return resultado;
};

console.log(verificarStack(professores, "FrontEnd"));
