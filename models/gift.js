const mongoose = require('mongoose');
const { Schema } = mongoose;
const giftSchema = new Schema({
    id: Schema.Types.UUID,
    name: String,
    description: String,
    image_url: String,
    price:Number
  });

  const giftDb = mongoose.model('Gift', giftSchema);

module.exports = giftDb;