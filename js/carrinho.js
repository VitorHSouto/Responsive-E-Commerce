import {items} from './itens.js';


function InicializarLoja(){
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
        containerProdutos.innerHTML += `

        <div class="produto-single">
            <img class="item-product" src="`+val.img+`" alt="">
            <p>`+val.nome+`</p>
            <p>`+val.valor+`</p>
            <a class="item-id" key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
        </div>

        `;
    })
}

InicializarLoja();

function AtualizarCarrinho(){
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val) => {

        if(val.quantidade > 0)
        {
            containerCarrinho.innerHTML += `
            <p>`+val.nome+` | Quantidade: `+val.quantidade+`</p>
            <hr>
            `;
        }

    })
}

var links = document.getElementsByClassName("item-id");

for (let i = 0; i < links.length; i++) 
{
    links[i].addEventListener("click", function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        AtualizarCarrinho();
        return false;
    })    
}