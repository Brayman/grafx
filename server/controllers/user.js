const UserService = require('../service/user')

class UserController {
    async registration(req, res, next) {
        try {
            const {login, password, first_name, second_name} = req.body;
            const userData = await UserService.registration(login, password, {first_name, second_name});
            res.cookie('refTok', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            console.log(error);
        }
    }
    async login(req, res, next) {

        try {
            const {login, password} = req.body;
            const userData = await UserService.login(login, password);
            if (userData.error) {
                return res.status(404).send(userData);
            }
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            console.error(error);
        }
    }
    
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const token = await UserService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.sendStatus(200);
        } catch (error) {
            
        }
    }
    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await UserService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
            return res.json(userData)
        } catch (error) {
            console.error(error);
            return res.sendStatus(400)
        }
    }
    async getUser(req, res, next) {
        try {
            const user = await UserService.getUser()
            return res.json(user)
        } catch (error) {
            
        }
    }
}
module.exports = new UserController();