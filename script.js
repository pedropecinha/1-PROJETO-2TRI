// Banco de dados expandido
const products = [
    { id: 1, name: "Air Max Dawn Alpha", brand: "Nike", price: 699.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500" },
    { id: 2, name: "Forum Mid Streetwear", brand: "Adidas", price: 549.99, image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=500" },
    { id: 3, name: "Jordan 1 Retro High Chicago", brand: "Jordan", price: 1499.99, image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?q=80&w=500" },
    { id: 4, name: "Puma RS-X Futuristic", brand: "Puma", price: 479.99, image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=500" },
    { id: 5, name: "Air Force 1 '07 All White", brand: "Nike", price: 799.99, image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=500" },
    { id: 6, name: "Ultraboost Performance 22", brand: "Adidas", price: 999.99, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=500" }
];

let cart = [];
let activeDiscount = 0;
let currentProductSelected = null;

// Elementos do DOM
const productsGrid = document.getElementById('products-grid');
const cartSidebar = document.getElementById('cart-sidebar');
const productModal = document.getElementById('product-modal');
const toast = document.getElementById('toast');

// Estado dos filtros
let selectedBrand = 'all';
let maxPrice = 2000;
let searchQuery = '';

// Renderizar Produtos com Filtros Aplicados
function renderProducts() {
    productsGrid.innerHTML = '';
    
    const filtered = products.filter(product => {
        const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
        const matchesPrice = product.price <= maxPrice;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesBrand && matchesPrice && matchesSearch;
    });

    if(filtered.length === 0) {
        productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:gray;">Nenhum tênis encontrado.</p>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <div onclick="openModal(${product.id})">
                <img src="${product.image}" alt="${product.name}">
                <p class="brand">${product.brand}</p>
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2)}</p>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">Rápido +</button>
        `;
        productsGrid.appendChild(card);
    });
}

// Controle do Modal de Detalhes
window.openModal = function(id) {
    const product = products.find(p => p.id === id);
    currentProductSelected = product;
    
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-title').innerText = product.name;
    document.getElementById('modal-brand').innerText = product.brand;
    document.getElementById('modal-price').innerText = `R$ ${product.price.toFixed(2)}`;
    
    productModal.classList.add('active');
};

document.getElementById('close-modal').addEventListener('click',