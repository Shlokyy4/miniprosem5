import React from 'react';
import Navbar from '../components/navbar';
import '../styles/about.css'; // Import the CSS file
import logo from '../Assets/image.png'; // Example image for eco-friendly theme

const AboutUs = () => {
    return (
        <>
        <Navbar />
        <div className="aboutus-container">
            <h1>About Us</h1>
            <p>
                Welcome to EcoMart, your ultimate destination for eco-friendly products. 
                We are committed to providing a platform that promotes sustainability, 
                encourages responsible consumer choices, and supports environmentally conscious brands.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our mission is to make eco-friendly living accessible to everyone. 
                We believe that small changes can make a big difference, and we aim to inspire 
                consumers to choose products that are kind to the planet.
            </p>
            <img src={logo} alt="Eco-Friendly Products" className="aboutus-image" />
            <h2>Why Choose Us?</h2>
            <ul>
                <li>Wide selection of sustainable products</li>
                <li>Support for local and eco-conscious vendors</li>
                <li>Commitment to environmental education</li>
                <li>Transparency in sourcing and production</li>
            </ul>
        </div>
        </>
    );
}

export default AboutUs;
