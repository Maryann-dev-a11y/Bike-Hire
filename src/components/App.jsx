import React from 'react';
import Home from "./Home"
import NavBar from './NavBar';
import BikesPage from './BikesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentOptions from './Payment';

function App() {
  return (
    // Handling routing and navigation through the page 
    <Router>
    <div className='App'>
      <NavBar />
      <Routes>
        {/* specifying path and element to render when the path matches the URL */}
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/bikes" element={<BikesPage />} />
      </Routes>
      <Routes>
        <Route path="/payments" element={<PaymentOptions />} />
      </Routes>
    </div>
    </Router>
  )
   
}

export default App;
