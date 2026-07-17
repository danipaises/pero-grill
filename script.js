// Dados do Cardápio
const menuData = [
  {
    category: "Pizzas Salgadas",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400",
    items: [
      { name: "Alho e Óleo", desc: "Mussarela, alho, cebola e orégano", price: "M: R$ 56,00 | G: R$ 63,00 | F: R$ 69,00" },
      { name: "Baianinha", desc: "Mussarela, palmito, catupiry e orégano", price: "M: R$ 58,00 | G: R$ 65,00 | F: R$ 71,00" },
      { name: "Calabresa", desc: "Mussarela, calabresa, cebola e orégano", price: "M: R$ 56,00 | G: R$ 63,00 | F: R$ 69,00" },
      { name: "Coreana", desc: "Mussarela, frango desfiado, bacon, catupiry e orégano", price: "M: R$ 56,00 | G: R$ 63,00 | F: R$ 69,00" },
      { name: "De Mania", desc: "Mussarela, calabresa, catupiry e orégano", price: "M: R$ 60,00 | G: R$ 67,00 | F: R$ 73,00" },
      { name: "Frango com Catupiry", desc: "Mussarela, frango desfiado, catupiry e orégano", price: "M: R$ 60,00 | G: R$ 67,00 | F: R$ 73,00" },
      { name: "Ipanema", desc: "Mussarela, presunto, catupiry, palmito, ovos, cebola e orégano", price: "M: R$ 62,00 | G: R$ 69,00 | F: R$ 75,00" },
      { name: "Italiana", desc: "Mussarela, presunto, champignon e orégano", price: "M: R$ 62,00 | G: R$ 69,00 | F: R$ 75,00" },
      { name: "Champignon com Alho", desc: "Mussarela, champignon, alho e cebola", price: "M: R$ 62,00 | G: R$ 69,00 | F: R$ 75,00" },
      { name: "Margherita", desc: "Mussarela, tomate, manjericão e orégano", price: "M: R$ 56,00 | G: R$ 63,00 | F: R$ 69,00" },
      { name: "Mussarela", desc: "Mussarela e orégano", price: "M: R$ 52,00 | G: R$ 61,00 | F: R$ 67,00" },
      { name: "Portuguesa", desc: "Mussarela, pimentão, presunto, tomate, palmito, ovo, ervilha, cebola, azeitona e orégano", price: "M: R$ 60,00 | G: R$ 68,00 | F: R$ 73,00" },
      { name: "Presunto", desc: "Mussarela, presunto, molho e orégano", price: "M: R$ 56,00 | G: R$ 63,00 | F: R$ 69,00" },
      { name: "Quatro Queijos", desc: "Mussarela, provolone, catupiry e parmesão", price: "M: R$ 62,00 | G: R$ 70,00 | F: R$ 75,00" },
      { name: "Senna", desc: "Mussarela, calabresa, bacon, parmesão, catupiry, cebola e orégano", price: "M: R$ 62,00 | G: R$ 70,00 | F: R$ 75,00" },
      { name: "Tentação", desc: "Mussarela, frango, calabresa, presunto, bacon, cebola, azeitona e orégano", price: "M: R$ 62,00 | G: R$ 72,00 | F: R$ 79,00" },
      { name: "Toscana", desc: "Mussarela, bacon, presunto e calabresa", price: "M: R$ 57,00 | G: R$ 66,00 | F: R$ 72,00" },
      { name: "Lombo Canadense", desc: "Mussarela, azeitonas, cebola, lombo canadense", price: "M: R$ 58,00 | G: R$ 65,00 | F: R$ 71,00" },
      { name: "Carne Seca Desfiada", desc: "Mussarela, carne seca, cebola e catupiry", price: "M: R$ 64,00 | G: R$ 72,00 | F: R$ 79,00" },
      { name: "Mista", desc: "Mussarela, frango desfiado, calabresa, presunto e orégano", price: "M: R$ 58,00 | G: R$ 66,00 | F: R$ 75,00" },
      { name: "Atum", desc: "Mussarela, atum, cebola e orégano", price: "M: R$ 56,00 | G: R$ 62,00 | F: R$ 67,00" },
      { name: "Camarão", desc: "Mussarela, camarão, catupiry e orégano", price: "M: R$ 66,00 | G: R$ 74,00 | F: R$ 81,00" },
      { name: "Frango Caipira", desc: "Mussarela, frango, milho e azeitonas", price: "M: R$ 60,00 | G: R$ 62,00 | F: R$ 73,00" },
      { name: "Mania de Pizza", desc: "Mussarela, calabresa, tomate, milho, bacon, azeitona, parmesão e orégano", price: "M: R$ 59,00 | G: R$ 66,00 | F: R$ 73,00" }
    ]
  },
  {
    category: "Pizzas Doces",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400",
    items: [
      { name: "Banana", desc: "Banana, canela e açúcar", price: "M: R$ 46,00 | G: R$ 52,00 | F: R$ 60,00" },
      { name: "Brigadeiro", desc: "Chocolate", price: "M: R$ 48,00 | G: R$ 54,00 | F: R$ 60,00" },
      { name: "Prestígio", desc: "Chocolate e Coco Ralado", price: "M: R$ 48,00 | G: R$ 54,00 | F: R$ 60,00" }
    ]
  },
  {
    category: "Carnes",
    image: "https://images.unsplash.com/photo-1544025162-8411bb2eec4c?auto=format&fit=crop&w=400",
    items: [
      { name: "Picanha na Chapa", desc: "Picanha, lingüiça, arroz, feijão, farofa, molho à campanha e fritas", price: "P/1: R$ 103,00 | P/2: R$ 148,00" },
      { name: "Picanha Mineira", desc: "Picanha bovina, lingüiça, arroz, tutu, couve mineira, aipim ou fritas", price: "P/1: R$ 107,00 | P/2: R$ 153,00" },
      { name: "Misto de Contra Filé", desc: "Contra-filé, frango, linguiça, arroz, feijão, farofa, molho à campanha e fritas", price: "P/1: R$ 92,00 | P/2: R$ 122,00" },
      { name: "Contra-Filé", desc: "Contra-filé, linguiça, arroz, feijão, farofa, molho à campanha e batata frita", price: "P/1: R$ 96,00 | P/2: R$ 125,00" },
      { name: "Churrasco Misto", desc: "Picanhas, frangos, lingüiça, arroz, feijão, farofa, molho e fritas", price: "P/1: R$ 105,00 | P/2: R$ 152,00" },
      { name: "Parmegiana", desc: "Carne ou Frango, arroz, purê ou batata frita", price: "P/1: R$ 110,00 | P/2: R$ 155,00" },
      { name: "Filé Mignon na Chapa", desc: "Arroz, cebola, queijo, batata frita", price: "P/1: R$ 105,00 | P/2: R$ 148,00" },
      { name: "Strogonoff de Filé Mignon", desc: "Arroz, batata frita", price: "R$ 118,00" },
      { name: "Filé Mignon do Chef", desc: "Filé Mignon aperitivo à milanesa, Arroz à grega e fritas", price: "R$ 135,00" }
    ]
  },
  {
    category: "Peixes",
    image: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400",
    items: [
      { name: "Anchova com Camarão Frito", desc: "Arroz, batata frita e salada simples", price: "R$ 170,00" },
      { name: "Anchova Simples", desc: "Arroz, batata frita e salada simples", price: "R$ 152,00" },
      { name: "Anchova com Molho de Camarão", desc: "Arroz, batata frita e salada simples", price: "R$ 179,00" },
      { name: "Dourado", desc: "Arroz, salada simples e batata frita", price: "R$ 152,00" },
      { name: "Filé de Peixe", desc: "Arroz, batata frita e salada simples", price: "R$ 152,00" },
      { name: "Filé de Peixe com Molho de Camarão", desc: "Arroz, batata frita, salada simples e pirão", price: "R$ 179,00" },
      { name: "Filé de Peixe com Camarão Frito", desc: "Arroz, batata frita e salada simples", price: "R$ 174,00" },
      { name: "Moqueca de Peixe", desc: "Arroz, batata frita ou purê, salada simples e pirão", price: "R$ 180,00" }
    ]
  },
  {
    category: "Frango",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400",
    items: [
      { name: "Filé de Frango na Chapa", desc: "Lingüiça, calabresa, arroz, feijão, farofa, molho e fritas", price: "P/1: R$ 94,00 | P/2: R$ 118,00" },
      { name: "Filé de Frango à Milanesa", desc: "Arroz à grega, fritas e salada simples", price: "P/1: R$ 108,00 | P/2: R$ 134,00" },
      { name: "Strogonoff de Frango", desc: "Arroz à grega, fritas e salada simples", price: "R$ 128,00" }
    ]
  },
  {
    category: "Saladas e Guarnições",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400",
    items: [
      { name: "Salada Simples", desc: "Alface, tomate e cebola", price: "R$ 15,00" },
      { name: "Salada de Palmito", desc: "Alface, tomate, cebola, palmito, champignon, milho e ovos cozidos", price: "R$ 52,00" },
      { name: "Salada Especial", desc: "Alface, tomate, cebola, palmito, champignon, milho e ovos cozidos", price: "R$ 58,00" },
      { name: "Arroz", desc: "Porção de arroz", price: "R$ 15,00" },
      { name: "Feijão", desc: "Porção de feijão", price: "R$ 15,00" },
      { name: "Farofa", desc: "Porção de farofa", price: "R$ 12,00" }
    ]
  },
  {
    category: "Massas",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=400",
    items: [
      { name: "Lasanha Frango ou Bolonhesa", desc: "Lasanha recheada", price: "R$ 56,00" },
      { name: "Lasanha Camarão", desc: "Lasanha de camarão", price: "R$ 71,00" },
      { name: "Espaguete Alho e Óleo", desc: "Massa", price: "R$ 45,00" },
      { name: "Espaguete com Camarão", desc: "Massa", price: "R$ 67,00" },
      { name: "Nhoque", desc: "Frango c/ Catupiry ou Bolonhesa", price: "R$ 51,00" },
      { name: "Fettucine", desc: "À Parisiense, Branco, ao Sugo ou Bolonhesa", price: "R$ 51,00" },
      { name: "Penne", desc: "À Parisiense, Branco, ao Sugo ou Bolonhesa", price: "R$ 51,00" },
      { name: "Espaguete", desc: "À Parisiense, Branco, ao Sugo ou Bolonhesa", price: "R$ 51,00" }
    ]
  },
  {
    category: "Lanches Gourmet",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400",
    items: [
      { name: "Hamburguer", desc: "Pão, carne, alface, tomates", price: "R$ 18,00" },
      { name: "Xburguer", desc: "Pão, carne, alface, tomates e queijo", price: "R$ 20,00" },
      { name: "Xfrango", desc: "Pão, alface, tomates, queijo e frango desfiado", price: "R$ 22,00" },
      { name: "Xbacon", desc: "Pão, carne, alface, tomates, queijo e bacon", price: "R$ 22,00" },
      { name: "Xcalabresa", desc: "Pão, carne, alface, tomates, queijo e calabresa", price: "R$ 22,00" },
      { name: "Egg Xburguer", desc: "Pão, carne, alface, tomates, queijo e ovo", price: "R$ 24,00" },
      { name: "Egg Xfrango", desc: "Pão, frango desfiado, alface, tomates, queijo e ovo", price: "R$ 24,00" },
      { name: "Egg Xbacon", desc: "Pão, carne, alface, tomates, queijo, bacon e ovo", price: "R$ 24,00" },
      { name: "Egg Xcalabresa", desc: "Pão, carne, alface, tomates, queijo, calabresa e ovo", price: "R$ 24,00" },
      { name: "X Tudo", desc: "Pão, carnes, alface, tomates, queijo, bacon, calabresa e ovo", price: "R$ 26,00" },
      { name: "Sanduíche de Filé Mignon", desc: "Pão, filé mignon, alface, tomates e queijo", price: "R$ 28,00" },
      { name: "Contra Filé no Pão", desc: "Pão, contra filé, alface, tomates e queijo", price: "R$ 26,00" },
      { name: "Batata (Pequena)", desc: "Porção pequena de batata frita", price: "R$ 12,00" }
    ]
  },
  {
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400",
    items: [
      { name: "Suco Natural ou Lata", desc: "", price: "R$ 14,00" },
      { name: "Suco 1L (Caixa)", desc: "", price: "R$ 16,00" },
      { name: "Matte", desc: "", price: "R$ 7,00" },
      { name: "Guaravita", desc: "", price: "R$ 4,00" },
      { name: "Guaraviton", desc: "", price: "R$ 8,00" },
      { name: "Água c/ ou s/ Gás", desc: "", price: "R$ 5,00" },
      { name: "Vinho (Caneca)", desc: "", price: "R$ 15,00" },
      { name: "Cerveja LN Importada", desc: "", price: "R$ 15,00" },
      { name: "Cerveja 600ml Nacional", desc: "", price: "R$ 17,00" },
      { name: "Cerveja 600ml Importada", desc: "", price: "R$ 20,00" },
      { name: "Refrigerante Lata", desc: "", price: "R$ 8,00" },
      { name: "Refrigerante 600ml", desc: "", price: "R$ 12,00" },
      { name: "Refrigerante 1,5L", desc: "", price: "R$ 15,00" },
      { name: "Ice Tea", desc: "", price: "R$ 8,00" },
      { name: "H2O", desc: "", price: "R$ 8,00" },
      { name: "Chopp de Vinho", desc: "", price: "R$ 16,00" },
      { name: "Coca KS", desc: "", price: "R$ 7,00" }
    ]
  }
];

// Estado da Aplicação
let currentMode = null; // 'delivery' ou 'restaurant'
let cart = [];

// Elementos DOM
const btnHistoria = document.getElementById('btn-historia');
const btnCardapio = document.getElementById('btn-cardapio');
const heroBtnCardapio = document.getElementById('hero-btn-cardapio');
const sectionHistoria = document.getElementById('section-historia');
const sectionCardapio = document.getElementById('section-cardapio');

const modalMode = document.getElementById('modal-mode');
const btnModeDelivery = document.getElementById('btn-mode-delivery');
const btnModeRestaurant = document.getElementById('btn-mode-restaurant');
const btnChangeMode = document.getElementById('btn-change-mode');
const consumptionModeDisplay = document.getElementById('consumption-mode-display');

const menuContainer = document.getElementById('menu-container');
const floatingCartBtn = document.getElementById('btn-floating-cart');
const cartCountSpan = document.getElementById('cart-count');

const modalCart = document.getElementById('modal-cart');
const btnCloseCart = document.getElementById('btn-close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const btnClearCart = document.getElementById('btn-clear-cart');

// Número do WhatsApp (Substituir pelo número correto se necessário)
const WHATSAPP_NUMBER = "552226443874";

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Tenta recuperar carrinho do localStorage
    const savedCart = localStorage.getItem('peroGrillCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }

    renderMenu();
});

// Navegação das Abas
function switchTab(tab) {
    if (tab === 'historia') {
        btnHistoria.classList.add('active');
        btnCardapio.classList.remove('active');
        sectionHistoria.classList.add('active');
        sectionHistoria.classList.remove('hidden');
        sectionCardapio.classList.remove('active');
        sectionCardapio.classList.add('hidden');
    } else {
        btnHistoria.classList.remove('active');
        btnCardapio.classList.add('active');
        sectionHistoria.classList.remove('active');
        sectionHistoria.classList.add('hidden');
        sectionCardapio.classList.add('active');
        sectionCardapio.classList.remove('hidden');

        // Se entrar no cardápio e não tiver modo escolhido, exibe modal
        if (!currentMode) {
            modalMode.classList.remove('hidden');
        }
    }
}

btnHistoria.addEventListener('click', () => switchTab('historia'));
btnCardapio.addEventListener('click', () => switchTab('cardapio'));
heroBtnCardapio.addEventListener('click', () => switchTab('cardapio'));

// Modal de Modos
btnModeDelivery.addEventListener('click', () => {
    currentMode = 'delivery';
    consumptionModeDisplay.innerHTML = `Modo: Delivery <button id="btn-change-mode" class="btn-text">Alterar</button>`;
    modalMode.classList.add('hidden');
    rebindChangeMode();
    renderMenu();
    updateCartUI(); // Esconde carrinho se houver
});

btnModeRestaurant.addEventListener('click', () => {
    currentMode = 'restaurant';
    consumptionModeDisplay.innerHTML = `Modo: No Restaurante <button id="btn-change-mode" class="btn-text">Alterar</button>`;
    modalMode.classList.add('hidden');
    rebindChangeMode();
    renderMenu();
    updateCartUI();
});

function rebindChangeMode() {
    document.getElementById('btn-change-mode').addEventListener('click', () => {
        modalMode.classList.remove('hidden');
    });
}

// Renderizar Cardápio
function renderMenu() {
    menuContainer.innerHTML = '';

    menuData.forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.className = 'menu-category';
        
        catDiv.innerHTML = `
            <h3 class="menu-category-title">${category.category}</h3>
            <div class="menu-grid"></div>
        `;
        
        const grid = catDiv.querySelector('.menu-grid');

        category.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            
            // Lógica do Botão dependendo do modo
            let buttonHTML = '';
            if (currentMode === 'delivery') {
                buttonHTML = `<button class="btn-whatsapp" onclick="orderWhatsApp('${item.name}')">🛵 Pedir via WhatsApp</button>`;
            } else if (currentMode === 'restaurant') {
                buttonHTML = `<button class="btn-add" onclick="addToCart('${item.name}')">➕ Adicionar à Comanda</button>`;
            } else {
                buttonHTML = `<button class="btn-add" style="opacity: 0.5; cursor: not-allowed;" disabled>Selecione um Modo</button>`;
            }

            card.innerHTML = `
                <img src="${category.image}" alt="${category.category} - Imagem Representativa">
                <div class="menu-card-content">
                    <h4>${item.name}</h4>
                    <p class="desc">${item.desc}</p>
                    <p class="price">${item.price}</p>
                    ${buttonHTML}
                </div>
            `;
            grid.appendChild(card);
        });

        menuContainer.appendChild(catDiv);
    });
}

// Lógica de WhatsApp
window.orderWhatsApp = function(itemName) {
    const message = `Olá! Vi o cardápio digital do Peró Grill e gostaria de pedir para entrega o item: ${itemName}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Lógica de Comanda (Restaurante)
window.addToCart = function(itemName) {
    // Verifica se já existe e soma, ou adiciona novo
    const existing = cart.find(i => i.name === itemName);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ name: itemName, qty: 1 });
    }
    
    saveCart();
    updateCartUI();
    
    // Pequena animação no botão flutuante
    floatingCartBtn.classList.remove('pulse-anim');
    void floatingCartBtn.offsetWidth; // trigger reflow
    floatingCartBtn.classList.add('pulse-anim');
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartCountSpan.innerText = `(${totalItems})`;

    if (currentMode === 'restaurant' && totalItems > 0) {
        floatingCartBtn.classList.remove('hidden');
    } else {
        floatingCartBtn.classList.add('hidden');
    }
}

function saveCart() {
    localStorage.setItem('peroGrillCart', JSON.stringify(cart));
}

// Modal do Carrinho
floatingCartBtn.addEventListener('click', () => {
    renderCartItems();
    modalCart.classList.remove('hidden');
});

btnCloseCart.addEventListener('click', () => {
    modalCart.classList.add('hidden');
});

btnClearCart.addEventListener('click', () => {
    if(confirm('Tem certeza que deseja limpar sua comanda?')) {
        cart = [];
        saveCart();
        updateCartUI();
        modalCart.classList.add('hidden');
    }
});

function renderCartItems() {
    cartItemsList.innerHTML = '';
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li>Sua comanda está vazia.</li>';
        return;
    }

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <span class="cart-item-qty">${item.qty}x</span>
                <span class="cart-item-name">${item.name}</span>
            </div>
            <button class="btn-text" style="color: #ff5252;" onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsList.appendChild(li);
    });
}

window.removeFromCart = function(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    renderCartItems();
    
    if (cart.length === 0) {
        modalCart.classList.add('hidden');
    }
}
