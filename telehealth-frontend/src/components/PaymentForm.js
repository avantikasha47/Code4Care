import React, { useEffect } from 'react';
import { payments } from '@square/web-sdk';
import './PaymentForm.css';

const PaymentForm = () => {
  useEffect(() => {
    async function initializePayment() {
      const paymentsInstance = await payments('sandbox-sq0idb-QhvMfSZRuZHooXa7Z-72fw', 'L386CSZ0WYX4V');

      const card = await paymentsInstance.card();
      await card.attach('#card-container');

      document.getElementById('payment-button').addEventListener('click', async () => {
        const result = await card.tokenize();
        if (result.status === 'OK') {
          const response = await fetch('http://localhost:3000/api/pay', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nonce: result.token, amount: 10 }), // replace with your amount
          });

          const responseData = await response.json();
          console.log(responseData);
        } else {
          console.error('Failed to tokenize card:', result.errors);
        }
      });
    }

    initializePayment();
  }, []);

  return (
    <div className="payment-container">
      <h1 className="payment-title">Payment</h1>
      <p className="payment-description">Enter your payment details below.</p>
      <div id="card-container"></div>
      <button id="payment-button" className="payment-button">Pay</button>
    </div>
  );
};

export default PaymentForm;