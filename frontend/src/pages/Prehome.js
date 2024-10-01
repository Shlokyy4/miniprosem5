import { useNavigate } from "react-router-dom";
import Headers from "../components/header";
import '../styles/prehome.css';
import '../styles/header.css'; // Import the CSS file
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ve from '../Assets/ven1.jpg'
import cu from '../Assets/cus.jpg';

function Prehome() {
    const navigate = useNavigate();  // Hook to navigate programmatically

    // Function to navigate to vendor page
    const vendorpage = () => {
        navigate('/vendorsignup');
    }

    // Function to navigate to buyer page
    const buyerpage = () => {
        navigate('/signup');
    }

    return (
        <>
            <div className="prehome-container">
                <Navbar />
                <Headers />

                <div className="prehome-content">
                    <div className="card">
                        <img src={ve} alt="Seller " className="card-image" /> {/* Image for Seller card */}
                        <h2>Join Us as a Seller</h2>
                        <p>Empower your business by selling sustainable products to conscious buyers.</p>
                        <button onClick={vendorpage}>Become a Seller</button>
                    </div>

                    <div className="card">
                        <img src={cu} alt="Eco-Friendly " className="card-image" /> {/* Image for Eco-Friendly card */}
                        <h2>Shop Eco-Friendly</h2>
                        <p>Discover a wide range of products that are kind to you and the planet.</p>
                        <button onClick={buyerpage}>Shop Now</button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Prehome;
