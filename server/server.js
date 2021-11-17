const path = require('path');
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const config = require('../config.json');
const mongoose = require('mongoose')
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

app.get('/jobs', async (req, res) => {
    res.send('job');
});

start()