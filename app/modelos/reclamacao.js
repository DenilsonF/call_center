var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteReceptivo= new schema({
   descricao:{type: String},
   codigoDeReclamcao:{type: String},
   codigoDoProduto:{type: String}

  })

  module.esxports = mongoose.model('Agente Receptivo', agenteReceptivo);
