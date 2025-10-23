const espress= requier('express')
const router = express.Router()
const PessoaModel = require('../models/PessoasModel')
//Rotas crud

// cria
router.get('/Pessoa', (req, next, res) =>{
        res.json(PessoaModel)
})
//ler lista

//ler por id

//ATUALIZA

//DELETA


module.exports = router