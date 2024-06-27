import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending registration request:', { name, email, password });

      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      const responseData = await response.json();
      console.log('Received response:', responseData);

      if (!response.ok) {
        console.error('Registration failed with status:', response.status, response.statusText);
        setError(responseData.error || 'Registration failed. Please try again.');
      } else {
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Register</button>
      <p>Already have an account? <Link to="/login">Login here</Link>.</p>
    </form>
  </div>
  );
};

export default Register;
