const express = require('express');
const bodyParser = require('body-parser')
api = express();
require('dotenv').config();

const authRouter = require('./routes/auth')

api.use(bodyParser.json());



api.listen(process.env.PORT || 5000, () =>{
    console.log(`Api is listening to port: ${process.env.PORT}`)
})


api.use('/auth', authRouter )