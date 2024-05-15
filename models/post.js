

const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    id: Schema.Types.UUID,
    content: String,
    media: [{type: String}],
    created_at:Date,
    updated_at: Date,
    artist_id: { type: Schema.Types.ObjectId, ref: 'Artist'},
    token:String,
  });

const PostDb = mongoose.model('Post', postSchema);

module.exports = PostDb;