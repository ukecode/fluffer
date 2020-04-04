const cron = require('node-cron');
const instance = require('./server/api');
const express = require('express');
const cors = require('cors');

//-----  Teste Básico de requisição dentro do Cron ------
//  dispara uma requisição por minuto 

cron.schedule('* * * * *', () => {

    instance.get('/Kaiofprates').then(function (res) {
        console.log(res.data.bio);
    })

});

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('ok');
});

require('./controllers/apiControllers')(app)

app.listen(process.env.PORT || 3000);
