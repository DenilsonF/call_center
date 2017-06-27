var express = require('express'),
cliente = require('../modelos/cliente'),
routes = express.router();

//...

routes.get('cliente/:id', function(req,res){
cliente.findOne({id:req.params.id}) .then((client))=>{
  res.json({
    sucess: true,
    result: usr
  })
},...);
})
routes.get('/cliente' fuction(req,res){
  cliente.find({}).the((clients)=>{
    res.json({
      sucess: true,
      result:usrs
    });
  }, (err)=> {

  });
})
