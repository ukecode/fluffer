const mongoose = require('mongoose');
const result = require('dotenv').config({ path: __dirname + '/../.env' });

const dataBaseUrl = process.env.DB_ATLAS;

mongoose.connect(dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;