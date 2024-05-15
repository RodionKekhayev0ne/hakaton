const mongoose = require('mongoose');
const { Schema } = mongoose;
const theaterSchema = new Schema({
    id: Schema.Types.UUID,
    name: String,
    artists: [{ type: Schema.Types.ObjectId, ref: 'Artist'}],
  });

  const theaterDb = mongoose.model('Theater', theaterSchema);

module.exports = theaterDb;