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
            const schedule = await ScheduleModel.findOne({date});
            res.json(schedule)
        } catch (error) {
            console.log(error);
        }
    }
    async update_schedule(req, res) {
        try {
            const schedule = await ScheduleModel.findByIdAndUpdate(req.params.id,req.body,{new: true});
            const schedules = await ScheduleModel.find()
            res.json(schedules)
        } catch (error) {
            if (schedules.error) {
                return res.status(404)
            }
            console.log(error);
        }
    }
}

module.exports = new ScheduleController(); 