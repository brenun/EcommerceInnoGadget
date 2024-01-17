 function criarProduto(nome, descricao, preco, imagem) {
    var div = document.createElement('div');
    div.className = 'bg-white p-4 shadow-md rounded-md text-center flex flex-col items-center justify-center';

    var titulo = document.createElement('h1');
    titulo.className = 'text-gray-800 font-bold mb-2';
    titulo.textContent = nome;

    var desc = document.createElement('p');
    desc.className = 'text-gray-500 text-xs';
    desc.textContent = descricao;

    var precoElement = document.createElement('p');
    precoElement.className = 'text-gray-500 text-xs mt-2';
    precoElement.textContent = 'Preço: $' + preco;

    var imagemElement = document.createElement('img');
    imagemElement.src = imagem;
    imagemElement.className = 'mt-2 rounded-md';

    var botao = document.createElement('button');
    botao.className = 'bg-blue-800 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-700';
    botao.textContent = 'Comprar';

    div.appendChild(titulo);
    div.appendChild(desc);
    div.appendChild(precoElement);
    div.appendChild(imagemElement);
    div.appendChild(botao);

    return div;
  }

  var produtosTech = [
    { nome: 'Smartphone', descricao: 'Smartphone avançado para o ladrão levar.', preco: '699.99', imagem: 'https://source.unsplash.com/featured/250x200?smarthphone' },
    { nome: 'PC Gamer', descricao: 'PC potente assistir X-VIDEOS.', preco: '1499.99', imagem: 'https://source.unsplash.com/featured/250x200?computer' },
    { nome: 'Fone de Ouvido Bluetooth', descricao: 'Fone de ouvido usou quebrou.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?headphone' },
    { nome: 'Mouse', descricao: 'Mouse gamer pior que o da feira.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?mouse' },
    { nome: 'Teclado', descricao: 'Teclado afunda dedo.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?keyboard' },
    { nome: 'Joystick', descricao: 'Diretamente do paraguay.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?joystick' },
    { nome: 'Ração para gatos', descricao: 'Seu gato como nunca antes.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?ração' },
    { nome: 'Café', descricao: 'Café para aumentar seu foco.', preco: '129.99', imagem: 'https://source.unsplash.com/featured/250x200?marijuana' }

  ];

  produtosTech.forEach(function(produto) {
    var produtoElement = criarProduto(produto.nome, produto.descricao, produto.preco, produto.imagem);
        document.getElementById('products-list').appendChild(produtoElement);
      });