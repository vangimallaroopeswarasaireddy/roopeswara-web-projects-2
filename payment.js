// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartCount = document.getElementById('cart-count');

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Initialize cart count
updateCartCount();

// Update order summary
function updateOrderSummary() {
    const summaryItems = document.getElementById('summary-items');
    const subtotalElement = document.getElementById('subtotal');
    const gstElement = document.getElementById('gst');
    const totalElement = document.getElementById('total');
    
    // Clear existing items
    summaryItems.innerHTML = '';
    
    // Calculate totals
    let subtotal = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        const itemElement = document.createElement('div');
        itemElement.className = 'summary-item';
        itemElement.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${itemTotal}</span>
        `;
        summaryItems.appendChild(itemElement);
    });
    
    // Calculate GST and total
    const deliveryCharge = 30;
    const gst = subtotal * 0.05;
    const total = subtotal + deliveryCharge + gst;
    
    // Update totals
    subtotalElement.textContent = `₹${subtotal}`;
    gstElement.textContent = `₹${gst.toFixed(2)}`;
    totalElement.textContent = `₹${total.toFixed(2)}`;
}

// Initialize order summary
updateOrderSummary();

// Handle payment method selection
const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
const cardDetails = document.getElementById('card-details');
const upiDetails = document.getElementById('upi-details');

paymentMethods.forEach(method => {
    method.addEventListener('change', function() {
        if (this.value === 'card') {
            cardDetails.style.display = 'block';
            upiDetails.style.display = 'none';
        } else if (this.value === 'upi') {
            cardDetails.style.display = 'none';
            upiDetails.style.display = 'block';
        } else {
            cardDetails.style.display = 'none';
            upiDetails.style.display = 'none';
        }
    });
});

// Handle form submission
const paymentForm = document.getElementById('payment-form');

paymentForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate form
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    if (selectedPaymentMethod === 'card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiry = document.getElementById('expiry').value;
        const cvv = document.getElementById('cvv').value;
        
        if (!cardNumber || !expiry || !cvv) {
            showNotification('Please fill in all card details', 'error');
            return;
        }
    } else if (selectedPaymentMethod === 'upi') {
        const upiId = document.getElementById('upi-id').value;
        
        if (!upiId) {
            showNotification('Please enter your UPI ID', 'error');
            return;
        }
    }
    
    // Process payment (simulated)
    showNotification('Processing payment...', 'info');
    
    setTimeout(() => {
        // Clear cart
        localStorage.removeItem('cart');
        cart = [];
        updateCartCount();
        
        // Show success message
        showNotification('Payment successful! Your order is being processed.', 'success');
        
        // Redirect to home page after 3 seconds
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }, 2000);
});

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