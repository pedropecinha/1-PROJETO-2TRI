// Variáveis Globais de Estado do Carrinho
let itensNoCarrinho = 0;
let valorTotal = 0;

// Aguarda a página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Filtros da Vitrine de Produtos
    const botoesFiltro = document.querySelectorAll('.filter-btn');
    const cardsProdutos = document.querySelectorAll('.product-card');

    botoesFiltro.forEach(botao => {
        botao.addEventListener('click', () => {
            // Remove ativo de todos e adiciona no clicado
            botoesFiltro.forEach(b => b.classList.remove('active'));
            botao.classList.add('active');

            const categoriaSelecionada = botao.getAttribute('data-filter');

            cardsProdutos.forEach(card => {
                const categoriaCard = card.getAttribute('data-category');
                if (categoriaSelecionada === 'todos' || categoriaCard === categoriaSelecionada) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 3. Sistema de Modal (Visualizar Detalhes)
    const modal = document.getElementById('productModal');
    const botoesVisualizar = document.querySelectorAll('.view-btn');
    const botaoFecharModal = document.getElementById('close-modal-btn');

    botoesVisualizar.forEach(botao => {
        botao.addEventListener('click', () => {
            document.getElementById('modalTitle').innerText = botao.getAttribute('data-title');
            document.getElementById('modalDescription').innerText = botao.getAttribute('data-desc');
            document.getElementById('modalPrice').innerText = botao.getAttribute('data-price');
            modal.style.display = 'flex';
        });
    });

    if (botaoFecharModal) {
        botaoFecharModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Fechar modal ao clicar fora dele
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. Clique no Ícone do Carrinho (Resumo de Compras)
    const botaoCarrinho = document.getElementById('cart-btn');
    if (botaoCarrinho) {
        botaoCarrinho.addEventListener('click', () => {
            if (itensNoCarrinho === 0) {
                alert("🛒 Seu carrinho virtual do Agrinho está vazio. Adicione produtos clicando no botão + !");
            } else {
                alert(`🛒 Seu Carrinho Agrinho 2026\n---------------------------------\nQuantidade: ${itensNoCarrinho} item(ns)\nTotal: R$ ${valorTotal.toFixed(2).replace('.', ',')}\n\nObrigado por apoiar o agro sustentável!`);
            }
        });
    }

    // 5. Envio de Formulário Newsletter
    const formNews = document.getElementById('form-newsletter');
    if (formNews) {
        formNews.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = formNews.querySelector('input').value;
            alert(`🌱 Sucesso! O e-mail (${email}) foi cadastrado para receber o material do Agrinho 2026.`);
            formNews.reset();
        });
    }
});

// Função chamada pelo botão de compra (+) no HTML
function adicionarAoCarrinho(nomeProduto, precoProduto) {
    itensNoCarrinho += 1;
    valorTotal += precoProduto;

    // Atualiza o número vermelho em cima do carrinho
    const contador = document.getElementById('cart-counter');
    if (contador) {
        contador.innerText = itensNoCarrinho;
    }

    // Feedback visual rápido
    alert(`⚡ Item adicionado!\n"${nomeProduto}" foi para o seu carrinho.\nSubtotal atual: R$ ${valorTotal.toFixed(2).replace('.', ',')}`);
}