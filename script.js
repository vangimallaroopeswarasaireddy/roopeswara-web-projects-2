// Menu items data
const menuItems = [
    // Coffee Drinks
    { id: 1, name: 'Espresso', description: 'Rich and bold', price: 120, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04' },
    { id: 2, name: 'Cappuccino', description: 'Creamy and smooth', price: 150, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d' },
    { id: 3, name: 'Latte', description: 'Mild and milky', price: 160, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
    { id: 4, name: 'Cold Brew', description: 'Refreshing and smooth', price: 180, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c' },
    { id: 5, name: 'Americano', description: 'Strong and bold', price: 140, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c' },
    { id: 6, name: 'Mocha', description: 'Chocolate and coffee blend', price: 170, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e' },
    { id: 7, name: 'Caramel Macchiato', description: 'Sweet caramel delight', price: 190, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2' },
    { id: 8, name: 'Vanilla Latte', description: 'Smooth vanilla flavor', price: 180, category: 'Coffee Drinks', image: 'https://www.acouplecooks.com/wp-content/uploads/2021/11/Vanilla-Latte-001.jpg' },
    { id: 9, name: 'Hazelnut Coffee', description: 'Rich nutty flavor', price: 175, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d' },
    { id: 10, name: 'Irish Coffee', description: 'Coffee with whiskey cream', price: 220, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1560750133-c5d4ef4de911' },
    
    // Tea Selection
    { id: 11, name: 'Green Tea', description: 'Refreshing and healthy', price: 100, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721' },
    { id: 12, name: 'Black Tea', description: 'Strong and aromatic', price: 90, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574' },
    { id: 13, name: 'Chai Latte', description: 'Spiced and creamy', price: 130, category: 'Tea Selection', image: 'https://cooktoria.com/wp-content/uploads/2018/10/Strarbucks-Chai-Tea-Latte-Recipe-SQ-1.jpg' },
    { id: 14, name: 'Earl Grey', description: 'Bergamot flavored', price: 110, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12' },
    { id: 15, name: 'Chamomile Tea', description: 'Calming herbal tea', price: 95, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814' },
    { id: 16, name: 'Jasmine Tea', description: 'Floral and aromatic', price: 105, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5' },
    { id: 17, name: 'Peppermint Tea', description: 'Refreshing mint flavor', price: 95, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814' },
    { id: 18, name: 'Masala Chai', description: 'Traditional Indian spiced tea', price: 120, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8' },
    
    // Cold Beverages
    { id: 19, name: 'Iced Coffee', description: 'Chilled and refreshing', price: 150, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e' },
    { id: 20, name: 'Iced Tea', description: 'Cool and refreshing', price: 120, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc' },
    { id: 21, name: 'Frappuccino', description: 'Blended coffee delight', price: 200, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699' },
    { id: 22, name: 'Mango Smoothie', description: 'Fresh mango blend', price: 160, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625' },
    { id: 23, name: 'Berry Blast', description: 'Mixed berry smoothie', price: 170, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888' },
    { id: 24, name: 'Mint Lemonade', description: 'Refreshing citrus drink', price: 130, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc' },
    { id: 25, name: 'Cold Chocolate', description: 'Chilled chocolate milk', price: 140, category: 'Cold Beverages', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699' },
    
    // Pastries
    { id: 26, name: 'Croissant', description: 'Buttery and flaky', price: 80, category: 'Pastries', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a' },
    { id: 27, name: 'Danish', description: 'Sweet and fruity', price: 90, category: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812' },
    { id: 28, name: 'Chocolate Muffin', description: 'Rich chocolate flavor', price: 85, category: 'Pastries', image: 'https://images.unsplash.com/photo-1604882406195-d94d4888567d' },
    { id: 29, name: 'Blueberry Muffin', description: 'Fresh blueberry delight', price: 85, category: 'Pastries', image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce' },
    { id: 30, name: 'Cinnamon Roll', description: 'Sweet and spicy', price: 95, category: 'Pastries', image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812' },
    { id: 31, name: 'Apple Pie', description: 'Classic apple dessert', price: 100, category: 'Pastries', image: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2' },
    { id: 32, name: 'Chocolate Chip Cookie', description: 'Fresh baked cookies', price: 60, category: 'Pastries', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e' },
    { id: 33, name: 'Brownie', description: 'Rich chocolate brownie', price: 70, category: 'Pastries', image: 'https://tse3.mm.bing.net/th?id=OIP.DTP9kDbHuj4PziMyDV0-BAHaHa&pid=Api&P=0&h=180' },
    
    // Sandwiches
    { id: 34, name: 'Chicken Sandwich', description: 'Fresh and filling', price: 180, category: 'Sandwiches', image: 'https://tse2.mm.bing.net/th?id=OIP.DscAewwgWWspyrICC4vRBgHaHa&pid=Api&P=0&h=180' },
    { id: 35, name: 'Veg Sandwich', description: 'Healthy and tasty', price: 150, category: 'Sandwiches', image: 'https://tse3.mm.bing.net/th?id=OIP.Wy8FDZ2heuhUp7aqWEs3mgHaHa&pid=Api&P=0&h=180' },
    { id: 36, name: 'Club Sandwich', description: 'Triple-decker delight', price: 200, category: 'Sandwiches', image: 'https://tse3.mm.bing.net/th?id=OIP.Cw-C6Ygc4csQ1tWgWB0yfwHaHa&pid=Api&P=0&h=180' },
    { id: 37, name: 'Grilled Cheese', description: 'Classic comfort food', price: 140, category: 'Sandwiches', image: 'https://tse3.mm.bing.net/th?id=OIP.BvSpM9v7vSU5jM2L6_dxqAHaFj&pid=Api&P=0&h=180' },
    { id: 38, name: 'Tuna Sandwich', description: 'Fresh tuna mix', price: 170, category: 'Sandwiches', image: 'https://tse1.mm.bing.net/th?id=OIP.bA_9CYoUEpsVLlaZUJMvQwHaE8&pid=Api&P=0&h=180' },
    { id: 39, name: 'BLT', description: 'Bacon, lettuce & tomato', price: 160, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 40, name: 'Egg & Cheese', description: 'Breakfast classic', price: 130, category: 'Sandwiches', image: 'https://tse4.mm.bing.net/th?id=OIP.Kq5ofmgkEp5pe2gF18i1zQAAAA&pid=Api&P=0&h=180' }
];

// Get DOM elements
const menuGrid = document.querySelector('.menu-grid');
const cartCount = document.getElementById('cart-count');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Initialize cart count
updateCartCount();

// Display menu items
function displayMenuItems(items = menuItems) {
    menuGrid.innerHTML = '';
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">₹${item.price}</p>
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Filter menu items by category
function filterItems(category) {
    const filteredItems = category === 'All Items' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    displayMenuItems(filteredItems);
}

// Add item to cart
function addToCart(e) {
    const itemId = parseInt(e.target.dataset.id);
    const item = menuItems.find(item => item.id === itemId);
    
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    // Update localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show notification
    showNotification(`${item.name} added to cart!`, 'success');
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

// Add event listeners for category buttons
const categoryButtons = document.querySelectorAll('.menu-section button');
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Filter items
        filterItems(button.textContent.trim());
    });
});

// Initialize menu display
displayMenuItems();

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

// Check login state and update UI
function updateLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginNav = document.getElementById('login-nav');
    const logoutNav = document.getElementById('logout-nav');
    
    if (isLoggedIn) {
        loginNav.style.display = 'none';
        logoutNav.style.display = 'block';
    } else {
        loginNav.style.display = 'block';
        logoutNav.style.display = 'none';
    }
}

// Handle logout
function handleLogout() {
    // Clear user session
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    localStorage.removeItem('userPicture');
    
    // Show notification
    showNotification('Logged out successfully', 'success');
    
    // Update UI
    updateLoginState();
}

// Add event listener for logout button
document.addEventListener('DOMContentLoaded', function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // Initialize login state
    updateLoginState();
}); 