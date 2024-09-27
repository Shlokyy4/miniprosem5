import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import "../styles/signup.css"; // Adjust the path if necessary
import Navbar from "../components/navbar";

function VendorSignup() {
    const [vendorInfo, setVendorInfo] = useState({
        businessName: '',
        businessType: '',
        address: '',
        contactNumber: '',
        email: '',
        password: '',
        // 
        
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        const copyVendorInfo = { ...vendorInfo };
        copyVendorInfo[name] = value;
        setVendorInfo(copyVendorInfo);
    };

    // const handleFileChange = (e) => {
    //     setVendorInfo((prevData) => ({
    //         ...prevData,
    //         profilePhoto: e.target.files[0],
    //     }));
    // };

    const handleVendorSignup = async (e) => {
        e.preventDefault();
        const { businessName, businessType, address, contactNumber, email, password } = vendorInfo;
        if (!businessName || !businessType || !address || !contactNumber || !email || !password) {
            return handleError('All fields are required');
        }

        try {
            // const formData = new FormData();
            // Object.keys(vendorInfo).forEach((key) => {
            //     formData.append(key, vendorInfo[key]);
            // });

            const url = `http://localhost:8080/venauth/signup`;
            const response = await fetch(url, {
                method: "POST",
                // body: formData,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vendorInfo)
            });

            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else {
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
                <h1>Vendor Signup</h1>
                <form onSubmit={handleVendorSignup}>
                    <div>
                        <label htmlFor='businessName'>Business Name</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='businessName'
                            placeholder='Enter your business name...'
                            value={vendorInfo.businessName}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='businessType'>Business Type</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='businessType'
                            placeholder='Enter your business type...'
                            value={vendorInfo.businessType}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Address</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='address'
                            placeholder='Enter your address...'
                            value={vendorInfo.address}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='contactNumber'>Contact Number</label>
                        <input
                            onChange={handleChange}
                            type='text'
                            name='contactNumber'
                            placeholder='Enter your contact number...'
                            value={vendorInfo.contactNumber}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={handleChange}
                            type='email'
                            name='email'
                            placeholder='Enter your email...'
                            value={vendorInfo.email}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={handleChange}
                            type='password'
                            name='password'
                            placeholder='Enter your password...'
                            value={vendorInfo.password}
                            required
                        />
                    </div>
                    {/* <div>
                        <label htmlFor='profilePhoto'>Profile Photo</label>
                        <input
                            type='file'
                            name='profilePhoto'
                            onChange={handleFileChange}
                            required
                        />
                    </div> */}
                    <button type='submit'>Register</button>
                    <span>Already have an account ?
                    <Link to="/vendorlogin">Login</Link>
                </span>
                    
                </form>
                <ToastContainer />
            </div>
        </>
    );
}

export default VendorSignup;
