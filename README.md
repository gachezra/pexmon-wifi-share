# WhatsApp Chatbot with MPesa Payment Integration

This project is a WhatsApp chatbot that allows users to view available WiFi tariffs, initiate MPesa payments, and receive a unique WiFi access code upon successful payment.

## Features

1. **Tariff Display**: Users can interact with the chatbot and view the available WiFi tariff options.
2. **Payment Initiation**: Users can select a tariff, and the chatbot will initiate an MPesa payment for the corresponding amount.
3. **Payment Confirmation**: Upon successful payment, the user will receive a unique WiFi access code. In case of payment failure, the user will be notified.
4. **Access Code Management**: The Heroku node server is responsible for managing the WiFi access codes, ensuring that each code is used only once.

## Directory Structure

The project is divided into two main components:

1. **Chatbot**: The chatbot directory contains the client-side logic for the WhatsApp chatbot, including the message handlers, controllers, and services.
2. **Heroku Server**: The Heroku server directory contains the server-side logic for handling the payment process and managing the WiFi access codes.
3. **Shared**: The shared directory contains utility modules that are used by both the chatbot and the Heroku server.

## Prerequisites

1. [Node.js](https://nodejs.org/) installed on your system.
2. A [Safaricom M-Pesa Developer Account](https://developer.safaricom.co.ke/) to access the MPesa API.
3. A CSV file containing the available WiFi access codes.

## Installation and Setup

1. Clone the repository:
   ```
   git clone https://github.com/gachezra/pexmon-wifi-share.git
   ```
2. Navigate to the project directory:
   ```
   cd pexmon-wifi-share
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MPESA_CONSUMER_KEY=your-mpesa-consumer-key
   MPESA_CONSUMER_SECRET=your-mpesa-consumer-secret
   MPESA_SHORTCODE=your-mpesa-shortcode
   MPESA_PASSKEY=your-mpesa-passkey
   CSV_FILE_PATH=path/to/your/wifi-access-codes.csv
   ```
5. Start the Heroku server:
   ```
   cd heroku-server
   npm start
   ```
6. Start the chatbot:
   ```
   cd ../chatbot
   npm start
   ```

## Usage

1. Send the "wifi" message to the WhatsApp chatbot.
2. The chatbot will display the available WiFi tariffs.
3. Select a tariff by sending the corresponding number.
4. The chatbot will initiate the MPesa payment process.
5. Upon successful payment, the user will receive a unique WiFi access code.
6. In case of payment failure, the user will be notified.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
