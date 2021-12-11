const ScheduleModel = require('../models/schedule');
class ScheduleController {
    async set_schedule(req, res, next) {
        try {

            const schedule = new ScheduleModel(req.body)
            schedule.save();
            res.json(schedule)
        } catch (error) {
            console.log(error);
        }
    }
    async get_schedules(req, res) {
        try {
            const schedules = await ScheduleModel.find();
            res.json(schedules)
        } catch (error) {
            console.log(error);
        }
    }
    async get_schedule(req, res) {
        try {
            
            const date = new Date(req.params.date)
            console.log(req.params.date,date);
            const schedules = await ScheduleModel.find({date});
            res.json(schedules[0])
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ScheduleController(); 