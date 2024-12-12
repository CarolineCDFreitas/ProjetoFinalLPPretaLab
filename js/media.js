/*
  Calcule a média da estudante, em seguida, com base na nota exiba as seguintes frases usando uma estrutura de condição:

    1. Se a nota for 0, mostre na tela: "Infelizmente você zerou a prova :( "
    2. Se a nota for entre 0.1 e 3, mostre na tela: 
      "Caramba, deu ruim, você obteve media {nota}! Estude mais e tente novamente!"
    3. Se a nota for entre 3.1 e 5.9, mostre na tela: 
      "Você obteve media {nota}! Falta pouco para a média."
    4. Se a nota for entre 6 e 7, mostre na tela: "Você está na média com {nota}"
    5. Se a nota for entre 7.1 e 9.9, mostre na tela: "Notão! Sua média é {nota}!"
    6. Se a nota for entre 10, mostre na tela: 
      "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média"
*/

function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  let mensagem = "";

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova =(";
  } else if (media >= 0.1 && media <= 3) {
    mensagem = `Carambra, deu ruim, você obteve média ${media}! Estude mais e tente novamente!`;
  } else if (media >= 3.1 && media <= 5.9) {
    mensagem = `Você obteve média ${media}! Falta pouco para a média.`;
  } else if (media >= 6 && media <= 7) {
    mensagem = `Você está na média com ${media}`;
  } else if (media >= 7.1 && media <= 9.9) {
    mensagem = `Notão! Sua média é ${media}`;
  } else {
    mensagem = `Hoje é seu aniversário? Porque você está de parabéns! ${media} de média `;
  }

  // evite mexer na linha de código abaixo!
  document.getElementById("situacaoAluno").innerHTML = mensagem;
}

// EXPLICACOES ADICIONAIS
/* 
Árvore DOM (Document Object Model), que é a representação hierárquica de todos os elementos de uma página HTML


Document
└── html
    ├── head
    │   └── title
    │       └── "Exemplo DOM"
    └── body
        └── input (type="number", id="nota1")


- `document` - representa a raiz da árvore DOM (o nó principal que contém todo o documento HTML)
- `getElementById("nota1")` - percorre a árvore DOM para encontrar o nó que corresponde ao elemento com id="nota1"
- `.value` - acessa o valor contido no nó <input> da árvore DOM
- `parseFloat` - converte o valor extraído (que originalmente é uma string) em um número

o uso do id "nota1" serve para identificar de forma única o elemento HTML que será manipulado pelo código JavaScript. Isso significa que o id="nota1" se refere exclusivamente 
a um elemento específico. Isso facilita para o JavaScript encontrar e interagir com esse elemento de forma direta, sem ambiguidade.

- usar um id descritivo como "nota1" torna o código mais legível e compreensível, alem de obedecer o semantismo.

relação prática com a Árvore DOM permite que o JS:
- leia os atributos e conteúdos dos nós (como value, id, class)
- modifique elementos do documento, como mudar valores ou alterar estilos
- adicione ou remova nós dinamicamente


MANIPULADOR DE EVENTOS 
onclick é um atributo HTML que define o que deve acontecer quando o usuário clica no elemento (como um botão ou um link)
** ele é um evento que dispara a execução de uma ação ou função definida em JavaScript, no caso calcularMedia() **

essa função deve estar definida no código JavaScript associado à página


*/
