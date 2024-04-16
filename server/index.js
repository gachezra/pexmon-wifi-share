const express = require('express');
const paymentController = require('./controllers/paymentController');

const app = express();
app.use(express.json());

app.post('/initiatePayment', async (req, res) => {
  const { phoneNumber, amount } = req.body;
  const paymentResult = await paymentController.initiatePayment(phoneNumber, amount);
  res.json(paymentResult);
});

app.post('/getWifiAccessCode', async (req, res) => {
  const { transactionId } = req.body;
  try {
    const wifiAccessCode = await paymentController.getWifiAccessCode(transactionId);
    res.json({ wifiAccessCode });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});