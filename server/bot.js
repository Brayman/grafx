const { Telegraf,session, Scenes, Stage} = require('telegraf');
const TOKEN = process.env.TOKENT;
const bot = new Telegraf(TOKEN)

const loginScene = new Scenes.BaseScene("loginScene")
const anotherScene = new Scenes.BaseScene("anotherScene")
const stage = new Scenes.Stage([loginScene,anotherScene])
bot.use(session())
bot.use(stage.middleware())



loginScene.enter(ctx => ctx.replyWithHTML('Введите ваш логин и код аунтификации \n <b>Пример:</b>\nлогин=код'))
loginScene.on('text', async ctx => {
  console.log('ty-ty-ty',ctx.message.text);
  user = ctx.message.chat.id
  return ctx.scene.leave()
})
loginScene.leave(ctx => ctx.reply('Успех!'))






bot.command('/login', ctx => ctx.scene.enter("loginScene") ) 

 
    bot.start((ctx) => ctx.reply('Опять работать?'))
    

    
    
    module.exports = bot;