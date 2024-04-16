const axios = require('axios');

class PaymentService {
  async initiatePayment(phoneNumber, amount) {
    try {
      const response = await axios.post(`${process.env.PAYMENT_SERVER_URL}/initiatePayment`, {
        phoneNumber,
        amount
      });
      return response.data;
    } catch (error) {
      return { status: 'failure', error: error.message };
    }
  }

  async getWifiAccessCode(transactionId) {
    try {
      const response = await axios.post(`${process.env.PAYMENT_SERVER_URL}/getWifiAccessCode`, {
        transactionId
      });
      return response.data.wifiAccessCode;
    } catch (error) {
      throw new Error(`Failed to retrieve WiFi access code: ${error.message}`);
    }
  }
}

module.exports = new PaymentService();