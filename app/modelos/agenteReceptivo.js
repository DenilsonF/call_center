var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteReceptivo= new schema({
  nome: {type: String},
  email:{type: String},
  tipoAgente:{type: String},
  cpf:{type: Number},
  codigoDoAgente:{type: String},
  comissao:{type: Number},
  registroDeReclamacao:{type: [String]},
  registroDeSolucao:{type: [String]}

  })

  module.esxports = mongoose.model('Agente Receptivo', agenteReceptivo);
