var express = require('express')
vsr routes = express.router()

//...

routes.get('/user', function(req,res){
  res.json({msg: "funcionou!"})
})

module.exports = routers
