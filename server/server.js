const express = require('express');

const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose')
const router = require('./routes/index')
const jwt = require('jsonwebtoken');

const bot = require('./bot')
 

const uri = process.env.MONGODB_URI;




const app = express();
app.use(express.json({ extended: true }))
app.use(cookieParser());
app.use(cors({origin: ['http://localhost:3000', 'http://localhost:8080'],credentials: true}));
app.use('/api', router);

const PORT = process.env.PORT || 5000;
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));


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




app.post('/jobs',  async (req, res) => {
  const token = generateAccessToken({ username: req.body.user });
  res.json(token); 
})


let user








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