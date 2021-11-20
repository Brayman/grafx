const path = require('path');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose')

const { Telegraf,session, Scenes, Stage} = require('telegraf');

const TOKEN = process.env.TOKENT;

const uri = process.env.MONGODB_URI;
const app = express();

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
  } catch(e) {
    console.log("server error", e.message);
    process.exit(1)
  }
}

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));
app.use(cors());
let user
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
    

    
    
    
      
    


let items = []


app.get('/jobs/:item', async (req, res) => {

  items.push(req.params.item)
  if (items[0]==req.params.item) {
    bot.telegram.sendMessage(user,'Совпадение')
  }
    res.send(items);
  
    
});

bot.launch();

start()