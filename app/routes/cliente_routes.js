var express = require('express'),
cliente = require('../modelos/cliente'),
routes = express.Router();

//...

routes.get('cliente/:id', function(req,res){
cliente.findById({req.params.id}).then((cliente))=>{
  res.json({
    sucess: true,
    result: cliente
  })
},...);
})
routes.get('/cliente' function(req,res){
  cliente.find({}).then((clients)=>{
    res.json({
      sucess: true,
      result:usrs
    });
  }, (err)=> {

  });
})

routes.post('/cliente', function (req, res){
  var user = new Cliente({
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
    email: req.body.email
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
routes.put('/cliente/:id', function(req,res){
  cliente.update({_id:req.params.id}, {$set: {
    nome: req.body.nome,
    endereco: req.body.endereco,
    telefone: req.body.telefone,
    cpf: req.body.cpf,
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
