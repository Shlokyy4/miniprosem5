import React from 'react';
import Sidebar from '../components/sidebar';
import LogoutButton from '../components/LogoutButton';
import "../styles/dashboard.css";

const customerDashboard = ({ onLogout }) => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <LogoutButton onLogout={onLogout} />
                <div className="main-content">
                    {/* This will be replaced by routing or actual content */}
                    <h1>Welcome to your Dashboard!</h1>
                </div>
            </div>
        </div>
    );
};

export default customerDashboard;
