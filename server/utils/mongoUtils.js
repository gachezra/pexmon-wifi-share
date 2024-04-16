const { MongoClient } = require('mongodb');

class MongoUtils {
  constructor() {
    this.mongoClient = new MongoClient(process.env.MONGODB_URI);
  }

  async getWifiAccessCode(transactionId) {
    await this.mongoClient.connect();
    const db = this.mongoClient.db('your-database-name');
    const wifiAccessCodes = db.collection('wifi_access_codes');

    // Fetch a pre-generated WiFi access code from the database
    const wifiAccessCode = await wifiAccessCodes.findOne({ used: false });

    // Mark the access code as used
    await wifiAccessCodes.updateOne({ _id: wifiAccessCode._id }, { $set: { used: true, transactionId } });

    await this.mongoClient.close();
    return wifiAccessCode.code;
  }
}

module.exports = new MongoUtils();