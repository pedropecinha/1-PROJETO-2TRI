// VARIÁVEIS DO ESTADO DA APLICAÇÃO (CARRINHO)
let totalItensNoCarrinho = 0;
let valorTotalCarrinho = 0;

// CONTROLE DO MENU RESPONSIVO MOBILE
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        });
    }
});

// SISTEMA DE FILTRAGEM DINÂMICA DE PRODUTOS
function filtrarProdutos(categoria, botaoAlvo) {
    // Altera classe ativa dos botões
    const botoes = document.querySelectorAll('.filter-btn');
    botoes.forEach(btn => btn.classList.remove('active'));
    botaoAlvo.classList.add('active');

    // Executa a filtragem visual dos cards
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        if (categoria === 'todos' || card.getAttribute('data-category') === categoria) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// ADICIONAR PRODUTOS E CALCULAR VALOR TOTAL (SIMULADO)
function adicionarAoCarrinho(nome, preco) {
    totalItensNoCarrinho += 1;
    valorTotalCarrinho += preco;
    
    // Atualiza contador numérico na interface
    document.getElementById('cart-counter').innerText = totalItensNoCarrinho;

    alert(`✅ "${nome}" adicionado com sucesso!\n\nSeu carrinho virtual do Agrinho agora possui ${totalItensNoCarrinho} item(ns).\nSubtotal: R$ ${valorTotalCarrinho.toFixed(2).replace('.', ',')}`);
}

// INFORMAÇÕES DO STATUS DO CARRINHO
function abrirResumoCarrinho() {
    if (totalItensNoCarrinho === 0) {
        alert("Seu carrinho ecológico está vazio no momento. Adicione produtos na nossa vitrine!");
    } else {
        alert(`🛒 Resumo do seu Carrinho Agrinho 2026:\n-----------------------------------------\nQuantidade total: ${totalItensNoCarrinho} item(ns)\nValor Total Acumulado: R$ ${valorTotalCarrinho.toFixed(2).replace('.', ',')}\n\nPronto para fechar negócio sustentável!`);
    }
}

// MANIPULAÇÃO DO POP-UP / MODAL DE DETALHES
function abrirModal(titulo, descricao, preco) {
    document.getElementById('modalTitle').innerText = titulo;
    document.getElementById('modalDescription').innerText = descricao;
    document.getElementById('modalPrice').innerText = preco;
    document.getElementById('productModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('productModal').style.display = 'none';
}

// FECHAR MODAL CLICANDO FORA DA CAIXA BRANCA
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// ENVIO FICTÍCIO DE FORMULÁRIO DE CAPTAÇÃO
function enviarFormulario(event) {
    event.preventDefault();
    const emailDigitado = event.target.querySelector('input').value;
    alert(`🌱 Excelente! O e-mail "${emailDigitado}" foi cadastrado no banco de dados do Concurso Agrinho 2026. Em breve enviaremos nosso catálogo completo.`);
    event.target.reset();
}