var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteReceptivo= new schema({
    nomeDoProduto:{type: String},
    codigoDoProduto:{type: String},
    preco:{type:Number}

  })

  module.esxports = mongoose.model('Agente Receptivo', agenteReceptivo);
