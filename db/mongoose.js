const mongoose = require('mongoose');

const {dbport: port} = require('../config/config');

mongoose.promise = global.Promise;

mongoose.connect(port, {useMongoClient: true});

module.exports = {mongoose};