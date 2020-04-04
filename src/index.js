const cron = require('node-cron');
const instance = require('./server/api');

//-----  Teste Básico de requisição dentro do Cron ------
//  dispara uma requisição por minuto 

cron.schedule('* * * * *', () => {

    instance.get('/Kaiofprates').then(function (res) {
        console.log(res.data.bio);
    })


});



