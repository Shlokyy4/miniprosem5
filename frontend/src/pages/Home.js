import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import LogoutButton from '../components/LogoutButton';
import customerDashbord from "./customerDashboard"

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'))
    }, [])

    // const handleLogout = (e) => {
    //     localStorage.removeItem('token');
    //     localStorage.removeItem('loggedInUser');
    //     handleSuccess('User Loggedout');
    //     setTimeout(() => {
    //         navigate('/');
    //     }, 1000)
    // }



    const fetchProducts = async () => {
        try {
            const url = "https://localhost:8080/auth/products";
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            }
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            <LogoutButton/>
            {/* <div>
                {
                    products && products?.map((item, index) => (
                        <ul key={index}>
                            <span>{item.name} : {item.price}</span>
                        </ul>
                    ))
                }
            </div> */}
            <customerDashbord/>


            <ToastContainer />
        </div>
    )
}

export default Home
