// const mensagemOla = () => {
//   return 'Olá, Mundo';
// };

const entradaNome = document.getElementById('nome');
const botaoNome = document.getElementById('acao');
const botaoMensagem = document.getElementById('mensagem');

console.log(entradaNome, botaoNome, botaoMensagem);

const mensagemOla = (nome) => `Olá, ${nome}!`;

const resultado = mensagemOla('Mariana');
console.log(resultado);

botaoNome.addEventListener('click', () => {
  const nome = entradaNome.value;
  const msg = mensagemOla(nome);
  console.log(msg);
  botaoMensagem.innerHTML = msg;
});
