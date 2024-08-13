import React, { useState } from 'react';


const paymentMethods = [
  { id: 1, name: 'Visa', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCh4Tcadq-f-WvsH7rXSGZgPKMZ826bo0Ew&s' },
  { id: 2, name: 'MasterCard', image: 'mastercard.png' },
  { id: 3, name: 'PayPal', image: 'paypal.png' },
  { id: 4, name: 'Google Pay', image: 'google-pay.png' }
];

const PaymentOptions = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${duration} hours at ${location} using ${selectedMethod}.`);
  };

  return (
    <div className="payment-options">
      <h2>Select Your Payment Method</h2>
      
      <div className="booking-details">
        <label>
          Duration (in hours):
          <input 
            type="number" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            placeholder="Enter duration"
          />
        </label>

        <label>
          Location:
          <input 
            type="text" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            placeholder="Enter location"
          />
        </label>
      </div>

      <div className="payment-grid">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`payment-card ${selectedMethod === method.name ? 'selected' : ''}`}
            onClick={() => handleSelect(method.name)}
          >
            <img src={method.image} alt={method.name} className="payment-image" />
            <p>{method.name}</p>
          </div>
        ))}
      </div>

      {selectedMethod && (
        <div className="payment-summary">
          <h3>Enter Payment Details</h3>
          {selectedMethod !== 'PayPal' && selectedMethod !== 'Google Pay' && (
            <>
              <label>
                Card Number:
                <input 
                  type="text" 
                  name="cardNumber" 
                  value={cardDetails.cardNumber} 
                  onChange={handleInputChange} 
                  placeholder="1234 5678 9012 3456"
                />
              </label>

              <label>
                Expiration Date:
                <input 
                  type="text" 
                  name="expirationDate" 
                  value={cardDetails.expirationDate} 
                  onChange={handleInputChange} 
                  placeholder="MM/YY"
                />
              </label>

              <label>
                CVV:
                <input 
                  type="text" 
                  name="cvv" 
                  value={cardDetails.cvv} 
                  onChange={handleInputChange} 
                  placeholder="123"
                />
              </label>
            </>
          )}
          <button className="button" onClick={handleBooking}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
