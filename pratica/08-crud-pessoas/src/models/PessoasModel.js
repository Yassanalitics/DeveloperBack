const mongoose = require ('mongoose')

const schema = new mongoose.Schema(
    //estrutura da pessoa 
    {
        nome: {type: String, required: true},
        cpf: {type: String, required: true},
        email: {type: String, required: true},
        telefone: {type: String},
        dataNascimento: {type: Date, required: true},
        genero: {type: String, required: true},
        endereco: {
            cep: String,
            lougadoro: String,
            compelmento: String,
            bairro: String,
            numero: String,
            uf: String,
        },
    },
    //parametros
    {timestamps: true} //salva a data de criação do registro e a data de atualizção do registro
)
//modelo
const PessoasModel = mongoose.model('PessoasModel', schema)
module.exports = PessoasModel