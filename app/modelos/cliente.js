var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var cliente= new schema({
  nome:{type: String},
  endereco:{type: String},
  cpf:{type: Number},
  telefone:{type: Number},
  email:{type: String}

  })

  module.esxports = mongoose.model('Agente Receptivo', agenteReceptivo);
