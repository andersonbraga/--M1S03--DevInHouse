function verificaPalindromo(texto) {
  const meio = testo.length / 2;
  const fim = texto.length / -1;

  for (let i = 0; i < meio.length; i++) {
    console.log(texto[i], texto[fim - i]);
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }
  console.log('---');
}
const test0 = verificaPalindromo('osso');
console.log(test0);
const test1 = verificaPalindromo('ana');
console.log(test1);
const test2 = verificaPalindromo('julia');
console.log(test2);
