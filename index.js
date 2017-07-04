var express = require ('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())
router.use(require('./app/routes/cliente_routes'))

app.listen(3000,function(){
console.log(" Aplicacao rodando na porta 3000!");
 })


/*
git add --ignore-removal .
git commit -m "ansdfn"
git push origin master
*/
/* npm init
   yes
   npm install express --save
   npm install body-parser --save
   npm install nodemon --save
   npm index_js
   /*
