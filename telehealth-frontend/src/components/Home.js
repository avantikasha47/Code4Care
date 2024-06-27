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
        <p>
          Telehealth Services is a revolutionary platform designed to connect patients with top-rated doctors from the comfort of their homes. Our mission is to provide accessible, affordable, and high-quality healthcare services to everyone, regardless of their location. With Telehealth Services, you can easily schedule consultations, chat with specialists, and even have video calls for more personalized care.
        </p>
        <p>
          Our platform ensures that you receive the best medical advice and care from licensed professionals without the need to travel or wait in long queues. Experience the future of healthcare with Telehealth Services and take control of your health today.
        </p>
      </section>

      <section className="section">
        <h2 className="title">Top Rated Doctors</h2>
        <ul className="star-list">
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
    </div>
  );
};

export default Home;