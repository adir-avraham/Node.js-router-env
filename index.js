const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config();


api = express();

api.use(bodyParser.json());



api.listen(process.env.PORT || 5000, () =>{
    console.log(`Api is listening to port: ${process.env.PORT}`)
})