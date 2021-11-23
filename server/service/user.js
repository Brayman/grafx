const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const TokenService = require('./token');
const bot = require('../bot')
class UserService {
    async registration(login, password) {
        const candidate = await UserModel.findOne({login});
        if (candidate) {
            throw new Error(`Логин: ${login} уже занят`)
        }
        const hashPass = await bcrypt.hash(password, 1)
        const BotCode = await bcrypt.hash(login, 1)
        const user = await UserModel.create({login, password: hashPass, telegram: {code: BotCode.slice(0,6)}})
        const tokens = TokenService.geterateToken({user})
        await TokenService.saveToken(user.login, tokens.refreshToken);

        return {...tokens, user}
    }
    async login(login, password) {
        const user = await UserModel.findOne({login});
        if (!user) {
            console.log(`ошибка аунтификации. Нет пользователя ${login}`);
            return {error: 'log'}
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            console.log(`ошибка аунтификации. ${login} ввёл неверный пароль`);
            return {error: 'pass'}
        }
        const tokens = TokenService.geterateToken({user})
        await TokenService.saveToken(user.login, tokens.refreshToken);

        if (user.telegram.userid) {  
            console.log('отправили сообщение в telegram');          
            bot.telegram.sendMessage(user.telegram.userid, 'Вы вошли')
        } 
        console.log(`${login} вошёл`);
        return {...tokens, user}
    }
    async logout(refreshToken) {
        await TokenService.removeToken(refreshToken);

    }
    async refresh(refreshToken) {
        if (!refreshToken) {
            console.log('токена нет');
        }
        const userData = await TokenService.valRefreshTok(refreshToken);
        const dbToken = await TokenService.findToken(refreshToken);
        if (!userData || !dbToken) {
            console.log('Не авторизован');
        }
        const user = await UserModel.findById(userData._id)
        const tokens = TokenService.geterateToken({user})
        await TokenService.saveToken(user.login, tokens.refreshToken);
        return {...tokens, user}
    }
    async getUser() {
        const user = await UserModel.find();
        return user;
    }
}

module.exports = new UserService();