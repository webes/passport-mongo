
var mongoose = require('mongoose');

module.exports = mongoose.model('Empresa', {
    id: String,
    nome: String,
    cnpj: String,
    endereco: String,
    // Todo fazer busca por CEP para autopreencher campos
    // endereco: {
    //     cep: String,
    //     logradouro: String,
    //     complemento: String,
    //     bairro: String,
    //     cidade: String,
    //     estado: String
    // },
    telefone: String,
    email: String,
    senha: String,
    contato: [{
        id: String,
        nome: String,
        email: String,
        telefone: String
    }],
    responsavel: [{
        id: String,
        nome: String,
        sobrenome: String,
        cpfcnpj: Number,
        telefone: String,
        email: String,
        senha: String,
        tipo: {
            type: String,
            default: "Colaborador"
        },
        is_Active: {
            type: Boolean,
            default: false
        }
    }],
    is_Active: {
        type: Boolean,
        default: false
    }
});