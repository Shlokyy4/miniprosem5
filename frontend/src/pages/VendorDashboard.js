import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/vendorDashboard.css";

const VendorDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="vendor-name">Vendor Name</div>
                <ul className="sidebar-links">
                    <li onClick={() => navigate('/dashboard/products')}>Products</li>
                    <li onClick={() => navigate('/dashboard/orders')}>Orders</li>
                    <li onClick={() => navigate('/dashboard/sales')}>Sales Analytics</li>
                    <li onClick={() => navigate('/dashboard/account')}>Account Settings</li>
                </ul>
            </aside>
            
            <main className="main-content">
                {/* This section will change based on selected sidebar link */}
                <section>
                    <h2>Welcome, Vendor!</h2>
                    <p>Here you can manage your products, track orders, and view sales performance.</p>
                </section>
            </main>
        </div>
    );
}

export default VendorDashboard;
