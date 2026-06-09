let carrinho =
JSON.parse(localStorage.getItem("carrinho")) || [];

atualizarCarrinho();

function adicionarCarrinho(nome, preco){

    carrinho.push({
        nome,
        preco
    });

    salvar();
    atualizarCarrinho();
}

function removerItem(index){

    carrinho.splice(index,1);

    salvar();
    atualizarCarrinho();
}

function atualizarCarrinho(){

    let lista =
    document.getElementById("lista-carrinho");

    let total = 0;

    lista.innerHTML = "";

    carrinho.forEach((item,index)=>{

        total += item.preco;

        lista.innerHTML += `
        <li>
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerItem(${index})">
                ❌
            </button>
        </li>`;
    });

    document.getElementById("total")
    .innerHTML = total.toFixed(2);

    document.getElementById("contador")
    .innerHTML = carrinho.length;
}

function salvar(){
    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );
}

function limparCarrinho(){

    carrinho=[];

    salvar();
    atualizarCarrinho();
}

function finalizarCompra(){

    if(carrinho.length===0){
        alert("Seu carrinho está vazio!");
        return;
    }

    alert(
        "Compra realizada com sucesso!\nObrigado por comprar no AgroConnect!"
    );

    limparCarrinho();
}