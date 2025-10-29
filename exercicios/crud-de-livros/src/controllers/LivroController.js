const express = require('express')
const router = express.Router()
const LivroModel = require('../models/LivroModel')
const {validarNovoLivro} = require('../validators/LivroValidator')

   // Create
   router.post('/livros', validarNovoLivro, async (req, res, next) => {
    const livro = req.body
    const livroCriado = await LivroModel.create(livro)
    res.status(201).json(livroCriado)
  })
  
  // read
  router.get('/livros', validarNovoLivro , async (req, res, next) => {
    const livros = await LivroModel.find()
    res.json(livros)
  })
  
  // UPDATE
  router.put('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    const livro = req.body
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, { new: true })
  
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "livro não encontrado!!!" })
    }
    res.json(livroAtualizado)
  })
  
  // DELETE
  router.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await LivroModel.findByIdAndDelete(id)
    res.json({ mensagem: "livro excluido!!!" })
  })

  module.exports = router