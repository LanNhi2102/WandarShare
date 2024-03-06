import React, { useState, useEffect } from 'react';

function Payment() {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [sandboxResponse, setSandboxResponse] = useState(null);
  const [sandboxError, setSandboxError] = useState(null);

  useEffect(() => {
    if (selectedMethod) {
      simulatePayment(selectedMethod);
    }
  }, [selectedMethod]);

  const simulatePayment = async (method) => {
    try {
      const response = await fetch('https://sandbox.paymentprocessor.com/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ method }),
      });
      
      if (!response.ok) {
        throw new Error('Payment failed');
      }
      
      const data = await response.json();
      setSandboxResponse(data);
      setSandboxError(null);
    } catch (error) {
      setSandboxResponse(null);
      setSandboxError(error.message);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedMethod(event.target.value);
  };

  return (
    <div>
      <h2>Select Payment Method</h2>
      <select value={selectedMethod} onChange={handleSelectChange}>
        <option value="">-- Select Payment Method --</option>
        <option value="credit_card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="bank_transfer">Bank Transfer</option>
      </select>
      {sandboxResponse && (
        <p>Payment successful! Transaction ID: {sandboxResponse.transactionId}</p>
      )}
      
    </div>
  );
}

export default Payment;
