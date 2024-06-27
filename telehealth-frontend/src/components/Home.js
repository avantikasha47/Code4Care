import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="section">
        <h1 className="title">Welcome to Telehealth Services</h1>
        <p>Providing remote medical consultations with ease.</p>
      </section>

      <section className="section">
        <h2 className="title">About This App</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra sem non nisi volutpat, ut volutpat metus maximus.</p>
      </section>

      <section className="section">
        <h2 className="title">Top Rated Doctors</h2>
        <ul>
          <li>Dr. John Doe - Cardiology</li>
          <li>Dr. Jane Smith - Pediatrics</li>
          <li>Dr. Michael Brown - Psychiatry</li>
        </ul>
      </section>

      <section className="section">
        <Link to="/doctor" className="start-chat-btn">
          Start Chat
        </Link>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Telehealth Services. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
