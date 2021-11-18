const UserModel = require('../models/user');
const bcrypt = require('bcrypt');
const TokenService = require('./token');

class UserService {
    async registration(login, password) {
        const candidate = await UserModel.findOne({login});
        if (candidate) {
            throw new Error(`Логин: ${login} уже занят`)
        }
        const hashPass = await bcrypt.hash(password, 5)
        const user = await UserModel.create({login, password: hashPass})
        const tokens = TokenService.geterateToken({user})
        await TokenService.saveToken(user.login, tokens.refreshToken);

        return {...tokens, user}
    }
    async login(login, password) {
        const user = await UserModel.findOne({login});
        if (!user) {
            console.log('ошибка аунтификации');
        }
        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            console.log('ошибка аунтификации');
        }
        const tokens = TokenService.geterateToken({user})
        await TokenService.saveToken(user.login, tokens.refreshToken);

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