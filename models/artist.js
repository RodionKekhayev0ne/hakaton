const mongoose = require('mongoose');
const { Schema } = mongoose;
const artistSchema = new Schema({
    id: Schema.Types.UUID,
    password: String,
    name: String,
    profile_img:String,
    bio:String,
    role:String,
    created_at:Date,
    updated_at: Date,
    address: String,
    // home_point: { type: Schema.Types.ObjectId, ref: 'Location'},
    token:String,
  });

const ArtistDb = mongoose.model('Artist', artistSchema);

module.exports = ArtistDb;