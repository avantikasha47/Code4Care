import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const ulStyle = {
    listStyleType: 'none',
    padding: 0,
    display: 'flex'
  };

  const liStyle = {
    marginRight: '1rem'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease'
  };

  const linkHoverStyle = {
    color: '#ffeb3b'
  };

  const brandStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  };

  return (
    <nav style={navStyle}>
      <div style={brandStyle}>Telehealth Services</div>
      <ul style={ulStyle}>
        <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={liStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
        <li style={liStyle}><Link to="/register" style={linkStyle}>Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
