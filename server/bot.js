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
  console.log('ty-ty-ty',ctx.message.text.split('='));
  const [login,key] = ctx.message.text.split('=')
  
  const user = await UserModel.findOne({login})
    console.log(user.telegram.text == key);
  if (user.telegram.code == key) {

    const auth = await UserModel.findByIdAndUpdate(user._id,{telegram: {userid: ctx.chat.id, username: ctx.chat.username}})
    loginScene.leave(ctx => ctx.reply('Успех!'))
    return ctx.scene.leave()
  }

  return ctx.scene.leave()
})
loginScene.leave(ctx => ctx.reply('Ничего не произашло'))






bot.command('/login', ctx => ctx.scene.enter("loginScene") ) 

 
    bot.start((ctx) => ctx.reply('Опять работать?'))
    

    
    
    module.exports = bot;