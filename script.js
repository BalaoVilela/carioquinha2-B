// Script para exibir uma mensagem quando o botão 'Comprar' for clicado
const buttons = document.querySelectorAll('.produto button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert("Obrigado por comprar na Doce Sonho! Seu pedido está sendo processado.");
  });
});
