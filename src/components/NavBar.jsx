import React, { useState, useEffect } from 'react';


const Navbar = () => {
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
        <a href="#home">Bike Rental</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/bikes">Available Bikes</a></li>
        <li><a href="#contact">Contact Us</a></li>
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
