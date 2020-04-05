const cron = require('node-cron');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const Api = require('./models/apisDatabase');

let urlApp = [];

async function exciter() {
    urlApp = [];
    try {
        const apps = await Api.find(function (err, obj) { return obj.url });
        if (apps) {
            apps.map((e) => urlApp.push(e.url))
        }
    } catch (error) {
        console.error(err);
    }
}

cron.schedule('0 33 13,15,17,19,21 * * *', async () => {
    await exciter();
    if (urlApp[0]) {
        urlApp.map(async (url) => {
            try {
                await axios.get(url).then((e) => {
                    console.log(`${url} ------- excited`);
                }).catch((err) => {
                    console.log(`error whem excited ${url}`)
                })
            } catch (err) {
                console.error(err)
            }
        })
    }
});


const app = express();

app.use(cors());
app.use(express.json());
app.use('/main', express.static(__dirname + '/pages'));
require('./controllers/apiControllers')(app)

app.listen(process.env.PORT || 3000);
