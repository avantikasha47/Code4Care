const express = require('express');
const router = express.Router();
const User = require('../models/user');
const generateToken = require('../utils/generateToken'); // Import generateToken function // Import User model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
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
  console.log('JWT_SECRET:', process.env.JWT_SECRET);

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    // Send token as response
    res.status(200).json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
});
module.exports = router;