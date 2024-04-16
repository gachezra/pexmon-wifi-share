const paymentController = require('./paymentController');

class WifiController {
  async displayWifiTariffs(phoneNumber) {
    const wifiTariffs = await wifiService.getWifiTariffs();
    let response = 'Available WiFi Tariffs:\n\n';
    wifiTariffs.forEach((tariff, index) => {
      response += `${index + 1}. ${tariff.name} - ${tariff.price}\n`;
    });
    response += '\nPlease select a tariff by sending the corresponding number.';
    await whatsappProvider.sendMessage(phoneNumber, response);

    const selectedTariffIndex = await whatsappProvider.waitForUserInput(phoneNumber);
    const selectedTariff = wifiTariffs[selectedTariffIndex - 1];

    await paymentController.initiatePayment(phoneNumber, selectedTariff.price);
  }
}

module.exports = new WifiController();