import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import "../styles/footer.css"; // You can define your styles here

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Follow Us</h3>
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
