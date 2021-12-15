// Importar a função InicializarLoja do Arquivo de CARRINHO
// Para repor os itens após a filtragem
import {InicializarLoja} from './carrinho.js';

const filterItens = document.querySelectorAll(".filter"); //Acha quais são os filtros

for (let i = 0; i < filterItens.length; i++) 
{
    filterItens[i].addEventListener("click", function()
    {
        document.querySelector(".filter.active").classList.remove("active"); //Verifica qual o filtro ativo e o remove
        this.classList.add("active"); //Aciona o filtro no botão clicado

        let nameOfFilter = this.getAttribute("filter-name"); //Qual o nome do filtro
        document.querySelector(".product-filter").setAttribute("current-filter", nameOfFilter); //Joga o nome do filtro para o pai
        InicializarLoja(); //Atualiza os itens filtrados
    }); 
}