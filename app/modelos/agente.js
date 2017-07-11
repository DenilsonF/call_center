var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agente= new Schema({
  nome: {type: String},
  email:{type: String},
  tipoAgente:{type: String},
  cpf:{type: Number},
  codigoDoAgente:{type: String},
  comissao:{type: Number},
  registroDeReclamacao:{type: [String]},
  registroDeSolucao:{type: [String]}

  })

  module.exports = mongoose.model('Agente Receptivo', agente);
