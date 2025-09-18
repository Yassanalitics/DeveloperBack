
// importa o express
const express = require('express')
// crio um roteador
const router = express.Router()

// Implemento as rotas e a lógica
// CRUD de contatos (Create, Read, Update, Delete)

// Variável pra guardar a lista de contatos
let contatos = ["João", "Maria"]

// Buscar a lista de contatos
router.get('/contatos', (req, res, next) => {
  res.json(contatos)
})

// Cadastrar o contato
router.post('/contatos', (req, res, next) => {
  const { nome } = req.body
  // validações 
  if (!nome) {
    return res.status(400).json({ error: "Nome é obrigatório!!!" })
  }
  if (contatos.includes(nome)) {
    return res.status(409).json({ error: "Contato já existe!!!" })
  }
  contatos.push(nome)
  res.status(201).json({ message: "Contato cadastrato com sucesso!!!" })
})

// Deletar um contato
router.delete("/contatos/:nome", (req, res, next) => {
  const nome = req.params.nome
  contatos = contatos.filter(contato => contato != nome)
  res.json({ message: "Contato excluido com sucesso!!!"})
})

// Deletar todos os contatos
router.delete("/contatos", (req, res, next) => {
  contatos = []
  res.json({ message: "Todos os contatos foram excluidos!!!" })
})

// exporto o roteador
module.exports = router
