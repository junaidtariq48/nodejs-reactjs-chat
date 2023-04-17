const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const { default: axios } = require("axios");

env.config({path: __dirname + '/.env'})

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username, secret, firstName } = req.body;
  try{
    const r = await axios.put(
        'https://api.chatengine.io/users/',
        {username: username, secret: secret, first_name: firstName},
        {headers: {"private-key": process.env.CHAT_ENGINE_PRIVATE_KEY}}
    )
    return res.status(r.status).json(r.data) 
  } catch(e) {
    return res.status(e.response.status).json(e.response.data) 
  }
  return res.json({ username: username, secret: "sha256..." });
});



app.listen(3001);