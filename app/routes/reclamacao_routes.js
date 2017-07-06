var express = require('express'),
reclamcao = require('../modelos/reclamacao'),
routes = express.Router();

//...

routes.get('reclamacao/:id', function(req,res){
reclamacao.findOne({id:req.params.id}) .then((
complaint))=>{
  res.json({
    sucess: true,
    result: usr
  })
},...);
})
routes.get('/reclamacao' fuction(req,res){
  reclamacao.find({}).the((claims)=>{
    res.json({
      sucess: true,
      result:usrs
    });
  }, (err)=> {

  });
})
routes.post('/reclamacao', function (req, res){
  var user = new Reclamacao({

    descricao: req.body.descrisao,
    codigoDeReclamcao: req.body.codigoDeReclamcao,
    codigoDoProduto: req.body.codigoDoProduto
  });
  user.save().then((obj) =>{
    res.json({
      sucess: true
    });

  },(err) =>{
    res.json({
      sucess: false
    });
  });
})
routes.put('/reclamacao/:id', function(req,res){
  reclamacao.update({_id:req.params.id}, {$set: {
    descricao: req.body.descricao,
    codigoDeReclamacao: req.body.codigoDeReclamacao,
    codigoDoProduto: req.body.codigoDoProduto
  }})
  .then((obj) => {
  res.json({
    sucess: true
  });
}, (err)=> {
  retornaErro(res, err)

})

module.exports = server;
