import React from 'react';
import "../styles/modal.css"; // Add styles for modal

const Modal = ({ children, onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
