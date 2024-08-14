import React, { useState, useEffect } from 'react';


const Navbar = () => {
  // Switching Navbar from light to dark mode and vice versa
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // checking local Storage for dark mode
    const storedMode = localStorage.getItem('darkMode');
    if (storedMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  // Switching between light and dark mode and saving it in local storage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-logo">
        <a href="/">Two-tired Rentals</a>
        <p>For whenever you're wheely-tired</p>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/bikes">Available Bikes</a></li>
        <li><a href="/#contact">Bike specs</a></li>
        <li><a href="#about">About Us</a></li>
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