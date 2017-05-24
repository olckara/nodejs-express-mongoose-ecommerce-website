/**
 * Created by karaduman on 24.05.2017.
 */
var express = require('express');
var router = express.Router();
var Campaign = require('../entities/Campaign');

/* GET Campaign listing. */
router.get('/', function (req, res, next) {
    Campaign.find({}, function (err, campaigns) { //returns all events for demo
        var campaignMap = [];
        campaigns.forEach(function (campaigns) {
            campaignMap.push(campaigns);
        });
        res.send(campaignMap);
    });
});

module.exports = router;

