require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
api = express();
const validateKey = require('./validateKey')
const authRouter = require('./routes/auth')
const flightsRoute = require('./routes/flights')

api.use(bodyParser.json());



api.listen(process.env.PORT || 5000, () =>{
    console.log(`Api is listening to port: ${process.env.PORT}`)
})

api.use('/auth', authRouter )

api.use('/',validateKey) 

api.use('/flights', flightsRoute)