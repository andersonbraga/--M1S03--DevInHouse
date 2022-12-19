function somaTudo(...numeros) {
  let total = 0;
  numeros.forEach((nun) => (total += nun));
  return total;

  //  for (let i = 0; i < numeros.length; i++) {
  //  total += numeros[i];
  // }
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10
