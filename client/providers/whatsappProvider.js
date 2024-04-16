const express = require('express');
const wifiController = require('../controllers/wifiController');
const paymentController = require('../controllers/paymentController');

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  // Handle incoming webhook from WhatsApp
  // Process user messages and send responses
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Chatbot server is running on port 3000');
});