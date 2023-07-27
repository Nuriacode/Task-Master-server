const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: String,
    lastname: String,
    email: String,
    password: String
},
 {collection:'users'}
);

const User = mongoose.model('users', userSchema);
module.exports = User;