const mongoose = require('mongoose');
const { Schema } = mongoose;
const orderSchema = new Schema({
    id: Schema.Types.UUID,
    artist_id:{ type: Schema.Types.ObjectId, ref: 'Artist'},
    user_id:{ type: Schema.Types.ObjectId, ref: 'User'},
    gift_id:{type: Schema.Types.ObjectId, ref: 'Gift'},
    created_at:Date,
    updated_at: Date,
    token:String,
  });

const orderDb = mongoose.model('Order', orderSchema);

module.exports = orderDb;