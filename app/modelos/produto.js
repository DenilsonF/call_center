var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var produto= new schema({
    nomeDoProduto:{type: String},
    codigoDoProduto:{type: String},
    preco:{type:Number}

  })

  module.exports = mongoose.model('produto', produto);
