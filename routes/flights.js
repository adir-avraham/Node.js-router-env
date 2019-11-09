const express = require('express');



const router = express.Router();


router.get('/flights', (req, res, next) => {
res.send([{"flightID": "453522", "destenation:": "London"}, {"flightID": "658457", "destenation": "Paris"}, {"flightID": "748954", "destenation": "Tel-Aviv"}])
})



module.exports = router;
