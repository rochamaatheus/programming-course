document.addEventListener('DOMContentLoaded', () => {
  // Função para remover a indentação comum
  function removeCommonIndentation(str) {
    const lines = str.split('\n');
    // Remover linhas vazias no início e no fim
    while (lines.length && lines[0].trim() === '') lines.shift();
    while (lines.length && lines[lines.length - 1].trim() === '') lines.pop();
    // Encontrar a menor indentação não vazia
    const indentLengths = lines
      .filter((line) => line.trim())
      .map((line) => line.match(/^(\s*)/)[0].length);
    const minIndent = Math.min(...indentLengths);
    // Remover a indentação comum
    const trimmedLines = lines.map((line) => line.slice(minIndent));
    return trimmedLines.join('\n');
  }

  const codeBlocks = document.querySelectorAll('.code-block pre code');

  codeBlocks.forEach((codeBlock) => {
    const rawCode = codeBlock.textContent;
    const cleanedCode = removeCommonIndentation(rawCode);
    codeBlock.textContent = cleanedCode;
  });

  // Reaplica o destaque de sintaxe usando Prism.js
  Prism.highlightAll();

  // Funcionalidade do botão de copiar
  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const codeElement = button.nextElementSibling.querySelector('code');
      const code = codeElement.textContent;
      navigator.clipboard
        .writeText(code)
        .then(() => {
          button.textContent = 'Copiado!';
          setTimeout(() => {
            button.textContent = 'Copiar';
          }, 2000);
        })
        .catch(() => {
          button.textContent = 'Erro';
        });
    });
  });
});
