const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#home">Bike Rental</a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/bikes">Available Bikes</a></li>
          <li><a href="# Rent now">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;