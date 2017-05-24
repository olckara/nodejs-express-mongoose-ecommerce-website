var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var request = require('request');
    request('http://localhost:3001/getCategory', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log(body); // Print the body of response.
            var category = JSON.parse(body);
            request('http://localhost:3001/getButiks', function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    console.log(body); // Print the body of response.
                    var butiks = JSON.parse(body);
                    request('http://localhost:3001/getCampaign', function (error, response, body) {
                        if (!error && response.statusCode === 200) {
                            console.log(body); // Print the body of response.
                            var campaigns = JSON.parse(body);
                            res.render('index', {
                                title: 'Trendyol_RESTful_API_by_Olcay Karaduman',
                                category: category,
                                butik: butiks,
                                campaign: campaigns
                            });
                        }
                    });
                }
            });

        }
    });
});

module.exports = router;
