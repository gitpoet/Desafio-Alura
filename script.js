function enviar() {
  const nome = document.querySelector('#nome').value;
  const idade = document.querySelector('#idade');
  const id = Number(idade.value);
  const linguagem = document.querySelector('#lingua').value;
  const resultado = document.querySelector('div#res');
  const pergunta = document.querySelector('div#sn');
  resultado.innerHTML = `Olá, ${nome}, você tem ${id} anos e ainda está aprendendo ${linguagem}`;
  pergunta.innerHTML += `Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM e o 2 para NÃO`;
}

function simOuNao() {
  const resposta = document.getElementById('resp');
  const resp = Number(resposta.value);
  switch (resp) {
    case 1:
      alert('Que bom! Continue estudando');
      break;
    case 2:
      alert('Que pena.');

      break;
    default:
      alert('Valor inválido');
  }
}
