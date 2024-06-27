const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes
const User = require('./models/user');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/telehealth', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Telehealth API');
});

app.use('/api', authRoutes); // Use auth routes

// Listen on port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
