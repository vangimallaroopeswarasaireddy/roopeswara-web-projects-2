// Menu items data with unique images
const menuItems = [
    // Coffee Drinks
    { id: 1, name: 'Espresso', description: 'Rich and bold', price: 120, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04' },
    { id: 2, name: 'Cappuccino', description: 'Creamy and smooth', price: 150, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d' },
    { id: 3, name: 'Latte', description: 'Mild and milky', price: 160, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
    { id: 4, name: 'Cold Brew', description: 'Refreshing and smooth', price: 180, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c' },
    { id: 5, name: 'Americano', description: 'Strong and bold', price: 140, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c' },
    { id: 6, name: 'Mocha', description: 'Chocolate and coffee blend', price: 170, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e' },
    { id: 7, name: 'Caramel Macchiato', description: 'Sweet caramel delight', price: 190, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2' },
    { id: 8, name: 'Vanilla Latte', description: 'Smooth vanilla flavor', price: 180, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1592318951566-70f6f0ac22dd' },
    { id: 9, name: 'Hazelnut Coffee', description: 'Rich nutty flavor', price: 175, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1587080413959-06b859fb107d' },
    { id: 10, name: 'Irish Coffee', description: 'Coffee with whiskey cream', price: 220, category: 'Coffee Drinks', image: 'https://images.unsplash.com/photo-1560750133-c5d4ef4de911' },
    
    // Tea Selection
    { id: 11, name: 'Green Tea', description: 'Refreshing and healthy', price: 100, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1556881286-fc6915169721' },
    { id: 12, name: 'Black Tea', description: 'Strong and aromatic', price: 90, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574' },
    { id: 13, name: 'Chai Latte', description: 'Spiced and creamy', price: 130, category: 'Tea Selection', image: 'https://images.unsplash.com/photo-1557706424-0c7577c8b7d6' },
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
    { id: 33, name: 'Brownie', description: 'Rich chocolate brownie', price: 70, category: 'Pastries', image: 'https://images.unsplash.com/photo-1611497438246-a1f79e5a890c' },
    
    // Sandwiches
    { id: 34, name: 'Chicken Sandwich', description: 'Fresh and filling', price: 180, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 35, name: 'Veg Sandwich', description: 'Healthy and tasty', price: 150, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 36, name: 'Club Sandwich', description: 'Triple-decker delight', price: 200, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 37, name: 'Grilled Cheese', description: 'Classic comfort food', price: 140, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 38, name: 'Tuna Sandwich', description: 'Fresh tuna mix', price: 170, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 39, name: 'BLT', description: 'Bacon, lettuce & tomato', price: 160, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' },
    { id: 40, name: 'Egg & Cheese', description: 'Breakfast classic', price: 130, category: 'Sandwiches', image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847' }
]; 