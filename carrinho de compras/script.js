const produtos = [{
id:"1",
nome:"Informatica para internet: Interfaces Web II",
prof:"Prof. Kelly",
preco_de:80,
preco_por:50,
descricao:"O melhor curso de JavaScript",
imagem:"1.png",
},

{
    id:"2",
    nome:"Gestao de conteudo Web II",
    prof:"Prof Kelly",
    preco_de: 80,
    preco_por:50,
    descricao:"O melhor curso de JavaScript",
    imagem:"3.png",
},
];
function renderizadoProduto(){
    let html = "";
    for (let i = 0; i < produtos.length; i++){
        html = html + criaProdutos(produtos[i], i);
    }
    return html;
}

function criaProdutos(produto, index) {
    return `
    <div class="curso">
    <img class='inicio' title="t" src="${produto.imagem}" />
    <div class="curso-info">
   <h4>${produto.nome}</h4>
   <p>${produto.prof}</p>
   <p>${produto.descricao}</p>
   </div>
   <div class="curso-preco">
   <span class="preco-de">R${produto.preco_de}</span>
   <span class="preco-por">R${produto.preco_por}</span>
   <button class="btncar btn-add" data-index="${index}"></button>
   </div>
   </div>
   `;
}
const container = document.querySelector("#container")
container.innerHTML= renderizadoProduto();

