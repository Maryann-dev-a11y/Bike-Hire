import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import NavBar from './NavBar';
import BikesPage from './BikesPage';
import PaymentOptions from './Payment';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    if (storedLogin === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', false);
  };

  return (
    <Router>
      <div className='App'>
        <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bikes" element={<BikesPage />} />
          <Route path="/payments" element={<PaymentOptions />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
