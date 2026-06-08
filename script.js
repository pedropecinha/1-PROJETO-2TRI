let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionarCarrinho(nome, preco, imagem){

    carrinho.push({
        nome,
        preco,
        imagem
    });

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarContador();

    alert("Produto adicionado ao carrinho!");
}

function atualizarContador(){

    const contador = document.getElementById("contador");

    if(contador){
        contador.innerText = carrinho.length;
    }
}

function carregarCarrinho(){

    const lista = document.getElementById("lista-carrinho");

    if(!lista) return;

    let total = 0;

    lista.innerHTML = "";

    carrinho.forEach((produto,index)=>{

        total += produto.preco;

        lista.innerHTML += `
        <div class="item-carrinho">

            <img src="${produto.imagem}">

            <div>
                <h3>${produto.nome}</h3>
                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button onclick="removerItem(${index})">
                    Remover
                </button>
            </div>

        </div>
        `;
    });

    document.getElementById("total").innerText =
    total.toFixed(2);
}

function removerItem(index){

    carrinho.splice(index,1);

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

    carregarCarrinho();
}

function finalizarCompra(){

    alert("Compra realizada com sucesso!");

    localStorage.removeItem("carrinho");

    window.location.href = "index.html";
}

atualizarContador();
carregarCarrinho();