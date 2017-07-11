var express = require('express'),
reclamcao = require('../modelos/reclamacao'),
routes = express.Router();


//rota para busca de dados de reclamacao por id
routes.get('reclamacao/:id', function(req,res){
reclamacao.findOne({id:req.params.id}) .then(
complaint=>{
  res.json({
    sucess: true,
    result: complaint
  })
},erro => {
  res.json({
    sucess: false,
    result: erro
   })
  });
})

//rota para busca os dados de todas as reclamacoes
routes.get('/reclamacao', function(req,res){
  reclamacao.find({}).then(claims=>{
    res.json({
      sucess: true,
      result:claims
    });
  }, erro => {
    res.json({
      sucess: false,
      result: erro
    })
  });
})

//rota para cadastrar reclamacao
routes.post('/reclamacao', function (req, res){
  var user = new Reclamacao({

    descricao: req.body.descrisao,
    codigoDeReclamcao: req.body.codigoDeReclamcao,
    codigoDoProduto: req.body.codigoDoProduto
  });
  user.save().then(obj =>{
    res.json({
      sucess: true
    });

  },erro => {
    res.json({
      sucess: false,
      result: erro
    });
  });
})

module.exports = routes;
