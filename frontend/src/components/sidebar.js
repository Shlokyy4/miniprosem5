import React from 'react';
import '../styles/Sidebar.css';
import { FaUser, FaBox, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <FaUser className="icon" />
        <span>My Profile</span>
      </div>
      <div className="sidebar-item">
        <FaBox className="icon" />
        <span>Orders</span>
      </div>
      <div className="sidebar-item">
        <FaHeart className="icon" />
        <span>Wishlist</span>
      </div>
      <div className="sidebar-item">
        <FaShoppingCart className="icon" />
        <span>Kart</span>
      </div>
    </div>
  );
};

export default Sidebar;
