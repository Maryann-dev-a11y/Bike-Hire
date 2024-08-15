import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [darkMode, setDarkMode] = useState(false);
  

  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-logo">
        <Link to="/">Two-tired Rentals</Link>
        <p>For whenever you're wheely-tired</p>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bikes">Available Bikes</Link></li>
        {isLoggedIn ? (
          <li>
            <button onClick={handleLogout} className="button-link">Logout</button>
          </li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
      <div className="mode-toggle">
        <button onClick={toggleDarkMode} className="button">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
