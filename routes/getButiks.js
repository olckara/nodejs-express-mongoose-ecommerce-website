/**
 * Created by karaduman on 24.05.2017.
 */
var express = require('express');
var router = express.Router();
var Butik = require('../entities/Butik');

/* GET butiks listing. */
router.get('/', function (req, res, next) {
    Butik.find({}, function (err, butiks) { //returns all events for demo
        var butikMap = [];
        butiks.forEach(function (butiks) {
            butikMap.push(butiks);
        });
        res.send(butikMap);
    });
});

module.exports = router;
