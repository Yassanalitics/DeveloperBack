const express = require('express')
const router = express.Router()

//Mapear o roteador 
//LISTA DE PESSOAS para simular o banco de dados 
let listaPessoas = [
    {
        id: 1,
        nome: "João",
        cpf: "05866425730",
        email:"joao@gmail.com",
        dataNascimento:"05/04/2003"
    
    },
    {
        id: 2,
        nome: "Maria",
        cpf: "05866425730",
        email:"joao@gmail.com",
        dataNascimento:"05/04/2003"
    
    },
    {
        id: 3,
        nome: "João",
        cpf: "05866425730",
        email:"joao@gmail.com",
        dataNascimento:"05/04/2003"
    
    },
    {
        id: 1,
        nome: "João",
        cpf: "05866425730",
        email:"joao@gmail.com",
        dataNascimento:"05/04/2003"
    
    }, 
    
]
//rotas e logica
//busca 
//get /pessoas
router.get('/pessoas', (req, res, next) =>{
    res.json(listaPessoas)
})
//get /pessoas/:id
const id = req.params.id





//exportar o roteador 
module.exports= router