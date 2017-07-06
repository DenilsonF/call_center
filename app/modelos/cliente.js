var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var cliente= new Schema({
  nome:{type: String},
  endereco:{type: String},
  cpf:{type: Number},
  telefone:{type: Number},
  email:{type: String}

  })

  module.exports = mongoose.model('cliente', cliente);
