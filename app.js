const express = require('express');
const path = require('path');
const apiRoutes = require('./src/api/routes/apiRoutes');
const webRoutes = require('./src/web/routes/webRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const { Client, LocalAuth,MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');


const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));

app.use('/api', apiRoutes);
app.use('/', webRoutes);

app.use(errorHandler);


// Initialize WhatsApp client
const client = new Client({
  authStrategy: new LocalAuth({
    dataPath:'./src/storage/auth'
  })

});

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.initialize();

// API endpoints
app.post('/send-message', async (req, res) => {
  const { number, messageType, message } = req.body;

  try {
    const chatId = number.includes('@c.us') ? number : `${number}@c.us`;

    if (messageType === 'text') {
      await client.sendMessage(chatId, message);
    } else if (messageType === 'media') {
      const media = await MessageMedia.fromUrl(message); // Use MessageMedia.fromUrl for URLs
      await client.sendMessage(chatId, media);
    } else {
      throw new Error('Unsupported message type');
    }

    res.status(200).json({ status: 'success', message: 'Message sent' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
