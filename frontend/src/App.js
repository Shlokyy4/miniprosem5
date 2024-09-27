import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Prehome from './pages/Prehome';
import About from './pages/About';

import { useState, useEffect } from 'react';
import RefrshHandler from './RefrshHandler';
import VendorSignup from './pages/VendorSignup';
import Vendorlogin from './pages/Vendorlogin';
import VendorDashboard from './pages/VendorDashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
    // Check if a token is stored in localStorage, and update isAuthenticated state accordingly
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/vendorlogin" />;  // Redirect to vendor login
  };

  return (
    <div className="App">
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* Login routes */}
        <Route path='/' element={<Prehome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/vendorsignup' element={<VendorSignup />} />
        <Route path='/vendorlogin' element={<Vendorlogin setIsAuthenticated={setIsAuthenticated} />} />  {/* Pass down setIsAuthenticated */}
        <Route path='/AboutUs' element={<About />} />
        <Route path='*' element={<Prehome />} />

        {/* Protected routes */}
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        <Route path='/vendordashboard' element={<PrivateRoute element={<VendorDashboard/>} />} />
      </Routes>
    </div>
  );
}

export default App;
