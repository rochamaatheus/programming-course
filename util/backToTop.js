// backToTop.js
document.addEventListener('DOMContentLoaded', () => {
  // Criar o elemento do botão
  const backToTopButton = document.createElement('button');
  backToTopButton.id = 'backToTopButton';
  backToTopButton.title = 'Voltar para o topo';
  backToTopButton.innerHTML = '⬆'; // Você pode usar um ícone ou texto

  // Anexar o botão ao body
  document.body.appendChild(backToTopButton);

  // Mostrar ou ocultar o botão com base na posição de scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Scroll suave para o topo ao clicar no botão
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
