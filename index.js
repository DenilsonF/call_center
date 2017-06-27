var express = require ('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.json())

app.get('/clima/:cidade', function(req, res){

var cidade = req.params.cidade
var situacoes = ["sun", "rain","snow"]
var mensagens = ["o clima está otimo","está chovendo", "está nevando"]
var indice = Math.round(Math.random()*(situacoes.length - 1))
res.json({
  mensagem: mensagens[indice],
cidade:cidade,
situacoes:situacoes[indice]
})
app.listen(3000,function(){
console.log(" Aplicacao rodando na porta 3000!");
 })
