import {items} from './itens.js';

function InicializarLoja(){
    var containerProdutos = document.getElementById("produtos");
    items.map((val) => {
        containerProdutos.innerHTML += `

        <!--1================================-->
        <div class="swiper-slide">
            <!--box----------------------->
            <div class="product-box">
                <!--==offer==-->
                <span class="product-box-offer">-20%</span>

                <!--img-container****************-->
                <div class="product-img-container">
    
                <!--img=============-->
                <div class="product-img">
                <a href="#">
                    <img class="product-img-front" src="`+val.img+`" alt=""/>
                    <img class="product-img-back" src="`+val.img+`" alt=""/>
                </a>
                </div>
                </div>

                <!--text***************************-->
                <div class="product-box-text">
                    <!--category-->
                    <div class="product-category">
                        <span>`+val.nome+`</span>
                    </div>
                    <!--tile--->
                    <a href="#" class="product-title">
                    `+val.nome+`
                    </a>
                    <!--Price--->
                    <div class="price-buy">
                        <span class="p-price">`+val.valor+`</span>
                        <a href="#" class="p-buy-btn">Adicionar ao Carrinho</a>
                    </div>
                </div>

            </div>
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