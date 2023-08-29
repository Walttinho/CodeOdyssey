const fs = require('fs');

(async function() {
  const arquivoJson = await fs.promises.readFile('teste.json');
  const pessoas = JSON.parse(arquivoJson.toString());

  pessoas.push({nome: 'testew'});

  const arrayJason = JSON.stringify(pessoas);
  console.log(arrayJason);
})();