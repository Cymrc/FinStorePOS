/* ==========================================================================
   Sari-Sari Store POS System - JavaScript Logic with LocalStorage Persistence
   Pure Vanilla JS implementation of Point-of-Sale Operations, Categories & Storage
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DATASET - Grocery Items Inventory with Categories & Numbered JPG Images (50 Products)
// --------------------------------------------------------------------------
const groceryItems = [
  { product_id: 1, product_name: "Dried Mangoes (200g)", product_price: 180, category: "Snacks", image: "images/01-dried-mangoes.jpg" },
  { product_id: 2, product_name: "Banana Chips (200g)", product_price: 120, category: "Snacks", image: "images/02-banana-chips.jpg" },
  { product_id: 3, product_name: "Tablea Chocolate (250g)", product_price: 200, category: "Sweets & Desserts", image: "images/03-tablea-chocolate.jpg" },
  { product_id: 4, product_name: "Coconut Oil (500ml)", product_price: 180, category: "Cooking Essentials", image: "images/04-coconut-oil.jpg" },
  { product_id: 5, product_name: "Mango Jam (250g)", product_price: 160, category: "Sweets & Desserts", image: "images/05-mango-jam.jpg" },
  { product_id: 6, product_name: "Peanut Brittle (200g)", product_price: 150, category: "Sweets & Desserts", image: "images/06-peanut-brittle.jpg" },
  { product_id: 7, product_name: "Cashew Nuts (250g)", product_price: 280, category: "Snacks", image: "images/07-cashew-nuts.jpg" },
  { product_id: 8, product_name: "Philippine Coffee Beans (250g)", product_price: 320, category: "Beverages", image: "images/08-coffee-beans.jpg" },
  { product_id: 9, product_name: "Native Vinegar (500ml)", product_price: 120, category: "Cooking Essentials", image: "images/09-native-vinegar.jpg" },
  { product_id: 10, product_name: "Philippine Honey (250ml)", product_price: 250, category: "Cooking Essentials", image: "images/10-honey.jpg" },
  { product_id: 11, product_name: "Coconut Sugar (500g)", product_price: 180, category: "Cooking Essentials", image: "images/11-coconut-sugar.jpg" },
  { product_id: 12, product_name: "Rice Crackers (200g)", product_price: 100, category: "Snacks", image: "images/12-rice-crackers.jpg" },
  { product_id: 13, product_name: "Salted Fish (Danggit, 250g)", product_price: 220, category: "Seafood", image: "images/13-danggit.jpg" },
  { product_id: 14, product_name: "Longganisa (Frozen, 500g)", product_price: 280, category: "Meat & Frozen", image: "images/14-longganisa.jpg" },
  { product_id: 15, product_name: "Tocino (Frozen, 500g)", product_price: 300, category: "Meat & Frozen", image: "images/15-tocino.jpg" },
  { product_id: 16, product_name: "Chicharon (100g)", product_price: 120, category: "Snacks", image: "images/16-chicharon.jpg" },
  { product_id: 17, product_name: "Pandesal Pack (12 pcs)", product_price: 80, category: "Bakery & Kakanin", image: "images/17-pandesal.jpg" },
  { product_id: 18, product_name: "Native Brown Rice (1kg)", product_price: 90, category: "Rice & Grains", image: "images/18-brown-rice.jpg" },
  { product_id: 19, product_name: "White Rice (1kg)", product_price: 70, category: "Rice & Grains", image: "images/19-white-rice.jpg" },
  { product_id: 20, product_name: "Corn Coffee (250g)", product_price: 150, category: "Beverages", image: "images/20-corn-coffee.jpg" },
  { product_id: 21, product_name: "Coconut Water (1L)", product_price: 100, category: "Beverages", image: "images/21-coconut-water.jpg" },
  { product_id: 22, product_name: "Calamansi Juice (1L)", product_price: 120, category: "Beverages", image: "images/22-calamansi-juice.jpg" },
  { product_id: 23, product_name: "Guava Jelly (250g)", product_price: 160, category: "Sweets & Desserts", image: "images/23-guava-jelly.jpg" },
  { product_id: 24, product_name: "Bagoong (250g)", product_price: 90, category: "Cooking Essentials", image: "images/24-bagoong.jpg" },
  { product_id: 25, product_name: "Fish Sauce (Patis, 500ml)", product_price: 110, category: "Cooking Essentials", image: "images/25-patis.jpg" },
  { product_id: 26, product_name: "Soy Sauce (500ml)", product_price: 95, category: "Cooking Essentials", image: "images/26-soy-sauce.jpg" },
  { product_id: 27, product_name: "Native Salt (250g)", product_price: 50, category: "Cooking Essentials", image: "images/27-native-salt.jpg" },
  { product_id: 28, product_name: "Coconut Milk Powder (200g)", product_price: 140, category: "Cooking Essentials", image: "images/28-coconut-milk-powder.jpg" },
  { product_id: 29, product_name: "Instant Noodles (Pack of 6)", product_price: 75, category: "Snacks", image: "images/29-instant-noodles.jpg" },
  { product_id: 30, product_name: "Native Cheese (Kesong Puti, 250g)", product_price: 180, category: "Dairy & Eggs", image: "images/30-kesong-puti.jpg" },
  { product_id: 31, product_name: "Eggs (Dozen)", product_price: 90, category: "Dairy & Eggs", image: "images/31-eggs.jpg" },
  { product_id: 32, product_name: "Fresh Tilapia (1kg)", product_price: 160, category: "Seafood", image: "images/32-tilapia.jpg" },
  { product_id: 33, product_name: "Fresh Bangus (Milkfish, 1kg)", product_price: 180, category: "Seafood", image: "images/33-bangus.jpg" },
  { product_id: 34, product_name: "Fresh Chicken (1kg)", product_price: 200, category: "Meat & Frozen", image: "images/34-chicken.jpg" },
  { product_id: 35, product_name: "Fresh Pork (1kg)", product_price: 280, category: "Meat & Frozen", image: "images/35-pork.jpg" },
  { product_id: 36, product_name: "Fresh Beef (1kg)", product_price: 350, category: "Meat & Frozen", image: "images/36-beef.jpg" },
  { product_id: 37, product_name: "Native Vegetables Basket", product_price: 250, category: "Vegetables", image: "images/37-vegetables-basket.jpg" },
  { product_id: 38, product_name: "Bananas (1kg)", product_price: 60, category: "Fruits", image: "images/38-bananas.jpg" },
  { product_id: 39, product_name: "Mangoes (1kg)", product_price: 120, category: "Fruits", image: "images/39-mangoes.jpg" },
  { product_id: 40, product_name: "Papaya (1kg)", product_price: 70, category: "Fruits", image: "images/40-papaya.jpg" },
  { product_id: 41, product_name: "Pineapple (Whole)", product_price: 90, category: "Fruits", image: "images/41-pineapple.jpg" },
  { product_id: 42, product_name: "Coconut (Whole)", product_price: 50, category: "Fruits", image: "images/42-coconut-whole.jpg" },
  { product_id: 43, product_name: "Native Peanuts (250g)", product_price: 100, category: "Snacks", image: "images/43-native-peanuts.jpg" },
  { product_id: 44, product_name: "Camote (Sweet Potato, 1kg)", product_price: 80, category: "Vegetables", image: "images/44-camote.jpg" },
  { product_id: 45, product_name: "Ube Halaya (250g)", product_price: 180, category: "Sweets & Desserts", image: "images/45-ube-halaya.jpg" },
  { product_id: 46, product_name: "Leche Flan (Whole)", product_price: 250, category: "Sweets & Desserts", image: "images/46-leche-flan.jpg" },
  { product_id: 47, product_name: "Bibingka (Whole)", product_price: 200, category: "Bakery & Kakanin", image: "images/47-bibingka.jpg" },
  { product_id: 48, product_name: "Puto (Dozen)", product_price: 120, category: "Bakery & Kakanin", image: "images/48-puto.jpg" },
  { product_id: 49, product_name: "Kakanin Sampler Pack", product_price: 300, category: "Bakery & Kakanin", image: "images/49-kakanin-sampler.jpg" },
  { product_id: 50, product_name: "Native Chocolate Drink (Sikwate, 250ml)", product_price: 90, category: "Beverages", image: "images/50-sikwate.jpg" }
];

// --------------------------------------------------------------------------
// 2. LOCALSTORAGE KEYS & STATE MANAGEMENT VARIABLES
// --------------------------------------------------------------------------
const CART_STORAGE_KEY = "sariSariCart";
const TRANSACTIONS_STORAGE_KEY = "sariSariTransactions";

// In-memory array for active customer sale
let cart = [];

// In-memory array for completed transactions
let transactions = [];

// Selected category filter state
let selectedCategory = "All";

// --------------------------------------------------------------------------
// 3. PERSISTENCE HELPER FUNCTIONS
// --------------------------------------------------------------------------

function saveCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (error) {
        console.error("Error saving cart to localStorage:", error);
    }
}

function loadCart() {
    try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        cart = savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        cart = [];
    }
}

function saveTransactions() {
    try {
        localStorage.setItem(TRANSACTIONS_STORAGE_KEY, JSON.stringify(transactions));
    } catch (error) {
        console.error("Error saving transactions to localStorage:", error);
    }
}

function loadTransactions() {
    try {
        const savedTransactions = localStorage.getItem(TRANSACTIONS_STORAGE_KEY);
        transactions = savedTransactions ? JSON.parse(savedTransactions) : [];
    } catch (error) {
        console.error("Error loading transactions from localStorage:", error);
        transactions = [];
    }
}

// --------------------------------------------------------------------------
// 4. UTILITY & FORMATTING HELPER FUNCTIONS
// --------------------------------------------------------------------------

function formatPeso(amount) {
    return '₱' + Number(amount || 0).toLocaleString('en-PH', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function updateClock() {
    const dateTimeElement = document.getElementById('current-datetime');
    if (!dateTimeElement) return;
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    dateTimeElement.textContent = now.toLocaleString('en-PH', options);
}

function showCartError(message) {
    const errorBox = document.getElementById('cart-error-msg');
    if (!errorBox) return;
    errorBox.textContent = message;
    errorBox.classList.remove('hidden');
}

function hideCartError() {
    const errorBox = document.getElementById('cart-error-msg');
    if (!errorBox) return;
    errorBox.textContent = '';
    errorBox.classList.add('hidden');
}

// --------------------------------------------------------------------------
// 5. PRODUCT CATALOG & COMBINED SEARCH / CATEGORY FILTER FUNCTIONS
// --------------------------------------------------------------------------

function populateProductDropdown() {
    const dropdown = document.getElementById('product-select-dropdown');
    if (!dropdown) return;

    dropdown.innerHTML = '<option value="">-- Choose or Search Product --</option>';

    groceryItems.forEach(item => {
        const option = document.createElement('option');
        option.value = item.product_id;
        option.textContent = `#${item.product_id} - ${item.product_name} (${formatPeso(item.product_price)})`;
        dropdown.appendChild(option);
    });
}

function syncQuickFormElements(source) {
    const idInput = document.getElementById('quick-id-input');
    const dropdown = document.getElementById('product-select-dropdown');

    if (source === 'id') {
        const idVal = parseInt(idInput.value, 10);
        const item = groceryItems.find(p => p.product_id === idVal);
        if (item) {
            dropdown.value = item.product_id;
        } else {
            dropdown.value = '';
        }
    } else if (source === 'dropdown') {
        const selectedId = dropdown.value;
        if (selectedId) {
            idInput.value = selectedId;
        } else {
            idInput.value = '';
        }
    }
}

/**
 * Dynamically renders product tiles inside catalog grid with images and categories
 * Uses images/placeholder.svg ONLY when image fails to load via onerror
 * @param {Array} items 
 */
function renderProducts(items = groceryItems) {
    const productsGrid = document.getElementById('products-grid');
    const productCountBadge = document.getElementById('product-count');
    
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    if (productCountBadge) {
        productCountBadge.textContent = `${items.length} Products`;
    }

    if (items.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔎</div>
                <p>No products found matching your active search or category filter.</p>
            </div>
        `;
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img 
                    src="${product.image}" 
                    alt="${product.product_name}" 
                    class="product-img" 
                    onerror="this.onerror=null; this.src='images/placeholder.svg';"
                >
            </div>
            <div>
                <div class="product-meta-tags">
                    <span class="product-id-tag">ID: #${product.product_id}</span>
                    <span class="product-category-tag">${product.category}</span>
                </div>
                <h3 class="product-name" title="${product.product_name}">${product.product_name}</h3>
                <div class="product-price">${formatPeso(product.product_price)}</div>
            </div>
            <div class="product-actions">
                <input type="number" id="qty-input-${product.product_id}" class="qty-input-sm" value="1" min="1" max="99" aria-label="Quantity for ${product.product_name}">
                <button class="btn-add-cart" onclick="addItem(${product.product_id})">
                    <span>+ Add</span>
                </button>
            </div>
        `;
        productsGrid.appendChild(card);
    });
}

function searchProducts() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search-btn');
    const filterLabel = document.getElementById('active-filter-label');
    
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    if (clearBtn) {
        clearBtn.style.display = query.length > 0 ? 'block' : 'none';
    }

    if (filterLabel) {
        if (selectedCategory === "All") {
            filterLabel.textContent = query ? `Search: "${query}"` : "Showing All Categories";
        } else {
            filterLabel.textContent = query 
                ? `Category: ${selectedCategory} | Search: "${query}"`
                : `Category: ${selectedCategory}`;
        }
    }

    const filtered = groceryItems.filter(item => {
        const matchesCategory = (selectedCategory === "All" || item.category === selectedCategory);
        const matchesSearch = (query === '' || 
            item.product_name.toLowerCase().includes(query) || 
            item.product_id.toString() === query
        );
        return matchesCategory && matchesSearch;
    });

    renderProducts(filtered);
}

function selectCategory(categoryName) {
    selectedCategory = categoryName;

    const categorySelect = document.getElementById('category-filter-select');
    if (categorySelect) {
        categorySelect.value = categoryName;
    }

    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        if (pill.getAttribute('data-category') === categoryName) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    searchProducts();
}

// --------------------------------------------------------------------------
// 6. CART OPERATIONS (ADD, UPDATE, INCREASE, DECREASE, REMOVE)
// --------------------------------------------------------------------------

function addItem(optionalProductId, optionalQuantity) {
    hideCartError();

    let productId = optionalProductId;
    let quantity = optionalQuantity;

    if (!productId) {
        const idInput = document.getElementById('quick-id-input');
        productId = parseInt(idInput.value, 10);
    }

    if (!quantity) {
        const cardQtyInput = document.getElementById(`qty-input-${productId}`);
        if (cardQtyInput) {
            quantity = parseInt(cardQtyInput.value, 10);
        } else {
            const formQtyInput = document.getElementById('quick-qty-input');
            quantity = parseInt(formQtyInput.value, 10);
        }
    }

    if (isNaN(productId) || !productId) {
        showCartError("Please select a product or enter a valid Product ID.");
        return;
    }

    if (isNaN(quantity) || quantity < 1) {
        showCartError("Quantity must be at least 1.");
        return;
    }

    const product = groceryItems.find(item => item.product_id === productId);
    if (!product) {
        showCartError(`Product ID #${productId} does not exist.`);
        return;
    }

    const existingIndex = cart.findIndex(item => item.product_id === productId);

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
        cart[existingIndex].subtotal = cart[existingIndex].product_price * cart[existingIndex].quantity;
    } else {
        cart.push({
            product_id: product.product_id,
            product_name: product.product_name,
            product_price: product.product_price,
            category: product.category,
            image: product.image,
            quantity: quantity,
            subtotal: product.product_price * quantity
        });
    }

    const quickIdInput = document.getElementById('quick-id-input');
    const dropdown = document.getElementById('product-select-dropdown');
    const quickQtyInput = document.getElementById('quick-qty-input');
    
    if (quickIdInput) quickIdInput.value = '';
    if (dropdown) dropdown.value = '';
    if (quickQtyInput) quickQtyInput.value = 1;

    const cardQtyInput = document.getElementById(`qty-input-${productId}`);
    if (cardQtyInput) cardQtyInput.value = 1;

    saveCart();
    updateCart();
}

function increaseQuantity(productId) {
    hideCartError();
    const itemIndex = cart.findIndex(item => item.product_id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity += 1;
        cart[itemIndex].subtotal = cart[itemIndex].product_price * cart[itemIndex].quantity;
        saveCart();
        updateCart();
    }
}

function decreaseQuantity(productId) {
    hideCartError();
    const itemIndex = cart.findIndex(item => item.product_id === productId);
    if (itemIndex > -1) {
        const newQty = cart[itemIndex].quantity - 1;
        if (newQty <= 0) {
            removeItem(productId);
        } else {
            cart[itemIndex].quantity = newQty;
            cart[itemIndex].subtotal = cart[itemIndex].product_price * newQty;
            saveCart();
            updateCart();
        }
    }
}

function removeItem(productId) {
    hideCartError();
    cart = cart.filter(item => item.product_id !== productId);
    saveCart();
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    const subtotalElem = document.getElementById('cart-subtotal');
    const discountElem = document.getElementById('cart-discount');
    const discountNote = document.getElementById('discount-note');
    const totalElem = document.getElementById('cart-total');
    const changeElem = document.getElementById('cart-change');
    const amountPaidInput = document.getElementById('amount-paid-input');

    if (!cartItemsList) return;

    cartItemsList.innerHTML = '';

    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-msg">
                <p>🛒 Current Sale is empty.</p>
                <small>Select or search products to build customer purchase.</small>
            </div>
        `;
    } else {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.product_name}</span>
                    <span class="cart-item-subtext">${formatPeso(item.product_price)} each</span>
                </div>
                <div class="cart-qty-controls">
                    <button class="btn-qty" onclick="decreaseQuantity(${item.product_id})">-</button>
                    <span class="cart-qty-val">${item.quantity}</span>
                    <button class="btn-qty" onclick="increaseQuantity(${item.product_id})">+</button>
                </div>
                <div class="cart-item-total">
                    ${formatPeso(item.subtotal)}
                    <button class="btn-remove-item" onclick="removeItem(${item.product_id})" title="Remove item">&times;</button>
                </div>
            `;
            cartItemsList.appendChild(itemDiv);
        });
    }

    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = calculateTotal(subtotal, discount);

    subtotalElem.textContent = formatPeso(subtotal);
    discountElem.textContent = `-${formatPeso(discount)}`;
    totalElem.textContent = formatPeso(total);

    if (subtotal > 1000) {
        discountNote.textContent = "(10% Discount Applied!)";
        discountNote.style.color = "var(--primary-dark)";
        discountNote.style.fontWeight = "bold";
    } else {
        discountNote.textContent = "(10% if Subtotal > ₱1,000)";
        discountNote.style.color = "var(--text-secondary)";
        discountNote.style.fontWeight = "normal";
    }

    const amountPaidVal = parseFloat(amountPaidInput.value);
    if (!isNaN(amountPaidVal)) {
        const change = calculateChange(amountPaidVal, total);
        changeElem.textContent = formatPeso(change);
    } else {
        changeElem.textContent = formatPeso(0);
    }
}

// --------------------------------------------------------------------------
// 7. MATHEMATICAL CALCULATIONS
// --------------------------------------------------------------------------

function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + item.subtotal, 0);
}

function calculateDiscount(subtotal) {
    if (subtotal > 1000) {
        return subtotal * 0.10;
    }
    return 0;
}

function calculateTotal(subtotal, discount) {
    return Math.max(0, subtotal - discount);
}

function calculateChange(paymentReceived, total) {
    if (isNaN(paymentReceived) || paymentReceived < total) {
        return 0;
    }
    return paymentReceived - total;
}

// --------------------------------------------------------------------------
// 8. TRANSACTION ID GENERATION & CHECKOUT
// --------------------------------------------------------------------------

function generateTransactionId() {
    let maxIdNumber = 0;

    transactions.forEach(txn => {
        if (txn.transaction_id && txn.transaction_id.startsWith('TXN-')) {
            const numPart = parseInt(txn.transaction_id.replace('TXN-', ''), 10);
            if (!isNaN(numPart) && numPart > maxIdNumber) {
                maxIdNumber = numPart;
            }
        }
    });

    const nextNumber = Math.max(transactions.length, maxIdNumber) + 1;
    return `TXN-${String(nextNumber).padStart(4, '0')}`;
}

function completeSale() {
    hideCartError();

    if (cart.length === 0) {
        showCartError("Please add at least one product before checkout.");
        return;
    }

    const subtotal = calculateSubtotal();
    const discount = calculateDiscount(subtotal);
    const total = calculateTotal(subtotal, discount);

    const paymentInput = document.getElementById('amount-paid-input');
    const amountPaid = parseFloat(paymentInput.value);

    if (isNaN(amountPaid) || amountPaid < 0) {
        showCartError("Please enter a valid cash payment amount.");
        return;
    }

    if (amountPaid < total) {
        showCartError(`Insufficient payment. Total due is ${formatPeso(total)}.`);
        return;
    }

    const change = calculateChange(amountPaid, total);

    const txnId = generateTransactionId();
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

    const customerInput = document.getElementById('customer-name-input');
    const customerName = (customerInput && customerInput.value.trim() !== '') 
        ? customerInput.value.trim() 
        : 'Walk-in Customer';

    const cartSnapshot = cart.map(item => ({ ...item }));

    const transaction = {
        transaction_id: txnId,
        date: formattedDate,
        customer_name: customerName,
        items: cartSnapshot,
        subtotal: subtotal,
        discount: discount,
        total: total,
        amount_paid: amountPaid,
        change: change
    };

    transactions.push(transaction);
    saveTransactions();

    generateReceipt(transaction);

    cart = [];
    saveCart();
    paymentInput.value = '';
    if (customerInput) customerInput.value = '';
    updateCart();

    updateSalesReport();
    renderTransactionHistory();
}

// --------------------------------------------------------------------------
// 9. RECEIPT GENERATION & MODAL MANAGEMENT
// --------------------------------------------------------------------------

function generateReceipt(txn) {
    document.getElementById('receipt-txn-id').textContent = txn.transaction_id;
    document.getElementById('receipt-date').textContent = txn.date;
    document.getElementById('receipt-customer').textContent = txn.customer_name;

    const itemsContainer = document.getElementById('receipt-items-list');
    itemsContainer.innerHTML = '';

    txn.items.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'receipt-item-row';
        itemRow.innerHTML = `
            <span class="receipt-item-title">${item.product_name}</span>
            <span class="receipt-item-qty-price">${item.quantity} × ${formatPeso(item.product_price)} = ${formatPeso(item.subtotal)}</span>
        `;
        itemsContainer.appendChild(itemRow);
    });

    document.getElementById('receipt-subtotal').textContent = formatPeso(txn.subtotal);
    
    const discountLine = document.getElementById('receipt-discount-line');
    if (txn.discount > 0) {
        discountLine.style.display = 'flex';
        document.getElementById('receipt-discount').textContent = `-${formatPeso(txn.discount)}`;
    } else {
        discountLine.style.display = 'none';
    }

    document.getElementById('receipt-total').textContent = formatPeso(txn.total);
    document.getElementById('receipt-paid').textContent = formatPeso(txn.amount_paid);
    document.getElementById('receipt-change').textContent = formatPeso(txn.change);

    const modal = document.getElementById('receipt-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function printReceipt() {
    window.print();
}

function closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }
}

// --------------------------------------------------------------------------
// 10. SALES REPORTING & ANALYTICS
// --------------------------------------------------------------------------

function getMostPurchasedProduct() {
    if (transactions.length === 0) {
        return { name: "None yet", totalQty: 0 };
    }

    const productSalesMap = {};

    transactions.forEach(txn => {
        txn.items.forEach(item => {
            if (!productSalesMap[item.product_id]) {
                productSalesMap[item.product_id] = {
                    name: item.product_name,
                    totalQty: 0
                };
            }
            productSalesMap[item.product_id].totalQty += item.quantity;
        });
    });

    let topProduct = { name: "None yet", totalQty: 0 };

    for (const id in productSalesMap) {
        if (productSalesMap[id].totalQty > topProduct.totalQty) {
            topProduct = productSalesMap[id];
        }
    }

    return topProduct;
}

function getTopCategory() {
    if (transactions.length === 0) {
        return { category: "None yet", sales: 0 };
    }

    const categorySalesMap = {};

    transactions.forEach(txn => {
        txn.items.forEach(item => {
            const cat = item.category || "Uncategorized";
            if (!categorySalesMap[cat]) {
                categorySalesMap[cat] = 0;
            }
            categorySalesMap[cat] += item.subtotal;
        });
    });

    let topCat = { category: "None yet", sales: 0 };

    for (const catName in categorySalesMap) {
        if (categorySalesMap[catName] > topCat.sales) {
            topCat = { category: catName, sales: categorySalesMap[catName] };
        }
    }

    return topCat;
}

function updateSalesReport() {
    const totalTxnsElem = document.getElementById('stat-total-transactions');
    const totalSalesElem = document.getElementById('stat-total-sales');
    const topProductElem = document.getElementById('stat-top-product');
    const topProductQtyElem = document.getElementById('stat-top-product-qty');
    const topCategoryElem = document.getElementById('stat-top-category');
    const topCategorySalesElem = document.getElementById('stat-top-category-sales');

    const totalTxns = transactions.length;
    if (totalTxnsElem) totalTxnsElem.textContent = totalTxns;

    const grandTotalSales = transactions.reduce((sum, txn) => sum + txn.total, 0);
    if (totalSalesElem) totalSalesElem.textContent = formatPeso(grandTotalSales);

    const topProduct = getMostPurchasedProduct();
    if (topProductElem) topProductElem.textContent = topProduct.name;
    if (topProductQtyElem) {
        topProductQtyElem.textContent = topProduct.totalQty === 1 
            ? '1 unit sold' 
            : `${topProduct.totalQty} units sold`;
    }

    const topCategory = getTopCategory();
    if (topCategoryElem) topCategoryElem.textContent = topCategory.category;
    if (topCategorySalesElem) topCategorySalesElem.textContent = `${formatPeso(topCategory.sales)} sales`;
}

// --------------------------------------------------------------------------
// 11. TRANSACTION HISTORY LOG TABLE
// --------------------------------------------------------------------------

function renderTransactionHistory() {
    const historyBody = document.getElementById('transaction-history-body');
    const historyCountBadge = document.getElementById('history-count');
    
    if (!historyBody) return;
    historyBody.innerHTML = '';

    if (historyCountBadge) {
        historyCountBadge.textContent = `${transactions.length} Records`;
    }

    if (transactions.length === 0) {
        historyBody.innerHTML = `
            <tr class="empty-table-row">
                <td colspan="10" class="text-center text-muted">No saved transactions found in browser memory.</td>
            </tr>
        `;
        return;
    }

    const reversedTransactions = [...transactions].reverse();

    reversedTransactions.forEach(txn => {
        const row = document.createElement('tr');
        
        const itemsListHtml = txn.items.map(item => {
            const catBadge = item.category ? `<small class="text-muted"> (${item.category})</small>` : '';
            return `<li><strong>${item.product_name}</strong>${catBadge} &times; ${item.quantity} (${formatPeso(item.subtotal)})</li>`;
        }).join('');

        row.innerHTML = `
            <td class="txn-id-cell">${txn.transaction_id}</td>
            <td><small>${txn.date}</small></td>
            <td>${txn.customer_name}</td>
            <td><ul class="items-summary-list">${itemsListHtml}</ul></td>
            <td>${formatPeso(txn.subtotal)}</td>
            <td><span class="${txn.discount > 0 ? 'text-success' : ''}">-${formatPeso(txn.discount)}</span></td>
            <td><strong>${formatPeso(txn.total)}</strong></td>
            <td>${formatPeso(txn.amount_paid)}</td>
            <td>${formatPeso(txn.change)}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="viewHistoricalReceipt('${txn.transaction_id}')">
                    🔍 View Receipt
                </button>
            </td>
        `;
        historyBody.appendChild(row);
    });
}

function viewHistoricalReceipt(txnId) {
    const txn = transactions.find(t => t.transaction_id === txnId);
    if (txn) {
        generateReceipt(txn);
    }
}

// --------------------------------------------------------------------------
// 12. TWO DISTINCT CLEAR FUNCTIONS
// --------------------------------------------------------------------------

function clearCurrentSale() {
    if (cart.length > 0) {
        const confirmClear = confirm("Are you sure you want to clear the current sale?");
        if (!confirmClear) return;
    }
    
    hideCartError();
    cart = [];
    saveCart();
    
    const amountPaidInput = document.getElementById('amount-paid-input');
    if (amountPaidInput) amountPaidInput.value = '';
    
    const customerInput = document.getElementById('customer-name-input');
    if (customerInput) customerInput.value = '';

    updateCart();
}

function clearAllRecords() {
    if (transactions.length === 0) {
        alert("There are no saved transaction records to clear.");
        return;
    }

    const confirmClear = confirm(
        "WARNING: This will permanently delete all saved transaction records from this browser. Are you sure you want to continue?"
    );

    if (!confirmClear) return;

    transactions = [];
    localStorage.removeItem(TRANSACTIONS_STORAGE_KEY);

    renderTransactionHistory();
    updateSalesReport();
}

// --------------------------------------------------------------------------
// 13. INITIALIZATION & EVENT LISTENERS
// --------------------------------------------------------------------------

function initializeApp() {
    loadCart();
    loadTransactions();

    populateProductDropdown();
    renderProducts(groceryItems);

    updateCart();
    renderTransactionHistory();
    updateSalesReport();

    updateClock();
    setInterval(updateClock, 1000);

    const quickIdInput = document.getElementById('quick-id-input');
    const productDropdown = document.getElementById('product-select-dropdown');
    const addItemBtn = document.getElementById('add-item-btn');

    if (quickIdInput) {
        quickIdInput.addEventListener('input', () => syncQuickFormElements('id'));
    }

    if (productDropdown) {
        productDropdown.addEventListener('change', () => syncQuickFormElements('dropdown'));
    }

    if (addItemBtn) {
        addItemBtn.addEventListener('click', () => addItem());
    }

    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const categorySelect = document.getElementById('category-filter-select');

    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchProducts();
            searchInput.focus();
        });
    }

    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            selectCategory(e.target.value);
        });
    }

    const categoryPillsBar = document.getElementById('category-pills-bar');
    if (categoryPillsBar) {
        categoryPillsBar.addEventListener('click', (e) => {
            if (e.target.classList.contains('pill-btn')) {
                const cat = e.target.getAttribute('data-category');
                selectCategory(cat);
            }
        });
    }

    const amountPaidInput = document.getElementById('amount-paid-input');
    if (amountPaidInput) {
        amountPaidInput.addEventListener('input', () => {
            hideCartError();
            updateCart();
        });
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', completeSale);
    }

    const clearSaleBtn = document.getElementById('clear-sale-btn');
    if (clearSaleBtn) {
        clearSaleBtn.addEventListener('click', clearCurrentSale);
    }

    const clearRecordsBtn = document.getElementById('clear-records-btn');
    if (clearRecordsBtn) {
        clearRecordsBtn.addEventListener('click', clearAllRecords);
    }

    const printReceiptBtn = document.getElementById('print-receipt-btn');
    if (printReceiptBtn) {
        printReceiptBtn.addEventListener('click', printReceipt);
    }

    const closeReceiptBtn = document.getElementById('close-receipt-btn');
    if (closeReceiptBtn) {
        closeReceiptBtn.addEventListener('click', closeReceiptModal);
    }

    const closeModalX = document.getElementById('close-modal-x');
    if (closeModalX) {
        closeModalX.addEventListener('click', closeReceiptModal);
    }

    const receiptModal = document.getElementById('receipt-modal');
    if (receiptModal) {
        receiptModal.addEventListener('click', (e) => {
            if (e.target === receiptModal) {
                closeReceiptModal();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeApp);
