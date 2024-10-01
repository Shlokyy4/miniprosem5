const express = require('express');
const router = express.Router();

// Mock product data (you can connect this to a MongoDB database)
const products = [
    {
        id: 1,
        name: 'Eco-Friendly Bag',
        price: 25.99,
        imageUrl: '/images/bag.png',
        seller: 'EcoMart Enterprises',
        description: 'A reusable eco-friendly bag made from recycled materials.'
    },
    {
        id: 2,
        name: 'Reusable Water Bottle',
        price: 15.50,
        imageUrl: '/images/water-bottle.jpg',
        seller: 'GreenLife Products',
        description: 'A stainless steel, reusable water bottle that keeps drinks cold for 24 hours.'
    },
    {
        id: 3,
        name: 'Bamboo Toothbrush',
        price: 4.99,
        imageUrl: '/images/toothbrush.jpg',
        seller: 'EcoShop',
        description: 'An eco-friendly bamboo toothbrush with soft bristles for sensitive teeth.'
    },
    {
        id: 4,
        name: 'Organic Cotton T-Shirt',
        price: 19.99,
        imageUrl: '/images/tshirt.jpg',
        seller: 'NatureWear',
        description: 'A 100% organic cotton T-shirt that is soft and breathable for all-day comfort.'
    },
    {
        id: 5,
        name: 'Biodegradable Phone Case',
        price: 12.99,
        imageUrl: '/images/phone-case.jpg',
        seller: 'Green Gadgets',
        description: 'A durable, biodegradable phone case made from plant-based materials.'
    },
    {
        id: 6,
        name: 'Solar Powered Charger',
        price: 39.99,
        imageUrl: '/images/solar-charger.jpg',
        seller: 'EcoTech',
        description: 'A portable solar-powered charger for your devices, perfect for outdoor adventures.'
    },
    {
        id: 7,
        name: 'Recycled Paper Notebook',
        price: 8.50,
        imageUrl: '/images/notebook.jpg',
        seller: 'EcoStationery',
        description: 'A notebook made from 100% recycled paper with a minimalist design.'
    },
    {
        id: 8,
        name: 'Compostable Coffee Cups',
        price: 10.99,
        imageUrl: '/images/coffee-cup.jpg',
        seller: 'Earthy Essentials',
        description: 'Set of 50 compostable coffee cups made from plant-based materials.'
    }
];


// Get all products
router.get('/products', (req, res) => {
    res.json(products);
});

module.exports = router;
