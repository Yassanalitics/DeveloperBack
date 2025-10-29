const mongoose = require ('mongoose')

const schema = new mongoose.Schema(
    //estrutura 
    {
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        editora: {type: String,required: true },
        ano: {type: Number, required: true},
        preco: {type: Number, required: true},
       
    },
    //parametros
    {timestamps: true} //salva a data de criação do registro e a data de atualizção do registro
)
//modelo
const livroModel = mongoose.model('livroModel', schema)
module.exports = livroModel