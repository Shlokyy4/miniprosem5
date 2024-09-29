import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Vendorlogin({ setIsAuthenticated }) {  // Pass setIsAuthenticated as a prop

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyLoginInfo = { ...loginInfo };
        copyLoginInfo[name] = value;
        setLoginInfo(copyLoginInfo);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required');
        }
        try {
            const url = `http://localhost:8080/venauth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setIsAuthenticated(true);  // Wait for state update before navigating
                setTimeout(() => {
                    navigate('/vendordashboard');  // Delay the navigation to allow state update
                }, 500);  // Short delay to ensure smooth navigation
            } else if (error) {
                handleError(error.details[0].message);
            } else if (!success) {
                handleError(message);
            }
        } catch (err) {
            handleError(err);
        }
    };
    

    return (
        <>
            <Navbar />
            <div className='container'>
                <h4 align="center">Take your Business online with Ecomart</h4>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={loginInfo.email}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={loginInfo.password}
                        />
                    </div>
                    <button type='submit'>Login</button>

                    <span>Doesn't have an account? 
                        <Link to="/vendorsignup">Signup</Link>
                    </span>
                </form>
                <ToastContainer />
            </div>
        </>
    );
}

export default Vendorlogin;
