const mongoUtils = require('../utils/mongoUtils');

class WifiService {
  async getWifiTariffs() {
    // Fetch available WiFi tariffs from the MongoDB database
    return [
      { name: 'WiFi Lite', price: '100 KES' },
      { name: 'WiFi Standard', price: '200 KES' },
      { name: 'WiFi Premium', price: '500 KES' }
    ];
  }

  async getWifiAccessCode(transactionId) {
    // Fetch a pre-generated WiFi access code from the MongoDB database
    return await mongoUtils.getWifiAccessCode(transactionId);
  }
}

module.exports = new WifiService();