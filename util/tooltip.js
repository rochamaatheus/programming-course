// tooltip.js

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona todos os elementos com a classe .term que possuem um data-tooltip
  const terms = document.querySelectorAll('.term[data-tooltip]');

  terms.forEach(term => {
    term.addEventListener('mouseenter', showTooltip);
    term.addEventListener('mouseleave', hideTooltip);
  });

  function showTooltip(event) {
    const term = event.currentTarget;
    const tooltipText = term.getAttribute('data-tooltip');
    if (!tooltipText) return;

    const tooltipBox = document.createElement('div');
    tooltipBox.classList.add('tooltip-box');
    tooltipBox.innerText = tooltipText;
    document.body.appendChild(tooltipBox);

    const termRect = term.getBoundingClientRect();
    const tooltipRect = tooltipBox.getBoundingClientRect();

    // Ajuste de posição da tooltip (acima ou abaixo do termo)
    let top = termRect.top - tooltipRect.height - 10;
    if (top < 0) {
      top = termRect.bottom + 10;
    }

    let left = termRect.left + termRect.width / 2 - tooltipRect.width / 2;

    // Garantir que a tooltip não ultrapasse os limites da tela
    if (left < 10) left = 10;
    if (left + tooltipRect.width > window.innerWidth - 10) {
      left = window.innerWidth - tooltipRect.width - 10;
    }

    tooltipBox.style.top = `${top + window.scrollY}px`;
    tooltipBox.style.left = `${left + window.scrollX}px`;

    // Armazena a referência da tooltip para remoção posterior
    term._tooltipBox = tooltipBox;
    console.log(term);
  }

  function hideTooltip(event) {
    const term = event.currentTarget;
    if (term._tooltipBox) {
      term._tooltipBox.remove();
      delete term._tooltipBox;
    }
  }
});
