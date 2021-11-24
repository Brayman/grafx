const jwt = require('jsonwebtoken')
const UserModel = require('../models/user')
const SECRET = ['net','seot']

class TokenService {
    geterateToken(payload) {
        const accessToken = jwt.sign(payload, SECRET[0], {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, SECRET[1], {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }
    valAccessTok(token) {
        try {
            const userData = jwt.verify(token, SECRET[0]);
            return userData;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    valRefreshTok(token) {
        try {
            const userData = jwt.verify(token, SECRET[1]);
            return userData;
        } catch (error) {
            console.log(error);
            return null;
        }
    }
    async saveToken(login, refreshToken) {
        const tokenData = await UserModel.findOne({login})
        if (tokenData) {
            const token = await UserModel.findOneAndUpdate(login, {token: {refreshToken}})
            return token;
        } else {
            const token = await UserModel.findOneAndUpdate(login, {token: {refreshToken}})
            return token;
        }
    }
    async removeToken(refreshToken) {
        const tokenData = await UserModel.findOneAndUpdate(refreshToken, {token: null})
    }
    async findToken(refreshToken) {
        const tokenData = await UserModel.findOne({refreshToken});
        return tokenData;
    }
    
}

module.exports = new TokenService();