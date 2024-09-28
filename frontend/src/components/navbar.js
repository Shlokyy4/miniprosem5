import React from 'react';
import logo from '../Assets/image.png';
import "../styles/navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate=useNavigate()

    const handleClick = (e) => {
        navigate("/");
    }
    
    return (
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="EcoMart Logo"  onClick={handleClick}/>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/AboutUs">About Us</a></li>
                
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
