const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
    telegram: {
        userid: Number,
        text: String
    },
    token: {
        accessToken: String,
        refreshToken: String
    }
})

module.exports = model('User', UserSchema);