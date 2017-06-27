var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var agenteAtivo= new schema({
  nome: {type: String},
  email:{type: String},
  tipoAgente:{type: String},
  cpf:{type: Number},
  codigoDoAgente:{type: String},
  comissao:{type: Number},
  listaDeClientes:{type: [Cliente]},
  listaDeProdutos:{type:[Produto]}

  })

  module.esxports = mongoose.model('Agente Ativo', agenteAtivo);
