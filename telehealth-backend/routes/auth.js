const express = require('express');
const router = express.Router();
const User = require('../models/user');
const generateToken = require('../utils/generateToken'); // Import generateToken function // Import User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Received registration request:', { name, email, password }); // Log received data

  // Validate input
  if (!name || !email || !password) {
    console.error('Validation error: All fields are required');
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.error('Validation error: Email already in use');
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Create new user
    const newUser = new User({ name, email, password });
    await newUser.save();
    console.log('User registered successfully:', newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Received login request:', { email, password });
    try {
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        console.error('Validation error: User not found');
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
     // Validate password
    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      console.error('Validation error: Invalid password');
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = generateToken(user); // Example function to generate token
    res.status(200).json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});
module.exports = router;
