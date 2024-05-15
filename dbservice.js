const { Double, Admin } = require('mongodb');
const mongoose = require('mongoose');
const { Schema } = mongoose;
// URL для подключения к вашей базе данных MongoDB
const uri = 'mongodb+srv://admin:12345@jettracker.xvsim3k.mongodb.net/Hakaton';

// Подключаемся к серверу MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Обработка события успешного подключения
db.once('open', () => {
  console.log('Подключено к MongoDB с помощью Mongoose');

  // Ваш код работы с базой данных MongoDB здесь

});

// Обработка события ошибки подключения
db.on('error', (error) => {
  console.error('Ошибка подключения к MongoDB:', error);
});





// Подключаемся к серверу MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });




// Обработка события ошибки подключения
db.on('error', (error) => {
  console.error('Ошибка подключения к MongoDB:', error);
});

