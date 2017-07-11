var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var reclamacao= new Schema({
   descricao:{type: String},
   codigoDeReclamcao:{type: String},
   codigoDoProduto:{type: String}

  })

  module.exports = mongoose.model('reclamacao', reclamacao);
