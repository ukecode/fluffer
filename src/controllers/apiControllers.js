const express = require('express');
const Api = require('../models/apisDatabase');
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const api = await Api.create(req.body);
        return res.send({ api });

    } catch (err) {
        return res.status(400).send({
            error: 'Register Fail'
        });
    }
});


router.post('/delete', async (req, res) => {
    try {
        const { url } = req.body;
        const api = await Api.deleteOne({
            url
        });
        return res.send(api);
    } catch (err) {
        res.status(404).send({
            error: err
        })
    }
});


router.post('/list', async (req, res) => {
    try {
        const name = req.body;
        console.log(name)
        const apps = await Api.findOne(name, function (err, obj) { console.log(obj); });
        res.send(apps);
    } catch (error) {
        res.status(404).send({
            error
        })
    }

});


router.get('', (req, res) => {
    res.send('Ola Fluffer')
})



module.exports = app => app.use('/apps', router);