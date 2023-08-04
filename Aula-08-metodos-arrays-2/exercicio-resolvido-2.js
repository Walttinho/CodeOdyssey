const arquivos = ["teste.txt", "foto.png", "contrato.doc", "instalador.exe"];

const antiVirus = (arquivo) => {
  const resultado = arquivo.some((file) => {
    return file.includes(".bat");
  });
  if (resultado) {
    return "Vírus detectado";
  } else {
    return "Nenhum vírus encontrado";
  }
};

antiVirus(arquivos);
