const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
    first_name: String,
    second_name: String,
    role: {
        type: String,
        default: 'user'
    },
    telegram: {
        userid: Number,
        username: String,
        code: String,
    },
    notification: {
        auth: {
            type: Boolean,
            default: false
        },
        changes: {
            type: Boolean,
            default: false
        },
    },
    token: String
})

module.exports = model('User', UserSchema);