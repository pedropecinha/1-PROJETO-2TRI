// --- CONTROLE DO MENU RESPONSIVO (MOBILE) ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Altera o ícone do menu entre barras e 'X'
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars';
            }
        });
    }
});

// --- LÓGICA DO CARRINHO DE COMPRAS ---
function adicionarAoCarrinho(nomeProduto) {
    // Alerta visual bonito simulando a adição ao carrinho
    alert(`🌱 Excelente escolha sustentável!\nO item "${nomeProduto}" foi adicionado simuladamente ao seu carrinho do Agrinho 2026.`);
}