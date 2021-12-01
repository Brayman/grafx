const ScheduleModel = require('../models/schedule');
class ScheduleController {
    async set_schedule(req, res, next) {
        try {

            const schedule = new ScheduleModel.create(req.body)
            schedule.save();
            res.json(schedule)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ScheduleController(); 