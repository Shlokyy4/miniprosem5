import React from 'react';
import "../styles/dashboard.css";
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

const LogoutButton = ({ onLogout }) => {
    const navigate = useNavigate();
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/');
        }, 1000)
    }
    return (
        <>
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
        <ToastContainer/>
        </>
    );
};

export default LogoutButton;
