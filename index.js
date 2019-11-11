require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
api = express();
const moment = require("moment");
const users = require('./users')
const authRouter = require('./routes/auth')
const flightsRoute = require('./routes/flights')

api.use(bodyParser.json());



api.listen(process.env.PORT || 5000, () =>{
    console.log(`Api is listening to port: ${process.env.PORT}`)
})

api.use('/auth', authRouter )

api.use((req, res, next) => {
    const { key } = req.query;
    const timeStamp = moment().format("x");
    if (!users[key]) return res.status(401).send("Unauthorized user");
    if (timeStamp - 60000 > users[key]) {
      delete users[key];
      return res.send("Your key is expierd/Unauthorized user");
    }
    next();
  });

api.use('/flights', flightsRoute)