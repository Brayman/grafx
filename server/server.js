const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const path = require('path');
const mongoose = require('mongoose')
const router = require('./routes/index')
const jwt = require('jsonwebtoken');


const app = express();
app.use(express.json({ extended: true }))
app.use(cookieParser());
app.use(cors());
app.use('/api', router);
const uri = process.env.MONGODB_URI;
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
});
app.get('/jobs', async (req, res) => {
  console.log(req.session);
  mySession=req.session;
  if (mySession.userid) {

    res.sendStatus(200)
  } else {
    res.sendStatus(404)
  }
  
})

start()