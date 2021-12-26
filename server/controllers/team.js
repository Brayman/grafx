const TeamModel = require('../models/teams');
class TeamController {
    async save_team(req, res, next) {
        try {
            console.log(req.body);
            const team = new TeamModel({team: req.body})
            team.save();
            res.sendStatus(200)
        } catch (error) {
            console.log(error);
        }
    }
    async update_team(req, res, next) {
        try {
            const team = await TeamModel.findOneAndUpdate({"team.login": req.params.login},{team: req.body},{new: true});
            res.json(team.team);
            
        } catch (error) {
            console.log(error);
        }
    }
    async get_team(req, res) {
        try {
            const team = await TeamModel.findOne({"team.login": req.params.login});
            res.json(team.team)
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new TeamController(); 