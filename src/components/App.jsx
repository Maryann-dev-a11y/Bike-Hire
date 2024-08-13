import React from 'react';
import Home from "./Home"
import NavBar from './NavBar';
import BikesPage from './BikesPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentOptions from './Payment';

function App() {
  return (
    <Router>
    <div className='App'>
      <NavBar />
      <Routes>
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

