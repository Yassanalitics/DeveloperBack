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
//busca por id
//get /pessoas/:id
router.get('/pessoas/:id', (req,res,next)=> {
//recebendo id como parametro dinamico 
const id = req.params.id
//faço a busca na lista de pesoas com o id recebido
const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
if(!pessoa){
    return res.status(404).json({error: "Pessoa não encontrada"})
}
res.json(pessoa)
})
//criação POST/pessoas
router.post('/pessoas', (req, res) => {
    const { nome, cpf, email, dataNascimento } = req.body
  
    // validação simples
    if (!nome || !cpf || !email || !dataNascimento) {
      return res.status(400).json({ error: 'nome, cpf, email e dataNascimento são obrigatórios' })
    } 
    const novoId = listaPessoas.length ? Math.max(...listaPessoas.map(p => p.id)) + 1 : 1
    const novaPessoa = { id: novoId, nome, cpf, email, dataNascimento }
    listaPessoas.push(novaPessoa)
  
    res.status(201).json(novaPessoa)
  })
  

//Atualização PUT ou PAtch /pessoas/:id
router.put('/pessoas/:id', (req, res) => {
    const id = Number(req.params.id)
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' })
  
    const index = listaPessoas.findIndex(p => p.id === id)
    if (index === -1) return res.status(404).json({ error: 'Pessoa não encontrada' })
  
    const { nome, cpf, email, dataNascimento } = req.body
    if (!nome || !cpf || !email || !dataNascimento) {
      return res.status(400).json({ error: 'nome, cpf, email e dataNascimento são obrigatórios' })
    } 
    const updated = { id, nome, cpf, email, dataNascimento }
    listaPessoas[index] = updated
  
    res.json(updated)
  })
//remoção DELETE /PESSOAS/:ID
router.delete('/pessoas/:id', (req, res) => {
    const id = Number(req.params.id)
    if (Number.isNaN(id)) return res.status(400).json({ error: 'ID inválido' })
  
    const index = listaPessoas.findIndex(p => p.id === id)
    if (index === -1) return res.status(404).json({ error: 'Pessoa não encontrada' })
  
    listaPessoas.splice(index, 1)
    res.status(204).send() // sem conteúdo
  })

//exportar o roteador 
module.exports= router