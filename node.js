const crypto = require('crypto');

// Generate a random string of 64 characters (adjust length as needed)
const randomString = crypto.randomBytes(32).toString('hex');

console.log(randomString);
