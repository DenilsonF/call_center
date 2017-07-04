var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteReceptivo= new schema({
  nome:{type: String},
  cnpj:{type: String}
  email:{type: String}
  endereco:{type: String}
  telefone:{type: Number}
  })

  module.esxports = mongoose.model('Agente Receptivo', agenteReceptivo);
