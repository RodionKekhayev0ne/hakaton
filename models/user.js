
const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({  
    id: Schema.Types.UUID,
    name: String,
    mail: String,
    password: String,
    created_at: Date,
    updated_at: Date,
    token:String,
});
const UserDb = mongoose.model('User', userSchema);

module.exports = UserDb;