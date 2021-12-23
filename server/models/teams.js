const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
    team: Array
})

module.exports = model('Team', TeamSchema);