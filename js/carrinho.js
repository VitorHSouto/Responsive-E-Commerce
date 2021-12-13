import {items} from './itens.js';

function InicializarLoja(){
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
        containerProdutos.innerHTML += `

        <!--================= `+val.id+` =================-->
        <div class="product-box">
            <div class="image-box">
                <div class="product-img-container">
                    <!--img=============-->
                    <div class="product-img">
                        <a>
                            <img class="product-img-front" src="`+val.img+`" alt="`+val.nome+`"/>
                            <img class="product-img-back" src="`+val.img+`" alt="`+val.nome+`"/>
                        </a>
                    </div>
                </div>
            </div>
            
            <!--text***************************-->
            <div class="product-box-text">
                <!--category-->
                <div class="product-category">
                    <span>`+val.descricao+`</span>
                </div>
                <!--tile--->
                <a" class="product-title">
                    `+val.nome+`
                </a>
                <!--Price--->
                <div class="price-buy">
                    <span class="p-price">R$ `+val.valor+`</span>
                    <i class="material-icons p-buy-btn item-id" key="`+val.id+`">add_circle</i>
                </div>
            </div>
        </div> 

        `;
    })
}

InicializarLoja();

var totalCompra = 0;
var quantidadeItens = 0;
function AtualizarCarrinho(){
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    quantidadeItens = 0;
    items.map((val) => {

        if(val.quantidade > 0)
        {
            totalCompra += val.valor
            quantidadeItens += val.quantidade;
            containerCarrinho.innerHTML += `
            <p>`+val.nome+` | Quantidade: `+val.quantidade+`</p>
            <hr>
            `;
            document.getElementById("qnt-carrinho").style.display = '';
        }

    })
    var textTotal = document.getElementById("carrinho-total");
    textTotal.textContent = "R$ " + totalCompra.toFixed(2).replace(".", ",");
    
    var textQuantidade = document.getElementById("qnt-carrinho");
    textQuantidade.textContent = quantidadeItens.toString();

    AlertAppearCarrinho();
    setTimeout(function(){
        AlertDisappearCarrinho();
    },3000);
}

if(quantidadeItens <= 0){
    document.getElementById("qnt-carrinho").style.display = "none";
    document.getElementById("carrinho-total").textContent = "R$ 0,00";
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

const alert = document.getElementById('alert');
function AlertAppearCarrinho(){
    alert.style.display = '';
    alert.classList.add('show');
    alert.classList.remove('hide');
}

function AlertDisappearCarrinho(){
    alert.classList.add('hide');
    alert.classList.remove('show');
}