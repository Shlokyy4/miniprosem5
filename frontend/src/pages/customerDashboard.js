// src/pages/CustomerDashboard.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from '../components/sidebar';
import LogoutButton from '../components/LogoutButton';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component
import "../styles/dashboard.css";

const CustomerDashboard = ({ onLogout }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    // Fetch products from backend
    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleAddToCart = (product) => {
        console.log("Product added to cart:", product);
        // Handle cart logic here
    };

    // Filtered products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <LogoutButton onLogout={onLogout} />
                <div className="main-content">
                    <h1>Available Products</h1>
                    
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;



