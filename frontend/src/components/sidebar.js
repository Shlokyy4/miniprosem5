import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/dashboard.css"; // Import your styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <ul className="sidebar-links">
                <li><Link to="/profile">My Profile</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
