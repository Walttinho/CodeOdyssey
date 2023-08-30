const fs = require('fs').promises;


(async function() {
  try {
    const arquivoJson = await fs.readFile("./teste.json");
    const pessoas = JSON.parse(arquivoJson.toString());

    pessoas.push({ nome: 'teste' });

    const novoJson = JSON.stringify(pessoas, null, 2);

    await fs.writeFile("./teste.json", novoJson);  // Escreve o JSON de volta para o arquivo

    console.log("JSON atualizado:", novoJson);
  } catch (error) {
    console.error("Erro:", error);
  }
})();