// Get DOM elements
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.getElementById('cart-count');
const subtotalElement = document.getElementById('subtotal');
const gstElement = document.getElementById('gst');
const totalElement = document.getElementById('total');
const checkoutButton = document.getElementById('checkout-btn');
const emptyCartMessage = document.getElementById('empty-cart');
const cartContent = document.querySelector('.cart-content');

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Calculate totals
function calculateTotals() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const gst = subtotal * 0.05;
    const deliveryCharge = 30;
    const total = subtotal + gst + deliveryCharge;

    subtotalElement.textContent = `₹${subtotal}`;
    gstElement.textContent = `₹${gst.toFixed(2)}`;
    totalElement.textContent = `₹${total.toFixed(2)}`;
}

// Display cart items
function displayCartItems() {
    if (cart.length === 0) {
        cartContent.style.display = 'none';
        emptyCartMessage.style.display = 'block';
        return;
    }

    cartContent.style.display = 'grid';
    emptyCartMessage.style.display = 'none';
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
                <p class="price">₹${item.price}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners to quantity buttons
    document.querySelectorAll('.quantity-btn.minus').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });

    document.querySelectorAll('.quantity-btn.plus').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });

    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });

    calculateTotals();
}

// Increase item quantity
function increaseQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
        showNotification(`Added one more ${item.name}`, 'success');
    }
}

// Decrease item quantity
function decreaseQuantity(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = cart.find(item => item.id === itemId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCartItems();
            showNotification(`Removed one ${item.name}`, 'info');
        } else {
            removeItem(e);
        }
    }
}

// Remove item from cart
function removeItem(e) {
    const itemId = parseInt(e.target.closest('.remove-item').dataset.id);
    const item = cart.find(item => item.id === itemId);
    if (item) {
        cart = cart.filter(cartItem => cartItem.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        displayCartItems();
        showNotification(`${item.name} removed from cart`, 'error');
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add notification styles
const style = document.createElement('style');
style.textContent = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #2c3e50;
        color: white;
        padding: 1rem;
        border-radius: 5px;
        animation: slideIn 0.5s ease-out;
        z-index: 1000;
    }
    
    .notification.success {
        background-color: #2ecc71;
    }
    
    .notification.error {
        background-color: #e74c3c;
    }
    
    .notification.info {
        background-color: #3498db;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);

// Handle checkout
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    // Redirect to payment page
    window.location.href = 'payment.html';
});

// Initialize cart display
updateCartCount();
displayCartItems();

// Online status functionality
function updateOnlineStatus() {
    const onlineStatus = document.querySelector('.online-status');
    const isOnline = navigator.onLine;
    
    if (isOnline) {
        onlineStatus.setAttribute('data-status', 'online');
        onlineStatus.setAttribute('title', 'Online - Ready to Order');
    } else {
        onlineStatus.setAttribute('data-status', 'offline');
        onlineStatus.setAttribute('title', 'Offline - Check your connection');
    }
}

// Listen for online/offline events
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initialize online status
updateOnlineStatus(); 