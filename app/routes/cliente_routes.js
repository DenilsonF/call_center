var express = require('express')
var cliente = require('../modelos/cliente')
var routes = express.Router()

// rota para busca de dados do cliente por id
routes.get('cliente/:id', function(req,res){
cliente.findById(req.params.id).then(
  cliente => {
  res.json({
    sucess: true,
    result: cliente
  })
}, erro => {
    res.json({
      sucess: false,
      result: erro
    })
  });
})

//busca os dados de todos os cliente
routes.get('/cliente', function(req,res){
  cliente.find({}).then(
    clients => {
    res.json({
      sucess: true,
      result: clients
    });
  }, erro => {
     res.json({
       sucess: false,
       result: erro
     })
  });
})

//cadastrar cliente
routes.post('/cliente', function (req, res){
  var user = new cliente({
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email
  });
  user.save().then(obj => {
    res.json({
      sucess: true
    })
  }, erro => {
    res.json({
      sucess: false,
      result: erro
    });
  });
})

module.exports = routes;
