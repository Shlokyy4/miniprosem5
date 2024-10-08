import React,  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import "../styles/vendorDashboard.css";
import LogoutButton from '../components/LogoutButton';

const VendorDashboard = ({ onLogout }) => {
    
    const [loggedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])
    return (
        <div className="dashboard-container">
             
            <aside className="sidebar">
                <div className="vendor-name">{loggedInUser}</div>
                <ul className="sidebar-links">
                    <li onClick={() => navigate('/dashboard/products')}>Add Products</li>
                    <li onClick={() => navigate('/dashboard/orders')}>Orders</li>
                    <li onClick={() => navigate('/dashboard/sales')}>Sales Analytics</li>
                    <li onClick={() => navigate('/dashboard/account')}>Account Settings</li>
                </ul>
            </aside>
            <LogoutButton onLogout={onLogout} />
            
            <main className="main-content">
                {/* This section will change based on selected sidebar link */}
                <section>
                    <h2>Welcome, Vendor!</h2>
                    <p>Here you can manage your products, track orders, and view sales performance.</p>
                </section>
            </main>
            <ToastContainer/>
        </div>
    );
}

export default VendorDashboard;
