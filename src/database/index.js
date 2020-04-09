const mongoose = require('mongoose');
const result = require('dotenv').config({ path: __dirname + '/../.env' });

const dataBaseUrl = "mongodb+srv://ukecode:carbon14@cluster0-ippbo.mongodb.net/fluffer?retryWrites=true&w=majority"

mongoose.connect(dataBaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = mongoose;