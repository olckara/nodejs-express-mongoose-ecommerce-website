/**
 * Created by karaduman on 24.05.2017.
 */
var express = require('express');
var router = express.Router();
var Butik = require('../entities/Butik');

/* GET butiks listing. by the specified category ID */
router.post('/', function (req, res, next) {
    category_id = req.query.category_id;
    Butik.find({"category_id": category_id}, function (err, butiks) { //returns all events for demo
        var butikMap = [];
        butiks.forEach(function (butiks) {
            butikMap.push(butiks);
        });
        res.send(butikMap);
    });
});

module.exports = router;