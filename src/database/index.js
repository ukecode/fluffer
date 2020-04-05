const mongoose = require('mongoose');
const result = require('dotenv').config({ path: __dirname + '/../.env' });

const dataBaseUrl = result.parsed.DB_ATLAS

mongoose.connect(dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;