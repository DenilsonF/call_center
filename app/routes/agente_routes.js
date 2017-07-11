var express = require('express'),
agente = require('../modelos/agente'),
routes = express.Router();


//rota para busca de dados do agente por id
routes.get('agente/:id', function(req,res){
agente.findOne({id:req.params.id}) .then(agent=>{
  res.json({
    sucess: true,
    result: agent
  })
}, erro => {
    res.json({
      sucess: false,
      result: erro
    });
})
})

//rota para busca os dados de todos os agentes
routes.get('/agente', function (req, res){
  cliente.find({}).then(agents=>{
    res.json({
      sucess: true,
      result:agents
    });
  }, erro => {
      res.json({
        sucess: false,
        result: erro
     })
 })
})

//rota para cadastrar cliente
routes.post('/agente', function (req, res){
  var user = new Agente({
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email,
    comissao: req.body.comissao
  });
  user.save().then(obj =>{
    res.json({
      sucess: true
    });
  },(err) =>{
    res.json({
      sucess: false
    });
  });
})

module.exports = routes;
