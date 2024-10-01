import React, { useState } from 'react';
import "../styles/productCard.css"; // Add styles
import Modal from '../components/Modal'; // Import the Modal component

const ProductCard = ({ product, onAddToCart }) => {
    const { name, price, imageUrl, seller, description } = product;

    // State to control modal visibility
    const [showModal, setShowModal] = useState(false);

    const handleViewDetails = () => {
        setShowModal(true);  // Open the modal
    };

    const handleCloseModal = () => {
        setShowModal(false);  // Close the modal
    };

    return (
        <div className="product-card">
            <img src={imageUrl} alt={name} className="product-image" />
            <div className="product-details">
                <h3>{name}</h3>
                <p className="seller">Sold by: {seller}</p>
                <p className="description">{description}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
            <div className="product-buttons">
                <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
                <button className="view-details-btn" onClick={handleViewDetails}>
                    See Details
                </button>
            </div>

            {/* Modal to show product details */}
            {showModal && (
                <Modal onClose={handleCloseModal}>
                    <div className="modal-content">
                        <img src={imageUrl} alt={name} className="modal-product-image" />
                        <h3>{name}</h3>
                        <p className="seller">Sold by: {seller}</p>
                        <p className="description">{description}</p>
                        <p className="price">Price: ${price.toFixed(2)}</p>
                        <button className="close-modal-btn" onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ProductCard;
