import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BikeList from './components/BikeList';
import BikeDetail from './components/BikeDetail';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BikeList />} />
        <Route path="/bike/:id" element={<BikeDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;

