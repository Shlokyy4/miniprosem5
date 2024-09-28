import React, { useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function RefrshHandler({ setIsAuthenticated }) {
    const location = useLocation();
    const navigate = useNavigate();

    // Memoize the navigate function
    const handleNavigation = useCallback(() => {
        if (localStorage.getItem('token')) {
            setIsAuthenticated(true);

            if (['/', '/login', '/signup'].includes(location.pathname)) {
                navigate('/', { replace: false });
            }
        }
    }, [location.pathname, navigate, setIsAuthenticated]);

    useEffect(() => {
        handleNavigation();
    }, [handleNavigation]);

    return null;
}

export default RefrshHandler;
