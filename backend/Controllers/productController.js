const express = require('express');
const router = express.Router();

// Mock product data (you can connect this to a MongoDB database)
const products = [
    { id: 1, name: 'Eco-Friendly Bag', price: 25.99, imageUrl: '/images/bag.png' },
    { id: 2, name: 'Reusable Water Bottle', price: 15.50, imageUrl: '/images/bottle.webp' },
    { id: 3, name: 'Bamboo Toothbrush', price: 4.99, imageUrl: '/images/toothbrush.png' }
];


// Get all products
router.get('/products', (req, res) => {
    res.json(products);
});

module.exports = router;
