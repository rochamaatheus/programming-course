// Função para criar os cards a partir dos dados das aulas
function criarCards(aulas, container) {
  aulas.forEach(aula => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = aula.link;

    const content = document.createElement('div');
    content.className = 'card-content';

    const title = document.createElement('h2');
    title.textContent = aula.title;

    const description = document.createElement('p');
    description.textContent = aula.description;

    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(content);
    container.appendChild(card);
  });
}

// Função para criar os módulos a partir dos dados do JSON
function criarModulos(modulos) {
  const mainContainer = document.getElementById('cards-container');

  modulos.forEach(modulo => {
    // Cria o container do módulo
    const moduloContainer = document.createElement('div');
    moduloContainer.className = 'modulo';

    // Título do módulo
    const tituloModulo = document.createElement('h2');
    tituloModulo.className = 'modulo-titulo';
    tituloModulo.textContent = modulo.module_title;

    // Descrição do módulo
    const descricaoModulo = document.createElement('p');
    descricaoModulo.className = 'modulo-descricao';
    descricaoModulo.textContent = modulo.module_description;

    // Container para as aulas
    const aulasContainer = document.createElement('div');
    aulasContainer.className = 'aulas-container';

    // Cria os cards das aulas
    criarCards(modulo.aulas, aulasContainer);

    // Adiciona os elementos ao container do módulo
    moduloContainer.appendChild(tituloModulo);
    moduloContainer.appendChild(descricaoModulo);
    moduloContainer.appendChild(aulasContainer);

    // Adiciona o módulo ao container principal
    mainContainer.appendChild(moduloContainer);
  });
}

// Carregar os dados dos módulos a partir do JSON
fetch('artigos.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();
  })
  .then(data => {
    criarModulos(data);
  })
  .catch(error => {
    console.error('Erro:', error);
    const container = document.getElementById('cards-container');
    container.innerHTML =
      '<p>Desculpe, não foi possível carregar os módulos no momento.</p>';
  });
