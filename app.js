const express = require('express');
const path = require('path');
const apiRoutes = require('./src/api/routes/apiRoutes');
const webRoutes = require('./src/web/routes/webRoutes');
const errorHandler = require('./src/middleware/errorHandler');

const { Client, LocalAuth } = require('whatsapp-web.js');
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






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
