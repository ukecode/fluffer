const dotenv = require('dotenv');
const axios = require('axios'); 
 
const result = dotenv.config({ debug: process.env.DEBUG}); 

if (result.error){
    throw result.error
}

const baseURL  = result.parsed.BASE_URL; 

const instance  = axios.create({
baseURL, 
timeout: 4000
}); 

module.exports = instance; 
 
