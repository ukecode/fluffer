const cron = require('node-cron');
const instance = require('./server/api');
const express = require('express');
const cors = require('cors');
const path = require('path')

//-----  Teste Básico de requisição dentro do Cron ------
//  dispara uma requisição por minuto 

// const datas  = ['* * * * * ','5,10,15 * * * * *']

// datas.map((e)=>{
//     cron.schedule(e, () => {
//         instance.get('/Kaiofprates').then(function (res) {
//             console.log(res.data.name);
//             console.log(`Cron expression -----------> ${e}`)
//         })
//     });
// });


const app = express();

app.use(cors());
app.use(express.json());
app.use('/main', express.static(__dirname + '/pages'));
require('./controllers/apiControllers')(app)

app.listen(process.env.PORT || 3000);
