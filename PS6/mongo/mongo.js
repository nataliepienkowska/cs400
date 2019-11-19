const mongoClient = require('mongodb').MongoClient;

const mongoUrl = "mongodb://localhost:27017";

let _db;

module.exports = {
    connect: function( callback) {
        mongoClient.connect(mongoUrl,{ useNewUrlParser : true}, function( err, client) {
            _db = client.db('ForeignExchangeRates');
            return callback(err);
        });
    },
    getDB: () => { return _db; }
}


//code from office hours