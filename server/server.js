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
app.use(cors({origin: ['http://localhost:3000', 'https://graforwork.herokuapp.com'],credentials: true}));
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
bot.launch();

start()