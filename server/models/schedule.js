const { Schema, model } = require('mongoose');

const ScheduleSchema = new Schema({
    date: Date,
    team: Array
})

module.exports = model('Schedule', ScheduleSchema);