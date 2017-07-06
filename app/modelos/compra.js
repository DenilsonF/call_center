var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteReceptivo= new schema({
    codigoDeCompra:{type: String},
    precoDaCompra:{type: Number},
    formaDePagamento:{type: String},
    desconto:{type: Number},
    codigoDoProduto:{type:String}
  })

  module.exports = mongoose.model('Agente Receptivo', agenteReceptivo);
