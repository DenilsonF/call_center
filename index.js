var express = require ('express')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var config = require('config')
var router = express.Router()


mongoose.Promise = global.Promise;

app.use(bodyParser.json())
app.use(require('./app/routes/cliente_routes'))
app.use(require('./app/routes/agente_routes'))
app.use(require('./app/routes/reclamacao_routes'))
//app.use('/api', router)

//conexao ao database
mongoose.connect(config.database, {
  useMongoClient: true
})

app.listen(3000,function(){
console.log(" Aplicacao rodando na porta 3000!");
})

/*
git add --ignore-removal .
git commit -m "ansdfn"
git push origin master
*/

/* npm install express --save
   npm install body-parser --save
   npm install nodemon --save
   npm index_js
*/
