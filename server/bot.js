const { Telegraf,session, Scenes, Stage} = require('telegraf');
const UserModel = require('./models/user');
const TOKEN = process.env.TOKENT;
const bot = new Telegraf(TOKEN)

const loginScene = new Scenes.BaseScene("loginScene")
const anotherScene = new Scenes.BaseScene("anotherScene")
const stage = new Scenes.Stage([loginScene,anotherScene])
bot.use(session())
bot.use(stage.middleware())

loginScene.enter(ctx => ctx.replyWithHTML('Введите ваш логин и код аунтификации \n <b>Пример:</b>\nлогин=код'))
loginScene.on('text', async ctx => {
  const [login,key] = ctx.message.text.split('=')
  
  const user = await UserModel.findOne({login})
    console.log(user.telegram.text == key);
  if (user.telegram.code == key) {

    const auth = await UserModel.findByIdAndUpdate(user._id,{telegram: {...user.telegram, userid: ctx.chat.id, username: ctx.chat.username}})
    bot.telegram.sendMessage(user.telegram.userid, 'Успешная авторизация')
  }

  return ctx.scene.leave()
})
bot.command('/login', ctx => ctx.scene.enter("loginScene")) 
bot.start((ctx) => ctx.reply('Опять работать?'))
module.exports = bot;