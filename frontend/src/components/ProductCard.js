import React from 'react';
import "../styles/productCard.css"; // Add styles

const ProductCard = ({ product, onAddToCart }) => {
    const { name, price, imageUrl } = product;

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h3>{name}</h3>
                <p>${price.toFixed(2)}</p>
            </div>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
