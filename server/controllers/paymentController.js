const paymentService = require('../services/paymentService');
const wifiService = require('../services/wifiService');

class PaymentController {
  async initiatePayment(phoneNumber, amount) {
    // Use the Safaricom MPesa library to initiate the payment
    const paymentResult = await paymentService.initiatePayment(phoneNumber, amount);
    return paymentResult;
  }

  async getWifiAccessCode(transactionId) {
    // Fetch the pre-generated WiFi access code from the MongoDB database
    const wifiAccessCode = await wifiService.getWifiAccessCode(transactionId);
    return wifiAccessCode;
  }
}

module.exports = new PaymentController();