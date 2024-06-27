import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handlePayment = async () => {
        try {
            const paymentResult = await requestPaymentToken(amount);
            // Handle payment success and update UI accordingly
            console.log('Payment successful:', paymentResult);
            navigate('/success'); // Redirect to success page upon successful payment
        } catch (error) {
            console.error('Payment error:', error);
            // Handle payment failure
            navigate('/error'); // Redirect to error page upon payment failure
        }
    };

    const requestPaymentToken = async (amount) => {
        const tokenRequestUrl = 'https://connect.squareup.com/v2/locations/YOUR_SQUARE_LOCATION_ID/checkouts';
        const body = {
            amount_money: {
                amount: amount * 100, // Convert amount to cents
                currency: 'USD', // Change to your currency code if different
            },
            location_id: '	LEAXPJ4EGTP8S', // Replace with your actual Square location ID
            idempotency_key: `${Date.now()}`,
        };

        const headers = {
            'Content-Type': 'application/json',
            Authorization: `EAAAl-UkgpoOp7yYZ6loid4s_xmjuMrt2cCFfpw5-HKbUeYWZAKPnxhtVqPMzNb-`, // Replace with your actual Square access token
        };

        const response = await fetch(tokenRequestUrl, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error('Payment request failed');
        }

        const responseData = await response.json();
        return responseData;
    };

    return (
        <div className="payment-container">
            <h2>Make Payment</h2>
            <form onSubmit={handlePayment}>
                <label>
                    Amount:
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Pay</button>
            </form>
        </div>
    );
};

export default PaymentPage;
