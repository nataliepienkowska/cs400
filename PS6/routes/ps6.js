const express = require('express');
const router = express.Router();
const db = require('../mongo/mongo');
const fetch = require("node-fetch");

db.connect(function(err, client) {
    if (err) {
        console.log(`Error: ${err}`);
    }
    console.log("You have successfully connected to the database!");
});

router.get('/', function(req, res, next) {
    let mongo = db.getDB();
    let numberOfValuesInCollection = mongo.collection("Exchange").count((err, result) => {
        if (result>0){
            const valuesInCollection = mongo.collection("Exchange").findOne({}, (err, result) => {

                res.render('ps6', {title: `Exchange rate`, paras: `According to the cache, the current rate from USD to PLN is ${result.rates.PLN}`});

            });
        }

        else {

            fetch('https://api.exchangeratesapi.io/latest?base=USD')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log("You have successfully connected to the API!");

                    res.render('ps6', {
                        title: `Exchange rate`,
                        paras: `According to a third-party API call, the current rate from USD to PLN is ${data.rates.PLN}`
                    });
                    mongo.collection("Exchange").insertOne(data, function (err, r) {
                    })
                        .catch(err => {
                            res.render('index', {title: "There is an error!"});
                        })
                })
        }
    })})


module.exports = router;