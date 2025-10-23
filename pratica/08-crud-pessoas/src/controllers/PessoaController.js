const express = require('express')
const router = express.Router()
const PessoaModel = require('../models/PessoaModel')

// Rotas do CRUD
// Create
router.post('/pessoas', async (req, res, next) => {
  const pessoa = req.body
  const pessoaCadastrada = await PessoaModel.create(pessoa)
  res.status(201).json(pessoaCadastrada)
})

// Read
router.get('/pessoas', async (req, res, next) => {
  const pessoas = await PessoaModel.find()
  res.json(pessoas)
})

router.get('/pessoas/:id', async (req, res, next) => {
  const id = req.params.id
  const pessoaEncontrata = await PessoaModel.findById(id)
  if (!pessoaEncontrata) {
    return res.status(404).json({ erro: "Pessoa não encontrata!!!" })
  }
  res.json(pessoaEncontrata)
})

// Update
router.put('/pessoas/:id', async (req, res, next) => {
  const id = req.params.id
  const novoDados = req.body
  const pessoaAtualizada = await PessoaModel.findByIdAndUpdate(id, novoDados, { new: true })
  if (!pessoaAtualizada) {
    return res.status(404).json({ erro: "Pessoa não econtrada" })
  }
  res.json(pessoaAtualizada)
})

// Delete
router.delete('/pessoas/:id', async (req, res, next) => {
  const id = req.params.id
  await PessoaModel.findByIdAndDelete(id)
  res.status(204).send()
})



module.exports = router