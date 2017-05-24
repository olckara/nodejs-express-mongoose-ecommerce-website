/**
 * Created by karaduman on 24.05.2017.
 */
var express = require('express');
var router = express.Router();
var Category = require('../entities/Category');

/* GET Category listing. */
router.get('/', function (req, res, next) {
    Category.find({}, function (err, categories) { //returns all events for demo
        var categoryMap = [];
        categories.forEach(function (categories) {
            categoryMap.push(categories);
        });
        res.send(categoryMap);
    });
});

module.exports = router;

