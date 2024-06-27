require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Import auth routes
const User = require('./models/user'); 
const app = express();
const port = process.env.PORT || 3000;
const { Client, Environment, ApiError } = require('square');

// Middleware
app.use(cors());
app.use(bodyParser.json());

const squareClient = new Client({
  environment: Environment.Sandbox, // or Environment.Production
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

app.post('/api/pay', async (req, res) => {
  const { nonce, amount } = req.body;

  const paymentsApi = squareClient.paymentsApi;

  try {
    const response = await paymentsApi.createPayment({
      sourceId: nonce,
      amountMoney: {
        amount: amount * 100, // amount in cents
        currency: 'USD',
      },
      idempotencyKey: new Date().getTime().toString(), // unique key for each transaction
    });
    res.status(200).json(response.result);
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(error.errors);
      res.status(500).json(error.errors);
    } else {
      console.error(error);
      res.status(500).json({ error: 'Payment processing failed' });
    }
  }
});
// MongoDB connection
mongoose.connect('mongodb://localhost:27017/telehealth', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
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