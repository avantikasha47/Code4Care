// utils/generateToken.js
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const secretKey = process.env.SECRET_KEY || 'default_secret_key';

const token = jwt.sign(
    {
      userId: user._id,
      email: user.email,
    },
    secretKey,
    { expiresIn: '1h' }
  );

  return token;
};

module.exports = generateToken;
