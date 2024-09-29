import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar';
import LogoutButton from '../components/LogoutButton';
import "../styles/dashboard.css";
import ProductCard from '../components/ProductCard';
import Navbar from '../components/navbar';

const CustomerDashboard = ({ onLogout }) => {
    const [products, setProducts] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleAddToCart = (product) => {
        console.log("Product added to cart:", product);
        // Handle cart logic here
    };
    return (
        <div className="dashboard-container">
           
            <Sidebar />
           
            <div className="dashboard-content">
                <LogoutButton onLogout={onLogout} />
                <div className="main-content">
                    <h1>Available Products</h1>
                    <div className="product-grid">
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAddToCart={handleAddToCart}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;



// import React, { useState, useEffect } from 'react';
// import Sidebar from '../components/sidebar';
// import LogoutButton from '../components/LogoutButton';
// import ProductCard from '../components/ProductCard';
// import "../styles/dashboard.css";

// const CustomerDashboard = ({ onLogout }) => {
//     const [products, setProducts] = useState([]);

//     // Fetch products from backend
//     useEffect(() => {
//         fetch('http://localhost:8080/api/products')
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error("Error fetching products:", error));
//     }, []);

//     const handleAddToCart = (product) => {
//         console.log("Product added to cart:", product);
//         // Handle cart logic here
//     };

//     return (
//         <div className="dashboard-container">
//             <Sidebar />
//             <div className="dashboard-content">
//                 <LogoutButton onLogout={onLogout} />
//                 <div className="main-content">
//                     <h1>Available Products</h1>
//                     <div className="product-grid">
//                         {products.map(product => (
//                             <ProductCard
//                                 key={product.id}
//                                 product={product}
//                                 onAddToCart={handleAddToCart}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomerDashboard;
