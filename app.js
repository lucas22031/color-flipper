const colors = ["red", "green", "blue", "yellow", "#f1f5f8"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
const randomNumber = getRandomNumber();

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber];
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
// Defina o array de cores.
// Selecione o botão no HTML.
// Selecione o elemento que mostrará a cor.
// Adicione o evento de clique ao botão.
// Crie uma função para gerar números aleatórios.
// No clique, mude a cor de fundo.
// Atualize o texto com o nome da cor.
// Teste o programa.