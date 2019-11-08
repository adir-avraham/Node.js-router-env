const express = require('express')

const  router = express.Router();
const fs = require('fs');
const data = fs.readFileSync('users.json');
const users = JSON.parse(data);

const writeToFile = require('../writeToFile')


router.use('/Register', (req, res, next) =>{
    const {userName, email, password, firstName, lastName} = req.body;
    if (!userName || !email || !password || !firstName || !lastName ) {
        res.send("Some value is missing...")
    }
    if (!email.includes("@")) return res.send("Email address is not valid");
    isUserExist = users.find((user) => {return user.userName === userName});
    if (isUserExist) return res.send("User is already exist") 
    next()
})

router.post('/Register', (req, res, next) =>{
    const { userName, email, password, firstName, lastName } = req.body;
    users.push({ userName, email, password, firstName, lastName })
    writeToFile.writeToFile('users.json', users )
    res.send("Register success")
})


module.exports = router;