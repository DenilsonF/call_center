var express = require('express'),
cliente = require('../modelos/cliente'),
routes = express.Router();

//...

routes.get('agente/:id', function(req,res){
agente.findOne({id:req.params.id}) .then((agent))=>{
  res.json({
    sucess: true,
    result: ag
  })
},...);
})
routes.get('/agente' fuction(req,res){
  cliente.find({}).the((agents)=>{
    res.json({
      sucess: true,
      result:ags
    });
  }, (err)=> {

  });
})

routes.post('/agente', function (req, res){
  var user = new Agente({
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email,
    comissao: req.body.comissao
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

routes.put('/agentee/:id', function(req,res){
  agente.update({_id:req.params.id}, {$set: {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email,
    comissao: req.body.comissao
  }})
  .then((obj) => {
  res.json({
    sucess: true
  });
}, (err)=> {
  retornaErro(res, err)

})

module.exports = server;
