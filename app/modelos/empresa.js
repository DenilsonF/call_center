var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var empresa= new schema({
  nome:{type: String},
  cnpj:{type: String}
  email:{type: String}
  endereco:{type: String}
  telefone:{type: Number}
  })

  module.exports = mongoose.model('empresa', empresa);
