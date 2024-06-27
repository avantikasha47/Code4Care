import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending login request:', { email, password });

      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const responseData = await response.json();
      console.log('Received response:', responseData);

      if (!response.ok) {
        console.error('Login failed with status:', response.status, response.statusText);
        setError(responseData.error || 'Login failed. Please check your credentials.');
      } else {
        // Assuming login is successful, you can handle storing tokens or session here
        navigate('/'); // Redirect to dashboard or any other protected route
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
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
      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/register">Register here</Link>.</p>
    </form>
  </div>
  );
};

export default Login;
