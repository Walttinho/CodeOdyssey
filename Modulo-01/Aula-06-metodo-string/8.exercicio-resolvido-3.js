function newdata(dia, mes, ano) {
  let textDia = dia.toString().padStart(2, 0);
  let textMes = mes.toString().padStart(2, 0);

  let textAno = ano.toString().padStart(4, 20);

  return `${textDia}/${textMes}/${textAno}`;
}

console.log(newdata(1, 5, 23));
