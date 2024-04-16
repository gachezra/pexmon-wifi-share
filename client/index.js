const WhatsappProvider = require('./providers/whatsappProvider');

const whatsappConfig = {
  sessionId: 'your-session-id',
  useChrome: true,
  headless: true,
  authStrategy: {
    type: 'md-auth',
    options: {
      apiKey: 'your-whatsapp-api-key',
      apiSecret: 'your-whatsapp-api-secret',
      webhookUrl: 'your-whatsapp-webhook-url'
    }
  }
};

const whatsappProvider = new WhatsappProvider(whatsappConfig);