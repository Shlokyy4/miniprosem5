import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Prehome from './pages/Prehome';
import About from './pages/About'

import { useState, useEffect } from 'react';
import RefrshHandler from './RefrshHandler';
import VendorSignup from './pages/VendorSignup';
import Vendorlogin from './pages/Vendorlogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('App component mounted');
  }, []);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }

  return (
    <div className="App">
      
      <RefrshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>

        {/* login routes */}
        <Route path='/' element={<Prehome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/vendorsignup' element={<VendorSignup/>}/>
        <Route path='/vendorlogin' element={<Vendorlogin/>}/>
        <Route path='/vendorlogin' element={<Vendorlogin/>}/>
        <Route path='/AboutUs' element={<About/>}/>
       
        <Route path='*' element={<Prehome/>}/>

        {/* protected routes */}
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
      </Routes>
    </div>
  );
}

export default App;