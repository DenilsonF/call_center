var express = require('express'),
cliente = require('../modelos/cliente'),
routes = express.Router();

//...

routes.get('empresa/:id', function(req,res){
empresa.findOne({id:req.params.id}) .then((company))=>{
  res.json({
    sucess: true,
    result: comp
  })
},...);
})

routes.post('/empresa', function (req, res){
  var user = new Agente({
    nome: req.body.nome,
    cnpj: req.body.cnpj
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    email: req.body.email,
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

routes.put('/empresa/:id', function(req,res){
  empresa.update({_id:req.params.id}, {$set: {
    nome: req.body.nome,
    cnpj: req.body.cnpj,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    email: req.body.email
  }})
  .then((obj) => {
  res.json({
    sucess: true
  });
}, (err)=> {
  retornaErro(res, err)

})

module.exports = server;
