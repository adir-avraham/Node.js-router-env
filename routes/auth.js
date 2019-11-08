const express = require('express')

const  router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('users.json');
const users = JSON.parse(data);

const writeToFile = require('../writeToFile')


router.post('/Register', (req, res, next) =>{
    const { userName, email, password, firstName, lastName } = req.body;
    users.push({ userName, email, password, firstName, lastName })
    writeToFile.writeToFile('users.json', users )
    res.send("Register success")
})


module.exports = router;