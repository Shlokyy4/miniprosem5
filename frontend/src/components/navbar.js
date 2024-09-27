import React from 'react';
import logo from '../Assets/image.png';
import "../styles/navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="EcoMart Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About Us</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
